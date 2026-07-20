import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fr: {
                translation: {
                    homepage: {
                        title: '~Bienvenue~',
                        characters: 'Personnages',
                        contexts: 'Contextes',
                        rules: 'Règles',
                        infos: 'Informations',
                    },
                    characters: {
                        title: '~Personnages~',
                    }
                },
            },
            en: {
                translation: {
                    homepage: {
                        title: '~Welcome~',
                        characters: 'Characters',
                        contexts: 'Contexts',
                        rules: 'Rules',
                        infos: 'Informations',
                    },
                    characters: {
                        title: '~Characters~',
                    }
                },
            },
        },
    })

export default i18n