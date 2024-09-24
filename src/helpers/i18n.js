import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from './languages';

const resources = languages

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ua", // Lingua di default
        fallbackLng: "it", // Lingua di riserva
        interpolation: {
            escapeValue: false // React già di per sé è sicuro per XSS
        }
    });