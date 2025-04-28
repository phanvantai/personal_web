"use client"

import Image from 'next/image'
import { websiteData } from '../data/websiteData'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export default function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">{t.about.title}</h2>
                <div className="about-content">
                    <div className="about-image">
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile Photo"
                            width={400}
                            height={500}
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>
                    <div className="about-text">
                        <h3>{t.about.headline}</h3>
                        <div>
                            {t.about.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="personal-info">
                            <div className="info-item">
                                <span className="info-title">{t.about.name}</span>
                                <span className="info-value">{websiteData.basics.name}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">{t.about.email}</span>
                                <span className="info-value">{websiteData.basics.email}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">{t.about.location}</span>
                                <span className="info-value">{websiteData.basics.location}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">{t.about.availableFor}</span>
                                <span className="info-value">{websiteData.basics.available}</span>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary">{t.about.downloadCV}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}