import { useTranslation } from 'react-i18next';
import './lp-offer.scss';

export default function LPOffer() {
    const { t } = useTranslation();

    return (
        <section className='trust-section'>
            <div className='trust-content'>
                <div className='trust-text-container'>
                    <h1>Zeit effizient nutzen</h1>
                    <p>
                        In einer gemeinsamen Zusammenarbeit mit mir durchlaufen wir gemeinsam mehrere Stufen, um Ihnen das Ergebnis zu liefern, welches Sie wirklich benötigen. Keine teuren Extras, keine negativen Überraschungen, klare und verfügbare Kommunikation. Auch in einer Zeit, in der Automatisierung essentiell wird, ist es nach wie vor der Mensch, der Ihrer Fantasie Leben einhaucht.
                        {/* {t("pages.home.hero.sub1")}<br></br>{t("pages.home.hero.sub2")} */}
                    </p>
                </div>
                <div className='trust-schedule-content'>

                </div>
            </div>
        </section>
    );
}