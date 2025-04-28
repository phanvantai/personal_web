"use client"

import { websiteData } from '../data/websiteData'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language];
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="copyright">
                        <p>&copy; {currentYear} {t.footer.copyright}</p>
                    </div>
                    <div className="social-icons">
                        {websiteData.social.map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}