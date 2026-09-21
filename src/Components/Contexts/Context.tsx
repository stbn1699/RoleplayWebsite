import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './Contexts.scss'
import { ROUTES } from '../../routes'
import { loadContexts } from '../../services/dataService'
import { useJsonResource } from '../../hooks/useJsonResource'

function formatCharacterName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

function getVisibleCharacters(characters: string[]) {
    return characters.filter((character) => character.toLowerCase() !== 'aucun')
}

export default function Contexts() {
    const loadData = useCallback((signal: AbortSignal) => loadContexts(signal), [])
    const { data, isLoading, hasError } = useJsonResource(loadData)
    const contexts = data ?? []
    const [openContextId, setOpenContextId] = useState<number | null>(null)
    const {t} = useTranslation('translation', {keyPrefix: 'contexts'})
    const {t: translateStatus} = useTranslation('translation', {keyPrefix: 'status'})
    const {t: translateCommon} = useTranslation('translation', {keyPrefix: 'common'})
    const navigate = useNavigate()

    const handleToggle = (id: number) => {
        setOpenContextId((prev) => (prev === id ? null : id))
    }

    const handleCharacterClick = (characterName: string) => {
        navigate(`${ROUTES.characterDetail}?characterName=${encodeURIComponent(characterName)}`)
    }

    return (
        <div className="Contexts">
            <h1 className="title">{t('title')}</h1>

            {isLoading && <p className="pageStatus">{translateStatus('loading')}</p>}
            {!isLoading && hasError && (
                <p className="pageStatus pageStatusError" role="alert">{translateStatus('error')}</p>
            )}
            {!isLoading && !hasError && <div className="contextsList">
                {contexts.map((context) => {
                    const isOpen = openContextId === context.id
                    const contentId = `context-content-${context.id}`
                    const visibleCharacters = getVisibleCharacters(context.character)

                    return (
                        <article key={context.id} className={`contextCard ${isOpen ? 'isOpen' : ''}`}>
                            <button
                                type="button"
                                className="contextButton"
                                onClick={() => handleToggle(context.id)}
                                aria-expanded={isOpen}
                                aria-controls={contentId}>
                                <div className="contextHeading">
                                    {context.nsfw && (
                                        <span
                                            className="nsfwIcon"
                                            aria-label={translateCommon('adultContent')}
                                            title={translateCommon('nsfwTitle')}
                                        />
                                    )}
                                    <h2 className="contextTitle">
                                        {t(`${context.name}.name`)}
                                    </h2>
                                    <div className="contextMeta">
                                        <p>
                                            <span className="label">{t('universe')}</span>
                                            <span className="value">
                                {context.universe.join(' / ')}
                            </span>
                                        </p>
                                    </div>
                                </div>
                            </button>

                            {visibleCharacters.length > 0 && (
                                <div className="contextMeta contextCharacters">
                                    <p>
                                        <span className="label">{t('character')}</span>
                                        <span className="value">
                                            {visibleCharacters.map((character, index) => (
                                                <span key={character}>
                                                    <button
                                                        type="button"
                                                        className="characterLink"
                                                        onClick={() => handleCharacterClick(character)}
                                                    >
                                                        {formatCharacterName(character)}
                                                    </button>
                                                    {index < visibleCharacters.length - 1 && ' / '}
                                                </span>
                                            ))}
                                        </span>
                                    </p>
                                </div>
                            )}

                            <div
                                id={contentId}
                                className={`contextContent ${isOpen ? 'isVisible' : ''}`}
                            >
                                <p>{t(`${context.name}.content`)}</p>
                            </div>
                        </article>
                    )
                })}
            </div>}
        </div>
    )
}