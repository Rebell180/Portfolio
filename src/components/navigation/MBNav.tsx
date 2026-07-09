import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import './mb-nav.scss';

interface NavigationProps {
    onItemClick: () => void;
}

export default function MBNav( { onItemClick }: NavigationProps ) {
    const [isCompact, setIsCompact] = useState(() => window.innerWidth < 769);
    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth < 769)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <>
            <nav className={`navbar ${isCompact ? 'mobile' : 'desktop'}`}>
                <Link className='nav-item' to="/home" onClick={ onItemClick }>{t('nav.home')}</Link>
                <Link className='nav-item' to="/about" onClick={ onItemClick }>{t('nav.about')}</Link>
                <Link className='nav-item' to="/projects" onClick={ onItemClick }>{t('nav.projects')}</Link>
                <Link className='nav-item' to="/contact" onClick={ onItemClick }>{t('nav.contact')}</Link>
            </nav>
        </>
    );
}