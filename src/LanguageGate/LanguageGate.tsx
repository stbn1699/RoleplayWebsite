import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageGate.scss'

const LANGUAGE_STORAGE_KEY = 'preferredLanguage'

export default function LanguageGate() {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

        if (savedLanguage === 'fr' || savedLanguage === 'en') {
            i18n.changeLanguage(savedLanguage)
            setIsOpen(false)
            return
        }

        setIsOpen(true)
    }, [i18n])

    const handleSelectLanguage = async (language: 'fr' | 'en') => {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
        await i18n.changeLanguage(language)
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="languageGateOverlay" role="dialog" aria-modal="true">
            <div className="languageGate">
                <button
                    type="button"
                    className="languageChoice"
                    onClick={() => handleSelectLanguage('fr')}
                    aria-label="Passer en français"
                >
                    <img className="flagIcon" src="/French.svg" alt="Français" />
                    <span className="label">Choisis ta langue !</span>
                </button>

                <div className="separator" />

                <button
                    type="button"
                    className="languageChoice"
                    onClick={() => handleSelectLanguage('en')}
                    aria-label="Switch to English"
                >
                    <span className="label">Choose your language!</span>
                    <img className="flagIcon" src="/English.svg" alt="English" />
                </button>
            </div>
        </div>
    )
}