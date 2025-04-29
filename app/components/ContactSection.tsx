"use client"

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
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
    const { language } = useLanguage();
    const t = translations[language];

    const [state, handleFormspreeSubmit] = useForm("xblrvenp");

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

        // Submit form through Formspree
        handleFormspreeSubmit(e);
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Reset form after successful submission
    if (state.succeeded) {
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, 3000)
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
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder={t.contact.subject}
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
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
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={state.submitting}
                            >
                                {state.submitting ? (language === 'en' ? 'Sending...' : 'Đang gửi...') : t.contact.sendMessage}
                            </button>

                            {state.succeeded && (
                                <div className="form-message" style={{ color: 'green', marginTop: '1rem' }}>
                                    {t.contact.messageSent}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}