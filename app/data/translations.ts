import { Language } from '../contexts/LanguageContext';

type SkillItem = {
    name: string;
    level: number;
};

type ProjectItem = {
    id: string;
    name: string;
    category: string;
    image: string;
    link: string;
    detailsLink: string;
};

type SocialItem = {
    platform: string;
    icon: string;
    url: string;
};

type TranslationDictionary = {
    [key in Language]: {
        // Navigation
        nav: {
            home: string;
            about: string;
            skills: string;
            portfolio: string;
            contact: string;
        };
        // Hero section
        hero: {
            greeting: string;
            iam: string;
            description: string;
            contactMe: string;
            viewWork: string;
            typingText: string[];
        };
        // About section
        about: {
            title: string;
            headline: string;
            paragraphs: string[];
            name: string;
            email: string;
            location: string;
            availableFor: string;
            downloadCV: string;
        };
        // Skills section
        skills: {
            title: string;
            technical: string;
            professional: string;
            technicalSkills: SkillItem[];
            professionalSkills: SkillItem[];
        };
        // Portfolio section
        portfolio: {
            title: string;
            categories: {
                all: string;
                ios: string;
                flutter: string;
                other: string;
            };
            projects: {
                [key: string]: {
                    name: string;
                    description: string;
                };
            };
            projectsData: ProjectItem[];
        };
        // Contact section
        contact: {
            title: string;
            location: string;
            email: string;
            phone: string;
            yourName: string;
            yourEmail: string;
            subject: string;
            message: string;
            sendMessage: string;
            messageSent: string;
            messageError: string;
        };
        // Footer
        footer: {
            copyright: string;
        };
        // Basic information
        basics: {
            name: string;
            title: string;
            location: string;
            email: string;
            phone: string;
            available: string;
        };
        // Social media
        social: SocialItem[];
    };
};

