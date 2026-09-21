import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './HomePage.scss'
import Button from '../Button/Button'
import { changeAppLanguage } from '../../i18n'
import { ROUTES } from '../../routes'

export default function HomePage() {
    const navigate = useNavigate()
    const { t } = useTranslation('translation', { keyPrefix: 'homepage' })
    const { t: translateCommon } = useTranslation('translation', { keyPrefix: 'common' })

    const handleLanguageChange = async (language: 'fr' | 'en') => {
        await changeAppLanguage(language)
    }

    return (
        <div className="HomePage">
            <h1 className="title">{t('title')}</h1>

            <div className="languages">
                <button
                    type="button"
                    className="flagButton"
                    onClick={() => handleLanguageChange('fr')}
                    aria-label={t('openLanguageFrench')}
                >
                    <img src="/French.svg" alt={translateCommon('frenchFlag')} />
                </button>

                <button
                    type="button"
                    className="flagButton"
                    onClick={() => handleLanguageChange('en')}
                    aria-label={t('openLanguageEnglish')}
                >
                    <img src="/English.svg" alt={translateCommon('englishFlag')} />
                </button>
            </div>

            <div className="buttons">
                <Button label={t('characters')} onClick={() => navigate(ROUTES.characters)} />
                <Button label={t('contexts')} onClick={() => navigate(ROUTES.contexts)} />
                <Button label={t('rules')} onClick={() => navigate(ROUTES.rules)} />
                <Button label={t('infos')} onClick={() => navigate(ROUTES.infos)} />
            </div>
        </div>
    )
}