
import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const translations = { en, fr };

const TranslationContext = createContext({
    lang: "en",
    setLang: () => { },
    t: (k) => k
});

export function TranslationProvider({ children }) {
    const [lang, setLang] = useState(
        localStorage.getItem("lang") || "en"
    );

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const t = (path) => {
        const parts = path.split(".");
        let value = translations[lang];
        for (const p of parts) {
            value = value?.[p];
            if (value == null) return path;
        }
        return value;
    };

    return (
        <TranslationContext.Provider value={{ lang, setLang, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    return useContext(TranslationContext);
}
