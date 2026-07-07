import { useTranslation } from 'react-i18next';
import './lp-trust.scss';

export default function LPTrust() {
    const { t } = useTranslation();

    return (
        <section className='trust-section'>
            <div className='trust-content'>
                <div className='trust-text-container'>
                    <h2>{t("pages.home.trust.headline")}</h2>
                    <p>{t("pages.home.trust.subtext")}</p>
                </div>
                <div className='trust-schedule-content'>
                    <ul className='trust-schedule-list'>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step1.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step1.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>Wir sprechen über Ziele, Prozesse und Anforderungen.</li>
                                    <li className='list-item-point'>Ich verstehe zuerst Ihr Unternehmen, bevor wir Lösungen entwickeln</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step2.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step2.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>Design</li>
                                    <li className='list-item-point'>Abläufe</li>
                                    <li className='list-item-point'>User Experience</li>
                                    <li className='list-item-point'>Technische Planung</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step3.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step3.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>Zwischenstände</li>
                                    <li className='list-item-point'>Frühes Feedback</li>
                                    <li className='list-item-point'>Kurze Kommunikationswege</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step4.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step4.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>Zwei Designkorrekturen sind bereits im Projektpreis enthalten.</li>
                                    <li className='list-item-point'>Weitere Änderungswünsche oder neue Funktionen werden transparent abgestimmt.</li>
                                </ul>
                            </div>
                        </li>
                        

                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step5.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step5.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>Deployment</li>
                                    <li className='list-item-point'>Tests</li>
                                    <li className='list-item-point'>Abnahme</li>
                                    <li className='list-item-point'>Einweisung</li>
                                </ul>
                            </div>
                        </li>


                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step6.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step6.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>Auch nach dem Projekt bleibe ich Ihr Ansprechpartner.</li>
                                    <li className='list-item-point'>Sprechen wir über Support-Lösungen.</li>
                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </section>
    );
}