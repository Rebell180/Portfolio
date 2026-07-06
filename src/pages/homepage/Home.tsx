import LPHero from '../../components/sections/home/lp-hero/LPHero';
import LPTrust from '../../components/sections/home/lp-trust/LPTrust';
import './home.scss';

export default function Home() {
    return (
        <section>
            <LPHero />
            <LPTrust />
        </section>
    );
}