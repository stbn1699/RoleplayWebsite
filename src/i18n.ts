import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fr from './locales/fr.json'
import en from './locales/en.json'

export const LANGUAGE_STORAGE_KEY = 'preferredLanguage'
export type SupportedLanguage = 'fr' | 'en'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['fr', 'en'],
        lng: undefined,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fr: { translation: fr },
            en: { translation: en },
        },
    })

export function getPreferredLanguage(): SupportedLanguage | null {
    const language = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return language === 'fr' || language === 'en' ? language : null
}

export async function changeAppLanguage(language: SupportedLanguage) {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    await i18n.changeLanguage(language)
}

function syncDocumentLanguage(language: string) {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = language.startsWith('en') ? 'en' : 'fr'
    }
}

i18n.on('languageChanged', syncDocumentLanguage)
syncDocumentLanguage(i18n.language)

export default i18n
