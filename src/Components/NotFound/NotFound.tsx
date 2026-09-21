import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
    const navigate = useNavigate()
    const { t } = useTranslation('translation', { keyPrefix: 'status' })

    return (
        <main className="pageStatusPage">
            <h1 className="pageStatusTitle">{t('pageNotFound')}</h1>
            <button type="button" className="pageStatusButton" onClick={() => navigate('/')}>
                {t('backHome')}
            </button>
        </main>
    )
}
