import { Language } from '../contexts/LanguageContext';

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
                'Health Tracker Pro': {
                    name: 'Health Tracker Pro',
                    description: 'iOS health monitoring app with Apple Health integration',
                },
                'E-commerce Solution': {
                    name: 'E-commerce Solution',
                    description: 'Cross-platform shopping app built with Flutter',
                },
                'Smart Home Control': {
                    name: 'Smart Home Control',
                    description: 'IoT control app for smart home devices',
                },
                'Travel Companion': {
                    name: 'Travel Companion',
                    description: 'Travel planning and booking app with offline capabilities',
                },
                'Fitness Coach': {
                    name: 'Fitness Coach',
                    description: 'Workout tracking with ML-based form correction',
                },
                'Fintech Dashboard': {
                    name: 'Fintech Dashboard',
                    description: 'Financial analytics mobile dashboard with charts and insights',
                },
            },
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
                'Health Tracker Pro': {
                    name: 'Theo dõi sức khỏe Pro',
                    description: 'Ứng dụng theo dõi sức khỏe iOS tích hợp với Apple Health',
                },
                'E-commerce Solution': {
                    name: 'Giải pháp thương mại điện tử',
                    description: 'Ứng dụng mua sắm đa nền tảng được xây dựng bằng Flutter',
                },
                'Smart Home Control': {
                    name: 'Điều khiển nhà thông minh',
                    description: 'Ứng dụng điều khiển IoT cho thiết bị nhà thông minh',
                },
                'Travel Companion': {
                    name: 'Trợ lý du lịch',
                    description: 'Ứng dụng lập kế hoạch và đặt chỗ du lịch với khả năng làm việc ngoại tuyến',
                },
                'Fitness Coach': {
                    name: 'HLV thể hình',
                    description: 'Theo dõi tập luyện với tính năng sửa tư thế dựa trên ML',
                },
                'Fintech Dashboard': {
                    name: 'Bảng điều khiển Fintech',
                    description: 'Bảng điều khiển phân tích tài chính trên di động với biểu đồ và thông tin chi tiết',
                },
            },
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
    },
};