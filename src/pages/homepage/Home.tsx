import LPHero from '../../components/sections/home/lp-hero/LPHero';
import LPOffer from '../../components/sections/home/lp-offer/LPOffer';
import LPTrust from '../../components/sections/home/lp-trust/LPTrust';
import './home.scss';

export default function Home() {
    return (
        <section>
            <LPHero />
            <LPTrust />
            <LPOffer />
        </section>
    );
}