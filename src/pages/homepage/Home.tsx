import LPAbout from '../../components/sections/home/lp-about/LPAbout';
import { LPContact } from '../../components/sections/home/lp-contact/LPContact';
import LPHero from '../../components/sections/home/lp-hero/LPHero';
import LPOffer from '../../components/sections/home/lp-offer/LPOffer';
import LPTrust from '../../components/sections/home/lp-trust/LPTrust';
import './home.scss';

export default function Home() {
    return (
        <section>
            <LPHero />
            <LPAbout />
            <LPTrust />
            <LPOffer />
            <LPContact />
        </section>
    );
}