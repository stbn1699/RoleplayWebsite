import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './HomePage.scss'
import Button from "../Button/Button";

export default function HomePage() {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'homepage' })

    return (
        <div className="HomePage">
            <h1 className="title">{t('title')}</h1>

            <div className="languages">
                <button
                    type="button"
                    className="flagButton"
                    onClick={() => i18n.changeLanguage('fr')}
                    aria-label="Passer en français"
                >
                    <img src="/French.svg" alt="Français" />
                </button>

                <button
                    type="button"
                    className="flagButton"
                    onClick={() => i18n.changeLanguage('en')}
                    aria-label="Switch to English"
                >
                    <img src="/English.svg" alt="English" />
                </button>
            </div>

            <div className="buttons">
                <Button label={t('characters')} onClick={() => navigate('/characters')} />
                <Button label={t('contexts')} onClick={() => navigate('/page-2')} />
                <Button label={t('rules')} onClick={() => navigate('/page-3')} />
                <Button label={t('infos')} onClick={() => navigate('/page-4')} />
            </div>
        </div>
    )
}