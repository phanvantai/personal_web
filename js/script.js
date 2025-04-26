// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sections with data
    initNavigation();
    initHeroSection();
    initAboutSection();
    initSkillsSection();
    initPortfolioSection();
    initContactSection();
    initFooter();
    
    // Initialize interactive elements
    initTypingEffect();
    initMobileMenu();
    initSmoothScrolling();
    initContactForm();
    initBackToTop();
    initScrollEvents();
});

// ----- DATA POPULATION FUNCTIONS -----

// Initialize navigation menu
function initNavigation() {
    const navMenu = document.getElementById('nav-menu');
    const logoName = document.getElementById('logo-name');
    
    // Set logo name
    logoName.textContent = websiteData.basics.name;
    
    // Create nav items
    websiteData.navigation.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.className = 'nav-link';
        a.textContent = item.name;
        li.appendChild(a);
        navMenu.appendChild(li);
    });
}

// Initialize hero section
function initHeroSection() {
    document.getElementById('hero-name').textContent = websiteData.basics.name;
    document.getElementById('hero-description').textContent = websiteData.basics.description;
    
    // Populate social icons
    const socialContainer = document.getElementById('hero-social');
    populateSocialIcons(socialContainer);
}

// Initialize about section
function initAboutSection() {
    document.getElementById('about-headline').textContent = websiteData.about.headline;
    
    // Populate paragraphs
    const paragraphsContainer = document.getElementById('about-paragraphs');
    websiteData.about.paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        paragraphsContainer.appendChild(p);
    });
    
    // Populate personal info
    document.getElementById('info-name').textContent = websiteData.basics.name;
    document.getElementById('info-email').textContent = websiteData.basics.email;
    document.getElementById('info-location').textContent = websiteData.basics.location;
    document.getElementById('info-available').textContent = websiteData.basics.available;
}

// Initialize skills section
function initSkillsSection() {
    // Technical skills
    const technicalContainer = document.getElementById('technical-skills');
    websiteData.skills.technical.forEach(skill => {
        const skillItem = createSkillItem(skill.name, skill.level);
        technicalContainer.appendChild(skillItem);
    });
    
    // Professional skills
    const professionalContainer = document.getElementById('professional-skills');
    websiteData.skills.professional.forEach(skill => {
        const skillItem = createSkillItem(skill.name, skill.level);
        professionalContainer.appendChild(skillItem);
    });
}

// Helper function to create skill item
function createSkillItem(name, level) {
    const div = document.createElement('div');
    div.className = 'skill-item';
    
    const skillName = document.createElement('div');
    skillName.className = 'skill-name';
    skillName.textContent = name;
    
    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';
    
    const skillProgress = document.createElement('div');
    skillProgress.className = 'skill-progress';
    skillProgress.style.width = level + '%';
    skillProgress.textContent = level + '%';
    
    skillBar.appendChild(skillProgress);
    div.appendChild(skillName);
    div.appendChild(skillBar);
    
    return div;
}

// Initialize portfolio section
function initPortfolioSection() {
    // Create filter buttons
    const filtersContainer = document.getElementById('portfolio-filters');
    
    websiteData.portfolio.categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        if (category === 'all') {
            button.classList.add('active');
        }
        button.setAttribute('data-filter', category);
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        filtersContainer.appendChild(button);
    });
    
    // Create portfolio items
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    websiteData.portfolio.projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-category', project.category);
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'portfolio-img';
        const img = document.createElement('img');
        img.src = 'images/' + project.image;
        img.alt = project.name;
        imgContainer.appendChild(img);
        
        const info = document.createElement('div');
        info.className = 'portfolio-info';
        
        const title = document.createElement('h3');
        title.textContent = project.name;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'portfolio-link';
        link.innerHTML = '<i class="fas fa-link"></i>';
        
        const details = document.createElement('a');
        details.href = project.detailsLink;
        details.className = 'portfolio-details';
        details.innerHTML = '<i class="fas fa-search"></i>';
        
        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(link);
        info.appendChild(details);
        
        item.appendChild(imgContainer);
        item.appendChild(info);
        portfolioGrid.appendChild(item);
    });
}

// Initialize contact section
function initContactSection() {
    document.getElementById('contact-location').textContent = websiteData.basics.location;
    document.getElementById('contact-email').textContent = websiteData.basics.email;
    document.getElementById('contact-phone').textContent = websiteData.basics.phone;
}

// Initialize footer
function initFooter() {
    document.getElementById('copyright-text').textContent = websiteData.copyright;
    
    // Populate social icons
    const socialContainer = document.getElementById('footer-social');
    populateSocialIcons(socialContainer);
}

// Helper function to populate social icons
function populateSocialIcons(container) {
    container.innerHTML = '';
    websiteData.social.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.innerHTML = `<i class="${item.icon}"></i>`;
        container.appendChild(a);
    });
}

// ----- INTERACTIVE FEATURES -----

// Typing effect for the hero section
function initTypingEffect() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    const textArray = websiteData.basics.typingText;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    if(textArray.length) {
        setTimeout(type, newTextDelay);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth scrolling navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Portfolio filtering
function initPortfolioSection() {
    // Create filter buttons
    const filtersContainer = document.getElementById('portfolio-filters');
    
    websiteData.portfolio.categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        if (category === 'all') {
            button.classList.add('active');
        }
        button.setAttribute('data-filter', category);
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        filtersContainer.appendChild(button);
    });
    
    // Create portfolio items
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    websiteData.portfolio.projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.setAttribute('data-category', project.category);
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'portfolio-img';
        const img = document.createElement('img');
        img.src = 'images/' + project.image;
        img.alt = project.name;
        imgContainer.appendChild(img);
        
        const info = document.createElement('div');
        info.className = 'portfolio-info';
        
        const title = document.createElement('h3');
        title.textContent = project.name;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const link = document.createElement('a');
        link.href = project.link;
        link.className = 'portfolio-link';
        link.innerHTML = '<i class="fas fa-link"></i>';
        
        const details = document.createElement('a');
        details.href = project.detailsLink;
        details.className = 'portfolio-details';
        details.innerHTML = '<i class="fas fa-search"></i>';
        
        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(link);
        info.appendChild(details);
        
        item.appendChild(imgContainer);
        item.appendChild(info);
        portfolioGrid.appendChild(item);
    });
    
    // Add event listeners to filter buttons
    setTimeout(() => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }, 0);
}

// Contact form validation and submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            // Basic validation
            let isValid = true;
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();
            
            if (name === '') {
                isValid = false;
                alert('Please enter your name.');
            } else if (email === '') {
                isValid = false;
                alert('Please enter your email.');
            } else if (!isValidEmail(email)) {
                isValid = false;
                alert('Please enter a valid email address.');
            } else if (message === '') {
                isValid = false;
                alert('Please enter your message.');
            }
            
            if (isValid) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // In a real application, you would send this to a server
                // This is just a simulation
                setTimeout(() => {
                    alert('Message sent successfully! (This is a simulation)');
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 1500);
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Add scroll event listeners
function initScrollEvents() {
    // Skills animation
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function showSkills() {
        skillBars.forEach(skillBar => {
            const width = skillBar.style.width;
            skillBar.style.width = '0';
            setTimeout(() => {
                skillBar.style.width = width;
            }, 500);
        });
    }
    
    // Show skills when scrolling to skills section
    let skillsAnimated = false;
    window.addEventListener('scroll', function() {
        if (skillsAnimated) return;
        
        const skillsSectionPos = skillSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (skillsSectionPos < screenPosition) {
            showSkills();
            skillsAnimated = true;
        }
    });
    
    // Navigation active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
    
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}