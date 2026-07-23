import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './HomePage.scss'
import Button from "../Button/Button";

const LANGUAGE_STORAGE_KEY = 'preferredLanguage'

export default function HomePage() {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'homepage' })

    const handleLanguageChange = async (language: 'fr' | 'en') => {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
        await i18n.changeLanguage(language)
    }

    return (
        <div className="HomePage">
            <h1 className="title">{t('title')}</h1>

            <div className="languages">
                <button
                    type="button"
                    className="flagButton"
                    onClick={() => handleLanguageChange('fr')}
                    aria-label="Passer en français"
                >
                    <img src="/French.svg" alt="Français" />
                </button>

                <button
                    type="button"
                    className="flagButton"
                    onClick={() => handleLanguageChange('en')}
                    aria-label="Switch to English"
                >
                    <img src="/English.svg" alt="English" />
                </button>
            </div>

            <div className="buttons">
                <Button label={t('characters')} onClick={() => navigate('/characters')} />
                <Button label={t('contexts')} onClick={() => navigate('/contexts')} />
                <Button label={t('rules')} onClick={() => navigate('/rules')} />
                <Button label={t('infos')} onClick={() => navigate('/infos')} />
            </div>
        </div>
    )
}