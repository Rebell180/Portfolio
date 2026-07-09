import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import './lp-about.scss';

export default function LPAbout() {
    const { t } = useTranslation();

    return (
        <section className='about-section'>
            <div className='about-content'>
                <div className='about-text-container'>
                    <h2>{t("pages.home.about.headline")}</h2>
                    <p>{t("pages.home.about.part1")}</p>
                    <p>{t("pages.home.about.part2")}</p>
                    <p>{t("pages.home.about.part3")}</p>
                
                    <div className='about-link-group'>
                        <Link className="link-btn link-info-btn" to="/about">{t("pages.home.about.info")}</Link>
                        <Link className="link-btn" to="/contact">{t("nav.contact")}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}