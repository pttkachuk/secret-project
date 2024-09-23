import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "logo": "Word of Faith",
            "who we are": "Who we are",
            "worship": "Worship Meetings",
            "location": "Location",
            "contacts": "Contacts"
        }
    },
    it: {
        translation: {
            "logo": "Parola di Fede",
            "who we are": "Chi siamo",
            "worship": "Riunioni di Culto",
            "location": "Dove siamo",
            "contacts": "Contatti"
        }
    },
    ru: {
        translation: {
            "logo": "Слово Веры",
            "who we are": "О нас",
            "worship": "Богослужения",
            "location": "Адрес",
            "contacts": "Контакты"
        }
    },
    ua: {
        translation: {
            "logo": "Слово Віри",
            "who we are": "Про нас",
            "worship": "Богослужіння",
            "location": "Адреса",
            "contacts": "Контакти"
        }
    },
    // Aggiungi altre lingue se necessario
};

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