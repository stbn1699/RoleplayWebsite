import { useTheme } from '../../Context/ThemeContext'
import { useTranslation } from 'react-i18next'
import './ThemeToggle.scss'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const { t } = useTranslation('translation', { keyPrefix: 'common' })

    return (
        <button
            type="button"
            className="themeToggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('lightTheme') : t('darkTheme')}
        >
            <img
                src={theme === 'dark' ? '/Sun.svg' : '/Moon.svg'}
                alt={theme === 'dark' ? t('sunIcon') : t('moonIcon')}
            />
        </button>
    )
}