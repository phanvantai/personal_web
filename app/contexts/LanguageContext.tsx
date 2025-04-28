"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'vi';

// Define context type
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    // Initialize with English or get from localStorage if available
    const [language, setLanguageState] = useState<Language>('en');

    // Load saved language preference from localStorage when component mounts
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    // Save language preference to localStorage when it changes
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};