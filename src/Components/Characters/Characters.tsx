import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Characters.scss'
import { ROUTES } from '../../routes'
import { loadCharacters } from '../../services/dataService'
import { useJsonResource } from '../../hooks/useJsonResource'

type ImageType = 'thumbnail' | 'face'

export default function Characters() {
    const navigate = useNavigate()
    const {t} = useTranslation('translation', {keyPrefix: 'characters'})
    const {t: translateStatus} = useTranslation('translation', {keyPrefix: 'status'})
    const loadData = useCallback((signal: AbortSignal) => loadCharacters(signal), [])
    const { data, isLoading, hasError } = useJsonResource(loadData)
    const characters = data ?? []
    const [imageType, setImageType] = useState<ImageType>('thumbnail')
    const [isAnimating, setIsAnimating] = useState(false)
    const animationTimeouts = useRef<ReturnType<typeof setTimeout>[]>([])

    const handleCharacterClick = (characterName: string) => {
        navigate(`${ROUTES.characterDetail}?characterName=${encodeURIComponent(characterName)}`)
    }

    const toggleImageType = () => {
        animationTimeouts.current.forEach(clearTimeout)
        animationTimeouts.current = []
        setIsAnimating(true)

        animationTimeouts.current.push(setTimeout(() => {
            setImageType((prev) => prev === 'thumbnail' ? 'face' : 'thumbnail')
        }, 120))

        animationTimeouts.current.push(setTimeout(() => {
            setIsAnimating(false)
        }, 320))
    }

    useEffect(() => () => {
        animationTimeouts.current.forEach(clearTimeout)
    }, [])

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

            {isLoading && <p className="pageStatus">{translateStatus('loading')}</p>}
            {!isLoading && hasError && (
                <p className="pageStatus pageStatusError" role="alert">{translateStatus('error')}</p>
            )}
            {!isLoading && !hasError && (
                <div className={`grid ${isAnimating ? 'is-switching' : ''}`}>
                    {characters.map((character) => (
                        <button
                            key={character.id}
                            type="button"
                            className="characterButton"
                            onClick={() => handleCharacterClick(character.name)}
                            aria-label={t('openCharacter', {name: character.name})}
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
            )}
        </div>
    )
}