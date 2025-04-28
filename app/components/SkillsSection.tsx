"use client"

import { useEffect, useRef } from 'react'
import { websiteData } from '../data/websiteData'

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
    const animatedRef = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            if (animatedRef.current) return

            const skillsElement = skillsRef.current
            if (!skillsElement) return

            const skillsPosition = skillsElement.getBoundingClientRect().top
            const screenPosition = window.innerHeight / 1.2

            if (skillsPosition < screenPosition) {
                const skillBars = skillsElement.querySelectorAll('.skill-progress')

                skillBars.forEach(bar => {
                    const width = (bar as HTMLElement).getAttribute('data-width') || '0%'
                    setTimeout(() => {
                        (bar as HTMLElement).style.width = width
                    }, 500)
                })

                animatedRef.current = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section id="skills" className="skills" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-content">
                    <div className="skill-category">
                        <h3>Technical Skills</h3>
                        <div>
                            {websiteData.skills.technical.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Professional Skills</h3>
                        <div>
                            {websiteData.skills.professional.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}