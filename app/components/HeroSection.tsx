"use client"

import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export default function HeroSection() {
    const [typedText, setTypedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [textArrayIndex, setTextArrayIndex] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(100)
    const { language } = useLanguage();
    const t = translations[language];

    // Use translated typing text
    const textArray = t.hero.typingText

    useEffect(() => {
        const type = () => {
            const currentText = textArray[textArrayIndex]

            if (isDeleting) {
                setTypedText(currentText.substring(0, typedText.length - 1))
                setTypingSpeed(50) // faster when deleting
            } else {
                setTypedText(currentText.substring(0, typedText.length + 1))
                setTypingSpeed(100) // slower when typing
            }

            if (!isDeleting && typedText === currentText) {
                // Start deleting after delay
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && typedText === '') {
                // Move to next text and stop deleting
                setIsDeleting(false)
                setTextArrayIndex((textArrayIndex + 1) % textArray.length)
            }
        }

        const timer = setTimeout(type, typingSpeed)
        return () => clearTimeout(timer)
    }, [typedText, isDeleting, textArrayIndex, typingSpeed, textArray])

    const renderSocialIcons = () => {
        return t.social.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                <i className={item.icon}></i>
            </a>
        ))
    }

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>{t.hero.greeting} <span className="highlight">{t.basics.name}</span></h1>
                    <h2>{t.hero.iam} <span className="typed-text">{typedText}</span><span className="cursor">&nbsp;</span></h2>
                    <p>{t.hero.description}</p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary" style={{
                            marginRight: '15px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '44px'
                        }}>{t.hero.contactMe}</a>
                        <a href="#portfolio" className="btn btn-secondary" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '44px'
                        }}>{t.hero.viewWork}</a>
                    </div>
                    <div className="social-icons">
                        {renderSocialIcons()}
                    </div>
                </div>
            </div>
        </section>
    )
}