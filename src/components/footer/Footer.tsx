// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import MBNav from '../navigation/MBNav';
import './footer.scss';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="mb-footer">
            <div className="footer-content">

                <div className="logo-brand">
                    <img src="assets/images/logo/mb-logo.png" alt="MBDev Logo" />
                    <div className="logo-text-container">
                        <p className='logo-head'>Dev</p>
                        <p className='logo-sub'>Software • Web • App</p>
                    </div>
                </div>

                <MBNav onItemClick={() => {}}/>

                <div className='common-link-container'>
                    <Link className='nav-item' to="/legal-notice">{t('commonLinks.legalnotice')}</Link>
                    <Link className='nav-item' to="/privacy-policy">{t('commonLinks.privacypolicy')}</Link>
                </div>

                <div className="footer-social">
                    <a href="https://github.com/Rebell180/" aria-label="GitHub">
                        <img src="assets/images/icons/github.png" alt="MBDev Logo" />
                    </a>
                    <a href="https://linkedin.com/in/marcel-buchmann/" aria-label="LinkedIn">
                        <img src="assets/images/icons/linkedin.png" alt="MBDev Logo" />
                    </a>
                    <a href="mailto:buchmann_marcel@web.de" aria-label="Email">
                        <img src="assets/images/icons/email.png" alt="MBDev Logo" />
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Marcel Buchmann — Full Stack Software Development</p>
            </div>
        </footer>
    );
}