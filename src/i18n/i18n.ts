import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getConsentStatus, getPreferredLanguage } from './consent';
import de from './locales/de.json';
import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
    de: { translation: de },
    en: { translation: en },
    tr: { translation: tr },
};

const preferredLanguage = getConsentStatus() === 'accepted' ? getPreferredLanguage() : null;

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: preferredLanguage || 'de',
        fallbackLng: 'de',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;