export const websiteData = {
    // Basic Information
    basics: {
        name: "Tai Phan Van",
        title: "Mobile Engineer",
        location: "Hanoi, Vietnam",
        email: "taipv.swe@gmail.com",
        phone: "+84988247064",
        available: "Freelance, Full-time"
        // Removed typingText and description as these are in translations
    },

    // About Section
    about: {
        // Removed paragraphs as these are in translations
        // Profile image is expected at images/profile.jpg
    },

    // Skills Section
    skills: {
        technical: [
            { name: "iOS (Swift/SwiftUI)", level: 95 },
            { name: "Flutter/Dart", level: 90 },
            { name: "React Native", level: 75 },
            { name: "Firebase", level: 85 },
            { name: "RESTful APIs", level: 92 },
            { name: "GraphQL", level: 80 },
            { name: "Git/Version Control", level: 90 }
        ],
        professional: [
            { name: "UI/UX Implementation", level: 88 },
            { name: "Problem Solving", level: 90 },
            { name: "Team Collaboration", level: 88 },
            { name: "Agile/Scrum", level: 85 },
            { name: "Code Review", level: 88 }
        ]
    },

    // Portfolio Section
    portfolio: {
        // Using categories from translations
        projects: [
            {
                name: "Health Tracker Pro",
                category: "ios",
                image: "portfolio1.jpg",
                link: "#",
                detailsLink: "#"
                // Removed description as it's in translations
            },
            {
                name: "E-commerce Solution",
                category: "flutter",
                image: "portfolio2.jpg",
                link: "#",
                detailsLink: "#"
                // Removed description as it's in translations
            },
            {
                name: "Smart Home Control",
                category: "ios",
                image: "portfolio3.jpg",
                link: "#",
                detailsLink: "#"
                // Removed description as it's in translations
            },
            {
                name: "Travel Companion",
                category: "flutter",
                image: "portfolio4.jpg",
                link: "#",
                detailsLink: "#"
                // Removed description as it's in translations
            },
            {
                name: "Fitness Coach",
                category: "ios",
                image: "portfolio5.jpg",
                link: "#",
                detailsLink: "#"
                // Removed description as it's in translations
            },
            {
                name: "Fintech Dashboard",
                category: "other",
                image: "portfolio6.jpg",
                link: "#",
                detailsLink: "#"
                // Removed description as it's in translations
            }
        ]
    },

    // Social Media
    social: [
        { platform: "linkedin", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/tai-phan-van/" },
        { platform: "github", icon: "fab fa-github", url: "https://github.com/phanvantai" },
        // { platform: "twitter", icon: "fab fa-twitter", url: "https://twitter.com/taiphanvan" },
        { platform: "email", icon: "fas fa-envelope", url: "mailto:taipv.swe@gmail.com" }
    ]
};