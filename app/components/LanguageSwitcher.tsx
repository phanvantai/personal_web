"use client"

import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'vi' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Toggle language"
            title={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
        >
            {language === 'en' ? 'VI' : 'EN'}
        </button>
    );
};

export default LanguageSwitcher;