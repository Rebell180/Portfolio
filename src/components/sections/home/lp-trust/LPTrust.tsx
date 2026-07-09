import { useTranslation } from 'react-i18next';
import './lp-trust.scss';

export default function LPTrust() {
    const { t } = useTranslation();

    return (
        <section className='trust-section'>
            <div className='trust-content '>
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
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step1.point1")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step1.point2")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step2.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step2.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step2.point1")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step2.point2")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step2.point3")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step2.point4")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step3.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step3.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step3.point1")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step3.point2")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step3.point3")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step4.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step4.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step4.point1")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step4.point2")}</li>
                                </ul>
                            </div>
                        </li>                        
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step5.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step5.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step5.point1")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step5.point2")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step5.point3")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step5.point4")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className='trust-schedule-list-item'>
                            <div>
                                <h3>{t("pages.home.trust.schedule.step6.headline")}</h3>
                                <p>{t("pages.home.trust.schedule.step6.subtext")}</p>
                                <ul className='list-item-point-list'>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step6.point1")}</li>
                                    <li className='list-item-point'>{t("pages.home.trust.schedule.step6.point2")}</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}