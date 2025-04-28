"use client"

import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <i className="fas fa-moon"></i>
            ) : (
                <i className="fas fa-sun"></i>
            )}
        </button>
    )
}