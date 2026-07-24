import { useNavigate, useLocation } from 'react-router-dom'
import './HomeButton.scss'

export default function HomeButton() {
    const navigate = useNavigate()
    const location = useLocation()

    if (location.pathname === '/') {
        return null
    }

    return (
        <button
            type="button"
            className="homeButton"
            onClick={() => navigate('/')}
            aria-label="Revenir au menu principal"
            title="Retour au menu"
        >
            <span className="homeIcon" aria-hidden="true" />
        </button>
    )
}