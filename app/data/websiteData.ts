export const websiteData = {
    // Basic Information
    basics: {
        name: "Tai Phan Van",
        title: "Mobile Engineer",
        description: "Welcome to my personal portfolio website",
        location: "Hanoi, Vietnam",
        email: "taipv.swe@gmail.com",
        phone: "+84988247064",
        available: "Freelance, Full-time",
        // Typing animation text
        typingText: ["Mobile Engineer", "iOS Engineer", "Flutter Developer", "Freelancer"]
    },

    // About Section
    about: {
        headline: "Who am I?",
        paragraphs: [
            "I'm a passionate Mobile Engineer with 5 years of experience in iOS and Flutter development. I specialize in creating high-performance, user-friendly mobile applications for various industries.",
            "I have a background in Communications and Networks from UET (University of Engineering and Technology) and I'm driven by a passion for creating seamless mobile experiences that solve real-world problems."
        ],
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
        categories: ["all", "ios", "flutter", "other"],
        projects: [
            {
                name: "Health Tracker Pro",
                category: "ios",
                image: "portfolio1.jpg",
                description: "iOS health monitoring app with Apple Health integration",
                link: "#",
                detailsLink: "#"
            },
            {
                name: "E-commerce Solution",
                category: "flutter",
                image: "portfolio2.jpg",
                description: "Cross-platform shopping app built with Flutter",
                link: "#",
                detailsLink: "#"
            },
            {
                name: "Smart Home Control",
                category: "ios",
                image: "portfolio3.jpg",
                description: "IoT control app for smart home devices",
                link: "#",
                detailsLink: "#"
            },
            {
                name: "Travel Companion",
                category: "flutter",
                image: "portfolio4.jpg",
                description: "Travel planning and booking app with offline capabilities",
                link: "#",
                detailsLink: "#"
            },
            {
                name: "Fitness Coach",
                category: "ios",
                image: "portfolio5.jpg",
                description: "Workout tracking with ML-based form correction",
                link: "#",
                detailsLink: "#"
            },
            {
                name: "Fintech Dashboard",
                category: "other",
                image: "portfolio6.jpg",
                description: "Financial analytics mobile dashboard with charts and insights",
                link: "#",
                detailsLink: "#"
            }
        ]
    },

    // Social Media
    social: [
        { platform: "linkedin", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/taiphanvan/" },
        { platform: "github", icon: "fab fa-github", url: "https://github.com/phanvantai" },
        // { platform: "twitter", icon: "fab fa-twitter", url: "https://twitter.com/taiphanvan" },
        { platform: "email", icon: "fas fa-envelope", url: "mailto:taipv.swe@gmail.com" }
    ],

    // Navigation Menu
    navigation: [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Portfolio", link: "#portfolio" },
        { name: "Contact", link: "#contact" }
    ],

    // Copyright info
    copyright: "2025 Tai Phan Van. All Rights Reserved."
};