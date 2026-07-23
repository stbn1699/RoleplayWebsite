import './Rules.scss'
import { useTranslation } from "react-i18next";

const RULE_KEYS = ['respect', 'limits', 'noMen', 'noDm'] as const

export default function Rules() {
    const { t } = useTranslation('translation', { keyPrefix: 'rules' })

    return (
        <div className="Rules">
            <h1 className="title">{t('title')}</h1>
            <p className="intro">{t('intro')}</p>

            {RULE_KEYS.map((key) => (
                <section key={key} className="section">
                    <h2 className="sectionTitle">{t(`list.${key}.title`)}</h2>
                    <p className="sectionContent">{t(`list.${key}.content`)}</p>
                </section>
            ))}
        </div>
    )
}
