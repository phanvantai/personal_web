"use client"

import { useLanguage } from '../contexts/LanguageContext'
import React from 'react'

interface LanguageAwareHtmlProps {
    children: React.ReactNode
    className?: string
}

export default function LanguageAwareHtml({
    children,
    className
}: LanguageAwareHtmlProps) {
    const { language } = useLanguage()

    return (
        <html lang={language} className={className}>
            {children}
        </html>
    )
}