"use client"

import { useState } from 'react'
import { websiteData } from '../data/websiteData'

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

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
            alert('Please enter your name.')
            return
        }

        if (!formData.email.trim()) {
            alert('Please enter your email.')
            return
        }

        if (!isValidEmail(formData.email)) {
            alert('Please enter a valid email address.')
            return
        }

        if (!formData.message.trim()) {
            alert('Please enter your message.')
            return
        }

        // Form submission
        setIsSubmitting(true)

        // Simulate form submission - replace with actual API call
        setTimeout(() => {
            setSubmitMessage('Message sent successfully!')
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
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>{websiteData.basics.location}</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>{websiteData.basics.email}</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
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
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your Message"
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
                                {isSubmitting ? 'Sending...' : 'Send Message'}
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