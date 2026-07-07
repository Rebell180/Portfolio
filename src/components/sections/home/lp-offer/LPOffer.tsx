import { useTranslation } from 'react-i18next';
import './lp-offer.scss';

export default function LPOffer() {
    const { t } = useTranslation();

    return (
        <section className='offer-section'>
            <div className='offer-content'>

                <div className='offer-text-container'>
                    <h2>Angebote</h2>
                    <p>Wenn Sie noch unsicher sind, ob Sie bei mir richtig gelandet sind, dann empfehle ich Ihnen einen Blick auf folgende Leistungen zu werfen und sollte die richtige Kategorie dabei sein, dann schreiben Sie mir einfach. Wir finden dann zeitnahe einen Termin für ein Erstgespräch.</p>
                </div>

                <div className='offers-container'>
                    {/* c4a35a - okker - box-shadow */}
                    <article className='offer-article offer1'>
                        <h3 className='offer-headline'>Software</h3>
                        <p className='offer-subtext'>Maßgeschneiderte Softwarelösungen für Ihre Kernprozesse.Standardsoftware stößt oft an Grenzen, wo Ihre echten Wettbewerbsvorteile beginnen. Ich entwickle individuelle Softwarelösungen, die sich exakt an Ihre bestehenden Arbeitsabläufe anpassen – nicht umgekehrt. Von der Automatisierung wiederkehrender Aufgaben bis hin zur vollständigen Digitalisierung lokaler Prozesse erhalten Sie eine performante, zukunftssichere und wartungsarme IT-Infrastruktur.</p>
                    </article>

                    <article className='offer-article offer2'>
                        <h3 className='offer-headline'>SPAs</h3>
                        <p className='offer-subtext'>Ultraschnelle Webanwendungen mit nativer User Experience.Moderne Web-Applikationen müssen ohne spürbare Ladezeiten reagieren. Als Single Page Applications (SPAs) konzipiert, bieten meine Lösungen eine flüssige, intuitive Bedienung direkt im Browser – vergleichbar mit einer installierten Desktop-App. Ideal für komplexe Dashboards, interaktive Tools oder interne Verwaltungssysteme, bei denen maximale Effizienz und eine hervorragende Nutzererfahrung im Vordergrund stehen.</p>
                    </article>

                    <article className='offer-article offer3'>
                        <h3 className='offer-headline'>WebApps</h3>
                        <p className='offer-subtext'>Plattformunabhängige Web-Apps für maximale Flexibilität.Erreichen Sie Ihre Nutzer und Mitarbeiter auf jedem Endgerät – ganz ohne App-Store-Zwang. Ich konzipiere und entwickle robuste Full-Stack-Webanwendungen, die im Browser laufen, aber die Leistungsfähigkeit klassischer Software bieten. Durch moderne Architekturen sind diese Web-Apps voll skalierbar, sicher verschlüsselt und lassen sich nahtlos in Ihre digitale Landschaft integrieren.</p>
                    </article>

                    <article className='offer-article offer4'>
                        <h3 className='offer-headline'>Datenmigration</h3>
                        <p className='offer-subtext'>Sichere Datenintegration und verlustfreie Systemumzüge.Erfolgreiche Digitalisierung lebt von konsistenten Datenströmen. Ich sorge für die nahtlose Verknüpfung Ihrer Systeme über performante Schnittstellen (APIs) oder übernehme die komplette, strukturierte Migration Ihrer Altdaten in neue Systeme. Dabei stehen absolute Datensicherheit, Integrität und minimale Ausfallzeiten im Fokus, damit Ihre Prozesse auch während der Umstellung reibungslos weiterlaufen.</p>
                    </article>

                    <article className='offer-article offer4'>
                        <h3 className='offer-headline'>Beratung</h3>
                        <p className='offer-subtext'>Strategische Technologieberatung auf Augenhöhe.Vor dem ersten Code-Baustein steht die richtige Strategie. Ich analysiere Ihre bestehenden Prozesse, identifiziere Automatisierungspotenziale und berate Sie herstellerunabhängig zur optimalen Technologie-Architektur. Gemeinsam definieren wir den effizientesten Weg für Ihr Digitalisierungsvorhaben, um Fehlinvestitionen zu vermeiden und eine nachhaltige, zukunftssichere Basis für Ihr Wachstum zu schaffen.</p>
                    </article>
                </div>

            </div>
        </section>
    );
}