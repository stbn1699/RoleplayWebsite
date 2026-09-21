import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import './Characters.scss'

type Character = {
    id: number
    name: string
    age: number
}

type ImageType = 'thumbnail' | 'face'

export default function Characters() {
    const navigate = useNavigate()
    const {t} = useTranslation('translation', {keyPrefix: 'characters'})
    const [characters, setCharacters] = useState<Character[]>([])
    const [imageType, setImageType] = useState<ImageType>('thumbnail')
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        fetch('/Data/Characters.json')
            .then((response) => response.json())
            .then((data: Character[]) => setCharacters(data))
            .catch((error) => console.error('Error loading characters:', error))
    }, [])

    const handleCharacterClick = (characterName: string) => {
        navigate(`/characterdetail?characterName=${encodeURIComponent(characterName)}`)
    }

    const toggleImageType = () => {
        setIsAnimating(true)

        setTimeout(() => {
            setImageType((prev) => prev === 'thumbnail' ? 'face' : 'thumbnail')
        }, 120)

        setTimeout(() => {
            setIsAnimating(false)
        }, 320)
    }

    return (
        <div className="Characters">
            <div className="titleRow">
                <h1 className="title">{t('title')}</h1>

                <button
                    type="button"
                    className="imageSwitchButton"
                    onClick={toggleImageType}
                    aria-label={t(imageType)}>
                        <span className="imageSwitchIcon"
                              style={{
                                  ['--toggle-icon-url' as string]:
                                      imageType === 'thumbnail'
                                          ? "url('/Person.svg')"
                                          : "url('/Thumbnail.svg')"
                              }}
                              aria-hidden="true"/>
                        <span className="imageSwitchLabel">{t(imageType)}</span>
                </button>
            </div>

            <div className={`grid ${isAnimating ? 'is-switching' : ''}`}>
                {characters.map((character) => (
                    <button
                        key={character.id}
                        type="button"
                        className="characterButton"
                        onClick={() => handleCharacterClick(character.name)}
                        aria-label={`Ouvrir la fiche de ${character.name}`}
                    >
                        <img
                            className="characterImage"
                            src={`/Images/${imageType}-${character.name}.png`}
                            alt=""
                            aria-hidden="true"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}