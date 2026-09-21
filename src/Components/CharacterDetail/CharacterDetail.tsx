import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './CharacterDetail.scss'
import {useTranslation} from "react-i18next";
import { isCharacterName } from '../../characters'

type Character = {
    id: number
    name: string
    age: number
}

export default function CharacterDetail() {
    const [searchParams] = useSearchParams()
    const [character, setCharacter] = useState<Character | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const { t } = useTranslation('translation', { keyPrefix: 'characterDetail' })
    const { t: translateStatus } = useTranslation('translation', { keyPrefix: 'status' })

    const characterName = searchParams.get('characterName')

    useEffect(() => {
        const controller = new AbortController()

        setCharacter(null)
        setIsLoading(true)
        setHasError(false)

        if (!isCharacterName(characterName)) {
            setIsLoading(false)
            return
        }

        fetch('/Data/Characters.json', {signal: controller.signal})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Unable to load character (${response.status})`)
                }

                return response.json()
            })
            .then((data: Character[]) => {
                const foundCharacter = data.find(
                    (item) => item.name === characterName
                ) || null

                setCharacter(foundCharacter)
            })
            .catch((error: unknown) => {
                if (error instanceof DOMException && error.name === 'AbortError') return
                setHasError(true)
            })
            .finally(() => setIsLoading(false))

        return () => controller.abort()
    }, [characterName])

    if (isLoading) {
        return <p className="pageStatus">{translateStatus('loading')}</p>
    }

    if (hasError) {
        return <p className="pageStatus pageStatusError" role="alert">{translateStatus('error')}</p>
    }

    if (!character) {
        return <p className="pageStatus">{translateStatus('notFound')}</p>
    }

    return (
        <div className="CharacterDetail">
            <div
                className="backgroundIcon"
                style={{
                    ['--icon-url' as string]: `url('/Icons/icon-${character.name}.svg')`
                }}
                aria-hidden="true"
            />

            <h1 className="title">{t(`${character.name}.name`)}</h1>
            <p className="description">{t(`${character.name}.description`)}</p>
        </div>
    )
}