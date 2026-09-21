import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './HomeButton.scss'

export default function HomeButton() {
    const navigate = useNavigate()
    const location = useLocation()
    const { t } = useTranslation('translation', { keyPrefix: 'common' })

    if (location.pathname === '/') {
        return null
    }

    return (
        <button
            type="button"
            className="homeButton"
            onClick={() => navigate('/')}
            aria-label={t('backHome')}
            title={t('backHomeTitle')}
        >
            <span className="homeIcon" aria-hidden="true" />
        </button>
    )
}