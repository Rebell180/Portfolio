import { useTranslation } from 'react-i18next';
import './lp-trust.scss';

export default function LPTrust() {
    const { t } = useTranslation();

    return (
        <section className='trust-section'>
            <div className='trust-content'>
                <div className='trust-text-container'>
                    <h1>{t("pages.home.trust.headline")}</h1>
                    <p>{t("pages.home.trust.subtext")}</p>
                </div>
                <div className='trust-schedule-content'>
                    <ul>
                        <li>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step1.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step1.subtext")}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step2.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step2.subtext")}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step3.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step3.subtext")}</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step4.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step4.subtext")}</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    );
}