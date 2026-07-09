import { useTranslation } from 'react-i18next';
import './lp-offer.scss';

export default function LPOffer() {
    const { t } = useTranslation();

    return (
        <section className='offer-section'>
            <div className='offer-content'>
                <div className='offer-text-container'>
                    <h2>{t("pages.home.offer.headline")}</h2>
                    <p>{t("pages.home.offer.subtext")}</p>
                </div>

                <div className='offers-container'>
                    <article className='offer-article offer1'>
                        <h3 className='offer-headline'>{t("pages.home.offer.offer1.headline")}</h3>
                        <p className='offer-subtext'>{t("pages.home.offer.offer1.subtext")}</p>
                    </article>

                    <article className='offer-article offer2'>
                        <h3 className='offer-headline'>{t("pages.home.offer.offer2.headline")}</h3>
                        <p className='offer-subtext'>{t("pages.home.offer.offer2.subtext")}</p>
                    </article>

                    <article className='offer-article offer3'>
                        <h3 className='offer-headline'>{t("pages.home.offer.offer3.headline")}</h3>
                        <p className='offer-subtext'>{t("pages.home.offer.offer3.subtext")}</p>
                    </article>

                    <article className='offer-article offer4'>
                        <h3 className='offer-headline'>{t("pages.home.offer.offer4.headline")}</h3>
                        <p className='offer-subtext'>{t("pages.home.offer.offer4.subtext")}</p>
                    </article>

                    <article className='offer-article offer4'>
                        <h3 className='offer-headline'>{t("pages.home.offer.offer5.headline")}</h3>
                        <p className='offer-subtext'>{t("pages.home.offer.offer5.subtext")}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}