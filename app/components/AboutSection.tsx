import Image from 'next/image'
import { websiteData } from '../data/websiteData'

export default function AboutSection() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
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
                        <h3>{websiteData.about.headline}</h3>
                        <div>
                            {websiteData.about.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="personal-info">
                            <div className="info-item">
                                <span className="info-title">Name:</span>
                                <span className="info-value">{websiteData.basics.name}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Email:</span>
                                <span className="info-value">{websiteData.basics.email}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Location:</span>
                                <span className="info-value">{websiteData.basics.location}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Available for:</span>
                                <span className="info-value">{websiteData.basics.available}</span>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}