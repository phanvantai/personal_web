"use client"

import { useState } from 'react'
import Image from 'next/image'
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

    // Map translated category back to English key for filtering
    const getCategoryKey = (translatedCategory: string): string => {
        const categoryMap = {
            [t.portfolio.categories.all]: 'all',
            [t.portfolio.categories.ios]: 'ios',
            [t.portfolio.categories.flutter]: 'flutter',
            [t.portfolio.categories.other]: 'other'
        };
        return categoryMap[translatedCategory] || translatedCategory;
    };

    const filteredProjects = t.portfolio.projectsData.filter(project =>
        getCategoryKey(activeFilter) === 'all' || project.category === getCategoryKey(activeFilter)
    );

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
                    {filteredProjects.map((project) => {
                        // Get translated project info using project ID instead of name
                        const translatedProject = t.portfolio.projects[project.id];

                        return (
                            <div
                                key={project.id}
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