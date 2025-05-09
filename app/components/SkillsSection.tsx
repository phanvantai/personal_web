"use client"

import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

interface SkillItemProps {
    name: string;
    level: number;
}

const SkillItem = ({ name, level }: SkillItemProps) => {
    return (
        <div className="skill-item">
            <div className="skill-name">{name}</div>
            <div className="skill-bar">
                <div
                    className="skill-progress"
                    style={{ width: '0%' }}
                    data-width={`${level}%`}
                >
                </div>
            </div>
        </div>
    )
}

export default function SkillsSection() {
    const skillsRef = useRef<HTMLDivElement>(null)
    const { language } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate skills when section comes into view
                    const skillBars = document.querySelectorAll('.skill-progress')
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width') || '0%'
                        setTimeout(() => {
                            (bar as HTMLElement).style.width = width
                        }, 200)
                    })
                }
            })
        }, { threshold: 0.1 })

        // Store the current value of the ref in a variable
        const currentSkillsRef = skillsRef.current;

        if (currentSkillsRef) {
            observer.observe(currentSkillsRef)
        }

        return () => {
            if (currentSkillsRef) {
                observer.unobserve(currentSkillsRef)
            }
        }
    }, [])

    return (
        <section id="skills" className="skills" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title">{t.skills.title}</h2>
                <div className="skills-content">
                    <div className="skill-category">
                        <h3>{t.skills.technical}</h3>
                        {t.skills.technicalSkills.map((skill, index) => (
                            <SkillItem key={index} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                    <div className="skill-category">
                        <h3>{t.skills.professional}</h3>
                        {t.skills.professionalSkills.map((skill, index) => (
                            <SkillItem key={index} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}