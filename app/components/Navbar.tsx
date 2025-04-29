"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import ColorPicker from './ColorPicker'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            let current = ''

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                if (window.scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id') || ''
                }
            })

            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        setIsMenuOpen(false)

        const targetSection = document.getElementById(id)
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            })
        }
    }

    // Map navigation items to their translations
    const navItems = [
        { name: t.nav.home, link: "#home" },
        { name: t.nav.about, link: "#about" },
        { name: t.nav.skills, link: "#skills" },
        { name: t.nav.portfolio, link: "#portfolio" },
        { name: t.nav.contact, link: "#contact" }
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="#" onClick={(e) => handleNavLinkClick(e, 'home')}>
                        <Image
                            src="/images/logo.png"
                            alt={t.basics.name}
                            width={44}
                            height={44}
                            className="logo-image"
                            priority
                            style={{
                                width: '44px',
                                height: '44px',
                                maxWidth: '44px',
                                objectFit: 'contain'
                            }}
                        />
                        <span className="logo-text">{t.basics.name}</span>
                    </a>
                </div>
                <div
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className={`nav-link ${activeSection === item.link.substring(1) ? 'active' : ''}`}
                                onClick={(e) => handleNavLinkClick(e, item.link.substring(1))}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className="appearance-controls">
                        <ThemeToggle />
                        <ColorPicker />
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    )
}