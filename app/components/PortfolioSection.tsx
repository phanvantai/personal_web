"use client"

import { useState } from 'react'
import Image from 'next/image'
import { websiteData } from '../data/websiteData'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export default function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState('all')
    const { language } = useLanguage();
    const t = translations[language];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter)
    }

    // Get translated categories from our translations object
    const categories = [
        t.portfolio.categories.all,
        t.portfolio.categories.ios,
        t.portfolio.categories.flutter,
        t.portfolio.categories.other
    ];

    const filteredProjects = websiteData.portfolio.projects.filter(project =>
        activeFilter === t.portfolio.categories.all || project.category === activeFilter
    )

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 className="section-title">{t.portfolio.title}</h2>

                <div className="filter-buttons">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => handleFilterClick(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, index) => {
                        // Get translated project info
                        const translatedProject = t.portfolio.projects[project.name];

                        return (
                            <div
                                key={index}
                                className="portfolio-item"
                                style={{
                                    opacity: 1,
                                    transform: 'scale(1)',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease, display 0.3s ease'
                                }}
                            >
                                <div className="portfolio-img">
                                    <Image
                                        src={`/images/${project.image}`}
                                        alt={translatedProject?.name || project.name}
                                        width={400}
                                        height={250}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </div>
                                <div className="portfolio-info">
                                    <h3>{translatedProject?.name || project.name}</h3>
                                    <p>{translatedProject?.description || ''}</p>
                                    <a href={project.link} className="portfolio-link">
                                        <i className="fas fa-link"></i>
                                    </a>
                                    <a href={project.detailsLink} className="portfolio-details">
                                        <i className="fas fa-search"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}