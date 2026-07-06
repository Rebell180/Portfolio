import { useTranslation } from 'react-i18next';
import './lp-trust.scss';

export default function LPTrust() {
    const { t } = useTranslation();

    return (
        <section className='trust-section'>
            <div className='trust-content'>
                <div className='trust-text-container'>
                    <h1>Zeit effizient nutzen</h1>
                    <p>
                        In einer gemeinsamen Zusammenarbeit mit mir durchlaufen wir gemeinsam mehrere Stufen, um Ihnen das Ergebnis zu liefern, welches Sie wirklich benötigen. Keine teuren Extras, keine negativen Überraschungen, klare und verfügbare Kommunikation. Auch in einer Zeit, in der Automatisierung essentiell wird, ist es nach wie vor der Mensch, der Ihrer Fantasie Leben einhaucht.
                    </p>
                </div>
                <div className='trust-schedule-content'>
                    <ul>
                        <li>
                            <div>
                                <h3>Anforderungsanalyse</h3>
                                <p>Wir setzen uns zusammen und schauen im ersten Schritt, was Sie sich vorgestellt haben und was Sie damit erreichen möchten.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Planungsphase</h3>
                                <p>Nach dem wir die Wünsche und Vorstellungen geordnet haben, beschäftigen wir uns mit den Umsetzungsmöglichkeiten, Technologien, Design Guide und mehr. Im Anschluss sollten wir gemeinsam einen klaren Fahrplan haben, um Ihr Ziel zu erreichen.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Implementierungsphase</h3>
                                <p>An diesem Punkt liefern Sie mir, sofern nciht anders vereinbart den Inhalt Ihres Projektes, während ich meinen Teil in der Entwicklung erfülle.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Review & Feedback</h3>
                                <p>Wenn die Implementierung abgeschlossen ist, wird das Gesamtbild gemeinsam geprüft und wir reden über Ihre Zufriedenheit.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}