"use client"

import { useState, useEffect } from 'react'
import { websiteData } from '../data/websiteData'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

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

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="#" id="logo-name">{websiteData.basics.name}</a>
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
                    {websiteData.navigation.map((item, index) => (
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
                </ul>
            </div>
        </nav>
    )
}