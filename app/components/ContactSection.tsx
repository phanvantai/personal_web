"use client"

import { useState } from 'react'
import { websiteData } from '../data/websiteData'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const { language } = useLanguage();
    const t = translations[language];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Basic validation
        if (!formData.name.trim()) {
            alert(language === 'en' ? 'Please enter your name.' : 'Vui lòng nhập tên của bạn.')
            return
        }

        if (!formData.email.trim()) {
            alert(language === 'en' ? 'Please enter your email.' : 'Vui lòng nhập email của bạn.')
            return
        }

        if (!isValidEmail(formData.email)) {
            alert(language === 'en' ? 'Please enter a valid email address.' : 'Vui lòng nhập địa chỉ email hợp lệ.')
            return
        }

        if (!formData.message.trim()) {
            alert(language === 'en' ? 'Please enter your message.' : 'Vui lòng nhập tin nhắn của bạn.')
            return
        }

        // Form submission
        setIsSubmitting(true)

        // Simulate form submission - replace with actual API call
        setTimeout(() => {
            setSubmitMessage(t.contact.messageSent)
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
            setIsSubmitting(false)

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSubmitMessage('')
            }, 3000)
        }, 1500)
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">{t.contact.title}</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>{t.contact.location}</h3>
                                <p>{websiteData.basics.location}</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h3>{t.contact.email}</h3>
                                <p>{websiteData.basics.email}</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h3>{t.contact.phone}</h3>
                                <p>{websiteData.basics.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t.contact.yourName}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.contact.yourEmail}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder={t.contact.subject}
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder={t.contact.message}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (language === 'en' ? 'Sending...' : 'Đang gửi...') : t.contact.sendMessage}
                            </button>

                            {submitMessage && (
                                <div className="form-message" style={{ color: 'green', marginTop: '1rem' }}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}