export const translations: TranslationDictionary = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            portfolio: 'Portfolio',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hello, I'm",
            iam: 'I\'m a',
            description: 'Welcome to my personal portfolio website',
            contactMe: 'Contact Me',
            viewWork: 'View My Work',
            typingText: ['Mobile Engineer', 'iOS Engineer', 'Flutter Developer', 'Freelancer'],
        },
        about: {
            title: 'About Me',
            headline: 'Who am I?',
            paragraphs: [
                "I'm a passionate Mobile Engineer with 5 years of experience in iOS and Flutter development. I specialize in creating high-performance, user-friendly mobile applications for various industries.",
                "I have a background in Communications and Networks from UET (University of Engineering and Technology) and I'm driven by a passion for creating seamless mobile experiences that solve real-world problems."
            ],
            name: 'Name:',
            email: 'Email:',
            location: 'Location:',
            availableFor: 'Available for:',
            downloadCV: 'Download CV',
        },
        skills: {
            title: 'My Skills',
            technical: 'Technical Skills',
            professional: 'Professional Skills',
            technicalSkills: [
                { name: "iOS (Swift/SwiftUI)", level: 95 },
                { name: "Flutter/Dart", level: 90 },
                { name: "React Native", level: 75 },
                { name: "Firebase", level: 85 },
                { name: "RESTful APIs", level: 92 },
                { name: "GraphQL", level: 80 },
                { name: "Git/Version Control", level: 90 }
            ],
            professionalSkills: [
                { name: "UI/UX Implementation", level: 88 },
                { name: "Problem Solving", level: 90 },
                { name: "Team Collaboration", level: 88 },
                { name: "Agile/Scrum", level: 85 },
                { name: "Code Review", level: 88 }
            ]
        },
        portfolio: {
            title: 'My Portfolio',
            categories: {
                all: 'all',
                ios: 'ios',
                flutter: 'flutter',
                other: 'other',
            },
            projects: {
                'health-tracker': {
                    name: 'Health Tracker Pro',
                    description: 'iOS health monitoring app with Apple Health integration',
                },
                'ecommerce': {
                    name: 'E-commerce Solution',
                    description: 'Cross-platform shopping app built with Flutter',
                },
                'smart-home': {
                    name: 'Smart Home Control',
                    description: 'IoT control app for smart home devices',
                },
                'travel': {
                    name: 'Travel Companion',
                    description: 'Travel planning and booking app with offline capabilities',
                },
                'fitness': {
                    name: 'Fitness Coach',
                    description: 'Workout tracking with ML-based form correction',
                },
                'fintech': {
                    name: 'Fintech Dashboard',
                    description: 'Financial analytics mobile dashboard with charts and insights',
                },
            },
            projectsData: [
                {
                    id: "health-tracker",
                    name: "Health Tracker Pro",
                    category: "ios",
                    image: "portfolio1.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "ecommerce",
                    name: "E-commerce Solution",
                    category: "flutter",
                    image: "portfolio2.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "smart-home",
                    name: "Smart Home Control",
                    category: "ios",
                    image: "portfolio3.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "travel",
                    name: "Travel Companion",
                    category: "flutter",
                    image: "portfolio4.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "fitness",
                    name: "Fitness Coach",
                    category: "ios",
                    image: "portfolio5.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "fintech",
                    name: "Fintech Dashboard",
                    category: "other",
                    image: "portfolio6.jpg",
                    link: "#",
                    detailsLink: "#"
                }
            ]
        },
        contact: {
            title: 'Get in Touch',
            location: 'Location',
            email: 'Email',
            phone: 'Phone',
            yourName: 'Your Name',
            yourEmail: 'Your Email',
            subject: 'Subject',
            message: 'Your Message',
            sendMessage: 'Send Message',
            messageSent: 'Your message has been sent. Thank you!',
            messageError: 'Something went wrong. Please try again later.',
        },
        footer: {
            copyright: 'Tai Phan Van. All Rights Reserved.',
        },
        basics: {
            name: "Tai Phan Van",
            title: "Mobile Engineer",
            location: "Hanoi, Vietnam",
            email: "taipv.swe@gmail.com",
            phone: "+84988247064",
            available: "Freelance, Full-time"
        },
        social: [
            { platform: "linkedin", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/tai-phan-van/" },
            { platform: "github", icon: "fab fa-github", url: "https://github.com/phanvantai" },
            { platform: "email", icon: "fas fa-envelope", url: "mailto:taipv.swe@gmail.com" }
        ]
    },
    vi: {
        nav: {
            home: 'Trang chủ',
            about: 'Giới thiệu',
            skills: 'Kỹ năng',
            portfolio: 'Dự án',
            contact: 'Liên hệ',
        },
        hero: {
            greeting: "Xin chào, tôi là",
            iam: 'Tôi là',
            description: 'Chào mừng đến với website portfolio cá nhân của tôi',
            contactMe: 'Liên hệ',
            viewWork: 'Xem dự án',
            typingText: ['Kỹ sư Mobile', 'Kỹ sư iOS', 'Lập trình viên Flutter', 'Freelancer'],
        },
        about: {
            title: 'Về tôi',
            headline: 'Tôi là ai?',
            paragraphs: [
                "Tôi là một Kỹ sư Mobile đam mê với 5 năm kinh nghiệm trong phát triển iOS và Flutter. Tôi chuyên tạo ra các ứng dụng di động hiệu suất cao, thân thiện với người dùng cho nhiều ngành công nghiệp khác nhau.",
                "Tôi có nền tảng về Truyền thông và Mạng từ UET (Trường Đại học Công nghệ) và tôi luôn được thúc đẩy bởi đam mê tạo ra những trải nghiệm di động mượt mà giải quyết các vấn đề trong thực tế."
            ],
            name: 'Tên:',
            email: 'Email:',
            location: 'Địa điểm:',
            availableFor: 'Sẵn sàng cho:',
            downloadCV: 'Tải CV',
        },
        skills: {
            title: 'Kỹ năng của tôi',
            technical: 'Kỹ năng chuyên môn',
            professional: 'Kỹ năng chuyên nghiệp',
            technicalSkills: [
                { name: "iOS (Swift/SwiftUI)", level: 95 },
                { name: "Flutter/Dart", level: 90 },
                { name: "React Native", level: 75 },
                { name: "Firebase", level: 85 },
                { name: "RESTful APIs", level: 92 },
                { name: "GraphQL", level: 80 },
                { name: "Git/Kiểm soát phiên bản", level: 90 }
            ],
            professionalSkills: [
                { name: "Triển khai UI/UX", level: 88 },
                { name: "Giải quyết vấn đề", level: 90 },
                { name: "Hợp tác nhóm", level: 88 },
                { name: "Agile/Scrum", level: 85 },
                { name: "Đánh giá mã nguồn", level: 88 }
            ]
        },
        portfolio: {
            title: 'Dự án của tôi',
            categories: {
                all: 'tất cả',
                ios: 'ios',
                flutter: 'flutter',
                other: 'khác',
            },
            projects: {
                'health-tracker': {
                    name: 'Theo dõi sức khỏe Pro',
                    description: 'Ứng dụng theo dõi sức khỏe iOS tích hợp với Apple Health',
                },
                'ecommerce': {
                    name: 'Giải pháp thương mại điện tử',
                    description: 'Ứng dụng mua sắm đa nền tảng được xây dựng bằng Flutter',
                },
                'smart-home': {
                    name: 'Điều khiển nhà thông minh',
                    description: 'Ứng dụng điều khiển IoT cho thiết bị nhà thông minh',
                },
                'travel': {
                    name: 'Trợ lý du lịch',
                    description: 'Ứng dụng lập kế hoạch và đặt chỗ du lịch với khả năng làm việc ngoại tuyến',
                },
                'fitness': {
                    name: 'HLV thể hình',
                    description: 'Theo dõi tập luyện với tính năng sửa tư thế dựa trên ML',
                },
                'fintech': {
                    name: 'Bảng điều khiển Fintech',
                    description: 'Bảng điều khiển phân tích tài chính trên di động với biểu đồ và thông tin chi tiết',
                },
            },
            projectsData: [
                {
                    id: "health-tracker",
                    name: "Health Tracker Pro",
                    category: "ios",
                    image: "portfolio1.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "ecommerce",
                    name: "E-commerce Solution",
                    category: "flutter",
                    image: "portfolio2.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "smart-home",
                    name: "Smart Home Control",
                    category: "ios",
                    image: "portfolio3.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "travel",
                    name: "Travel Companion",
                    category: "flutter",
                    image: "portfolio4.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "fitness",
                    name: "Fitness Coach",
                    category: "ios",
                    image: "portfolio5.jpg",
                    link: "#",
                    detailsLink: "#"
                },
                {
                    id: "fintech",
                    name: "Fintech Dashboard",
                    category: "other",
                    image: "portfolio6.jpg",
                    link: "#",
                    detailsLink: "#"
                }
            ]
        },
        contact: {
            title: 'Liên hệ',
            location: 'Địa chỉ',
            email: 'Email',
            phone: 'Điện thoại',
            yourName: 'Tên của bạn',
            yourEmail: 'Email của bạn',
            subject: 'Tiêu đề',
            message: 'Lời nhắn của bạn',
            sendMessage: 'Gửi tin nhắn',
            messageSent: 'Tin nhắn của bạn đã được gửi. Cảm ơn bạn!',
            messageError: 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
        },
        footer: {
            copyright: 'Phan Văn Tài. Đã đăng ký bản quyền.',
        },
        basics: {
            name: "Phan Văn Tài",
            title: "Kỹ sư Mobile",
            location: "Hà Nội, Việt Nam",
            email: "taipv.swe@gmail.com",
            phone: "+84988247064",
            available: "Freelance, Toàn thời gian"
        },
        social: [
            { platform: "linkedin", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/tai-phan-van/" },
            { platform: "github", icon: "fab fa-github", url: "https://github.com/phanvantai" },
            { platform: "email", icon: "fas fa-envelope", url: "mailto:taipv.swe@gmail.com" }
        ]
    },
};