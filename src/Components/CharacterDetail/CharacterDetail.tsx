import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './CharacterDetail.scss'
import {useTranslation} from "react-i18next";

type Character = {
    id: number
    name: string
    age: number
}

export default function CharacterDetail() {
    const [searchParams] = useSearchParams()
    const [character, setCharacter] = useState<Character | null>(null)
    const { t } = useTranslation('translation', { keyPrefix: 'characterDetail' })

    const characterName = searchParams.get('characterName')

    useEffect(() => {
        fetch('/Data/Characters.json')
            .then((response) => response.json())
            .then((data: Character[]) => {
                const foundCharacter = data.find(
                    (item) => item.name === characterName
                ) || null

                setCharacter(foundCharacter)
            })
            .catch((error) => console.error('Error loading character:', error))
    }, [characterName])

    if (!character) {
        return <div>Character not found</div>
    }

    return (
        <div className="CharacterDetail">
            <div
                className="backgroundIcon"
                style={{
                    ['--icon-url' as string]: `url('/Icons/icon-${characterName}.svg')`
                }}
                aria-hidden="true"
            />

            <h1 className="title">{t(`${characterName}.name`)}</h1>
            <p className="description">{t(`${characterName}.description`)}</p>
        </div>
    )
}