"use client"

import { useTheme, colorOptions, PrimaryColor } from '../contexts/ThemeContext'
import { useState, useRef, useEffect } from 'react'

export default function ColorPicker() {
    const { primaryColor, setPrimaryColor } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const colorPickerRef = useRef<HTMLDivElement>(null)

    // Close color picker when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleColorChange = (color: PrimaryColor) => {
        setPrimaryColor(color)
        setIsOpen(false)
    }

    return (
        <div className="color-picker" ref={colorPickerRef}>
            <button
                className="color-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change primary color"
                title="Change primary color"
                style={{ backgroundColor: colorOptions[primaryColor] }}
            >
                <i className="fas fa-palette"></i>
            </button>

            {isOpen && (
                <div className="color-dropdown">
                    {Object.entries(colorOptions).map(([color, hex]) => (
                        <button
                            key={color}
                            className={`color-option ${primaryColor === color ? 'active' : ''}`}
                            style={{ backgroundColor: hex }}
                            onClick={() => handleColorChange(color as PrimaryColor)}
                            aria-label={`Set ${color} as primary color`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}