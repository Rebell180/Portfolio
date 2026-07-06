const COOKIE_CONSENT_KEY = 'cookie_consent';
const LANGUAGE_KEY = 'preferred_language';
const LANGUAGE_COOKIE = 'preferred_language';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const isBrowser = () => typeof window !== 'undefined';

const safeLocalStorageGet = (key: string) => {
    if (!isBrowser()) return null;
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
};

const safeLocalStorageSet = (key: string, value: string) => {
    if (!isBrowser()) return;
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // ignore
    }
};

const safeLocalStorageRemove = (key: string) => {
    if (!isBrowser()) return;
    try {
        window.localStorage.removeItem(key);
    } catch {
        // ignore
    }
};

const setCookieValue = (name: string, value: string, maxAgeSeconds: number) => {
    if (!isBrowser()) return;
    document.cookie = `${name}=${encodeURIComponent(value)};max-age=${maxAgeSeconds};path=/;SameSite=Lax`;
};
const deleteCookieValue = (name: string) => {
    if (!isBrowser()) return;
    document.cookie = `${name}=;max-age=0;path=/;SameSite=Lax`;
};

export const getConsentStatus = () => {
    const value = safeLocalStorageGet(COOKIE_CONSENT_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
};

export const setConsentStatus = (status: string) => {
    if (status === 'accepted' || status === 'rejected') {
        safeLocalStorageSet(COOKIE_CONSENT_KEY, status);
    }
};

export const getPreferredLanguage = () => safeLocalStorageGet(LANGUAGE_KEY);

export const setPreferredLanguage = (lang: string) => {
    safeLocalStorageSet(LANGUAGE_KEY, lang);
    setCookieValue(LANGUAGE_COOKIE, lang, COOKIE_MAX_AGE);
};

export const clearPreferredLanguage = () => {
    safeLocalStorageRemove(LANGUAGE_KEY);
    deleteCookieValue(LANGUAGE_COOKIE);
};

export const saveLanguageIfConsent = (lang: string) => {
    if (getConsentStatus() === 'accepted') {
        setPreferredLanguage(lang);
    } else {
        clearPreferredLanguage();
    }
};
