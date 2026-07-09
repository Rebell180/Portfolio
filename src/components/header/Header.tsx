import { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next'
import './header.scss';
import '../../styles/animations.scss';
import MBNav from '../navigation/MBNav';
import LanguageSwitch from '../language-switch/LanguageSwitch';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isCompact, setIsCompact] = useState(() => window.innerWidth < 769)
    const { t } = useTranslation()

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth < 769)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className="mb-header">
            <div className="header-content">

                <Link to="/home" className="logo" onClick={() => setMenuOpen(false)}>
                    <div className="logo-brand">
                        <img src="assets/images/logo/mb-logo.png" alt="MBDev Logo" />
                        <div className="logo-text-container">
                            <p className='logo-head'>Dev</p>
                            <p className='logo-sub'>Software • Web • API</p>
                        </div>
                    </div>
                </Link>
                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <MBNav onItemClick={() =>setMenuOpen(false)} />
                    {isCompact && menuOpen && (
                        <div className="mobile-menu-actions">
                            <p>{t('')}</p>
                            <LanguageSwitch />
                        </div>
                    )}
                </div>
                <div className="nav-actions">
                    {!isCompact && <LanguageSwitch />}
                    <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                </div>
            
            
            </div>
        </header>
    )
}
