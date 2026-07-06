import { useTranslation } from 'react-i18next';
import './language-switch.scss';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'de', name: 'Deutsch', flag: 'assets/images/flags/de.png' },
        { code: 'en', name: 'English', flag: 'assets/images/flags/en.png' },
        // { code: 'tr', name: 'Türkçe', flag: 'assets/images/flags/tr.png' }
    ];

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode);
    };

    return (
        <div className="language-switcher" role="radiogroup" aria-label="Sprache wählen / Select language">
            {languages.map((lang) => {
                const isActive = i18n.language?.startsWith(lang.code);
                return (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`lang-btn ${isActive ? 'active' : ''}`}
                        aria-checked={isActive}
                        role="radio"
                        aria-label={lang.name}
                        title={lang.name}
                    >
                        <img 
                            src={lang.flag} 
                            alt={`${lang.name} Flagge`} 
                            className="flag-icon"
                        />
                    </button>
                );
            })}
        </div>
    );
}