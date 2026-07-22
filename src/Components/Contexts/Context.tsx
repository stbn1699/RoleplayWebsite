import { useEffect, useState } from "react";
import './Contexts.scss'

type Context = {
    id: number
    name: string
    universe: string
    character: string
    chatacterId: number
}

function formatContextName(name: string) {
    return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (letter) => letter.toUpperCase())
        .trim()
}

function formatCharacterName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export default function Contexts() {
    const [contexts, setContexts] = useState<Context[]>([])

    useEffect(() => {
        fetch('/Data/Contexts.json')
            .then((response) => response.json())
            .then((data: Context[]) => setContexts(data))
            .catch((error) => console.error('Error loading contexts:', error))
    }, [])

    return (
        <div className="Contexts">
            <h1 className="title">Contexts</h1>

            <div className="contextsList">
                {contexts.map((context) => (
                    <article key={context.id} className="contextCard">
                        <h2 className="contextTitle">
                            {formatContextName(context.name)}
                        </h2>

                        <div className="contextMeta">
                            <p>
                                <span className="label">Personnage :</span>{' '}
                                <span className="value">
                                    {formatCharacterName(context.character)}
                                </span>
                            </p>

                            <p>
                                <span className="label">Univers :</span>{' '}
                                <span className="value">{context.universe}</span>
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}