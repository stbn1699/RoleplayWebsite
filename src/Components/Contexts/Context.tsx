import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import './Contexts.scss'

type Context = {
    id: number
    name: string
    universe: string[]
    character: string[]
    chatacterId?: number | number[]
}

function formatCharacterName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

function getVisibleCharacters(characters: string[]) {
    return characters.filter((character) => character.toLowerCase() !== 'aucun')
}

export default function Contexts() {
    const [contexts, setContexts] = useState<Context[]>([])
    const [openContextId, setOpenContextId] = useState<number | null>(null)
    const {t} = useTranslation('translation', {keyPrefix: 'contexts'})
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/Data/Contexts.json')
            .then((response) => response.json())
            .then((data: Context[]) => setContexts(data))
            .catch((error) => console.error('Error loading contexts:', error))
    }, [])

    const handleToggle = (id: number) => {
        setOpenContextId((prev) => (prev === id ? null : id))
    }

    const handleCharacterClick = (characterName: string) => {
        navigate(`/characterdetail?characterName=${encodeURIComponent(characterName)}`)
    }

    return (
        <div className="Contexts">
            <h1 className="title">Contexts</h1>

            <div className="contextsList">
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
                                    <h2 className="contextTitle">
                                        {t(`${context.name}.name`)}
                                    </h2>

                                    <div className="contextMeta">
                                        {visibleCharacters.length > 0 && (
                                            <p>
                                                <span className="label">Personnage :</span>

                                                <span className="value">
                                                    {visibleCharacters.map((character, index) => (
                                                        <span key={character}>
                                                            <a
                                                                className="characterLink"
                                                                onClick={() => handleCharacterClick(character)}
                                                            >
                                                                {formatCharacterName(character)}
                                                            </a>
                                                            {index < visibleCharacters.length - 1 && ' / '}
                                                </span>
                                                    ))}
                                                </span>
                                            </p>
                                        )}

                                        <p>
                                            <span className="label">Univers :</span>
                                            <span className="value">
                                {context.universe.join(' / ')}
                            </span>
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <div
                                id={contentId}
                                className={`contextContent ${isOpen ? 'isVisible' : ''}`}
                            >
                                <p>{t(`${context.name}.content`)}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}