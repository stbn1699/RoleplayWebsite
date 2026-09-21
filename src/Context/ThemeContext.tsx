import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const THEME_STORAGE_KEY = 'preferredTheme'

function getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        const root = document.documentElement

        root.setAttribute('data-theme', theme)
        root.style.colorScheme = theme
        localStorage.setItem(THEME_STORAGE_KEY, theme)

        let themeColorMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

        if (!themeColorMeta) {
            themeColorMeta = document.createElement('meta')
            themeColorMeta.name = 'theme-color'
            document.head.appendChild(themeColorMeta)
        }

        themeColorMeta.content = getComputedStyle(root).getPropertyValue('--theme-color').trim()
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used inside ThemeProvider')
    }

    return context
}