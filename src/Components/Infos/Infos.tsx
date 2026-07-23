import './Infos.scss'
import { useTranslation } from "react-i18next";

export default function Infos() {
    const { t } = useTranslation('translation', { keyPrefix: 'infos' })

    return (
        <div className="Infos">
            <h1 className="title">{t('title')}</h1>

            <section className="section">
                <h2 className="sectionTitle">{t('whoAmI.title')}</h2>
                <p className="sectionContent">{t('whoAmI.content')}</p>
            </section>

            <section className="section">
                <h2 className="sectionTitle">{t('website.title')}</h2>
                <p className="sectionContent">{t('website.content')}</p>
            </section>

            <section className="section">
                <h2 className="sectionTitle">{t('findMe.title')}</h2>
                <p className="sectionContent">{t('findMe.content')}</p>

                <ul className="links">
                    <li>
                        <a href="https://www.instagram.com/urfav_elina_/" target="_blank" rel="noreferrer">
                            {t('links.roleplayInstagram')} : @urfav_elina_
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/stbn__169/" target="_blank" rel="noreferrer">
                            {t('links.personalInstagram')} : @stbn__169
                        </a>
                    </li>
                    <li>
                        {t('links.personalDiscord')} : stbn_5771
                    </li>
                </ul>
            </section>
        </div>
    )
}
