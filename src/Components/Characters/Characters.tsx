import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import './Characters.scss'

type Character = {
    id: number
    name: string
    age: number
}

export default function Characters() {
    const navigate = useNavigate()
    const {t} = useTranslation('translation', {keyPrefix: 'characters'})
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        fetch('/Data/Characters.json')
            .then((response) => response.json())
            .then((data: Character[]) => setCharacters(data))
            .catch((error) => console.error('Error loading characters:', error))
    }, [])

    return (
        <div className="Characters">
            <h1 className="title">{t('title')}</h1>

            <div className="grid">
                {characters.map((character) => (
                    <img src={`/Images/thumbnail-${character.name}.png`} alt={character.name}
                         className="characterImage"/>
                ))}
            </div>
        </div>
    )
}