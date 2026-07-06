import { useTranslation } from 'react-i18next';
import './lp-hero.scss';

export default function LPHero() {
    const { t } = useTranslation();

    return (
        <section className='hero-section'>
            <div className='hero-content'>
                <div className='hero-text-container'>
                    <h1>Full Stack </h1>
                    <h1>Software Engineer</h1>
                    <h2>Software • Web • App</h2>
                    <p>{t("pages.home.hero.sub1")}<br></br>{t("pages.home.hero.sub2")}</p>
                </div>
                <div className='hero-image-container'>
                    <img className="foto-image" src="assets/images/lphero/foto2.png" alt="" />
                </div>
            </div>
        </section>
    );
}