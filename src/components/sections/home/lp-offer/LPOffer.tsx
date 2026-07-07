import { useTranslation } from 'react-i18next';
import './lp-offer.scss';

export default function LPOffer() {
    const { t } = useTranslation();

    return (
        <section className='offer-section'>
            <div className='offer-content'>
                <div className='offer-text-container'>
                    <h1>Angebote</h1>
                    <p>Wenn Sie noch unsicher sind, ob Sie bei mir richtig gelandet sind, dann empfehle ich Ihnen einen Blick auf folgende Leistungen zu werfen und sollte die richtige Kategorie dabei sein, dann schreiben Sie mir einfach. Wir finden dann zeitnahe einen Termin für ein Erstgespräch.</p>
                </div>
                <div className='offer-schedule-content'>

                </div>
            </div>
        </section>
    );
}