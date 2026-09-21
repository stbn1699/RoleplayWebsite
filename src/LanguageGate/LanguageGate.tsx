import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeAppLanguage, getPreferredLanguage } from '../i18n'
import './LanguageGate.scss'

export default function LanguageGate() {
    const { t } = useTranslation('translation', { keyPrefix: 'languageGate' })
    const { t: translateCommon } = useTranslation('translation', { keyPrefix: 'common' })
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const savedLanguage = getPreferredLanguage()

        if (savedLanguage === 'fr' || savedLanguage === 'en') {
            void changeAppLanguage(savedLanguage)
            setIsOpen(false)
            return
        }

        setIsOpen(true)
    }, [])

    const handleSelectLanguage = async (language: 'fr' | 'en') => {
        await changeAppLanguage(language)
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div
            className="languageGateOverlay"
            role="dialog"
            aria-modal="true"
            aria-label={t('dialogLabel')}
        >
            <div className="languageGate">
                <button
                    type="button"
                    className="languageChoice"
                    onClick={() => handleSelectLanguage('fr')}
                    aria-label={t('frenchChoice')}
                >
                    <img className="flagIcon" src="/French.svg" alt={translateCommon('frenchFlag')} />
                    <span className="label">{t('frenchChoice')}</span>
                </button>

                <div className="separator" />

                <button
                    type="button"
                    className="languageChoice"
                    onClick={() => handleSelectLanguage('en')}
                    aria-label={t('englishChoice')}
                >
                    <span className="label">{t('englishChoice')}</span>
                    <img className="flagIcon" src="/English.svg" alt={translateCommon('englishFlag')} />
                </button>
            </div>
        </div>
    )
}