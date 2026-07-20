import { useTheme } from '../../Context/ThemeContext'
import './ThemeToggle.scss'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            type="button"
            className="themeToggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre'}
        >
            <img
                src={theme === 'dark' ? '/Sun.svg' : '/Moon.svg'}
                alt={theme === 'dark' ? 'Icône soleil' : 'Icône lune'}
            />
        </button>
    )
}