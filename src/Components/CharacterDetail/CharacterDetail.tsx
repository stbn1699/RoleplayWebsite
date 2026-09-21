import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import './CharacterDetail.scss'
import { useTranslation } from 'react-i18next'
import { isCharacterName } from '../../characters'
import { loadCharacters } from '../../services/dataService'
import { useJsonResource } from '../../hooks/useJsonResource'

export default function CharacterDetail() {
    const [searchParams] = useSearchParams()
    const { t } = useTranslation('translation', { keyPrefix: 'characterDetail' })
    const { t: translateStatus } = useTranslation('translation', { keyPrefix: 'status' })

    const characterName = searchParams.get('characterName')
    const loadData = useCallback((signal: AbortSignal) => loadCharacters(signal), [])
    const { data: characters, isLoading, hasError } = useJsonResource(loadData)
    const character = characters?.find((item) => item.name === characterName) ?? null

    if (isLoading) {
        return <p className="pageStatus">{translateStatus('loading')}</p>
    }

    if (hasError) {
        return <p className="pageStatus pageStatusError" role="alert">{translateStatus('error')}</p>
    }

    if (!isCharacterName(characterName) || !character) {
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
            <p className="age">{t('ageLabel')}: {character.age}</p>
            <p className="description">{t(`${character.name}.description`)}</p>
        </div>
    )
}