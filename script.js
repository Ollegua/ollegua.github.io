// Linearity Website JavaScript
class LinearityWebsite {
    constructor() {
        this.emailjsConfig = {
            // Credenziali EmailJS per linearityfx.tech
            serviceID: 'service_1utctbq',
            templateID: 'template_xdncv7s',
            publicKey: 'YGMiwGEY4FrFD2ygh'
        };
        this.init();
        this.initEmailJS();
    }

    // Inizializza EmailJS
    initEmailJS() {
        // Verifica se EmailJS è caricato
        if (typeof emailjs !== 'undefined') {
            emailjs.init(this.emailjsConfig.publicKey);
            console.log('EmailJS initialized successfully');
        } else {
            console.error('EmailJS library not loaded');
        }
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupContactForm();
        this.setupSocialLinks();
        this.setupSmoothScrolling();
        this.setupAnimations();
    }

    // Navigation functionality
    setupNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle mobile menu
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });

            // Close menu when clicking on a link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }

        // Active nav link on scroll
        this.updateActiveNavLink();
        window.addEventListener('scroll', () => this.updateActiveNavLink());
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Scroll effects
    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Contact form functionality
    setupContactForm() {
        const form = document.getElementById('contact-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(form);
            });
        }
    }

    async handleContactForm(form) {
        const formData = new FormData(form);
        
        // Genera data e ora italiana in formato compatto
        const now = new Date();
        const italianDate = now.toLocaleDateString('it-IT', {
            day: '2-digit',
            month: '2-digit', 
            year: 'numeric',
            timeZone: 'Europe/Rome'
        }) + ' - ' + now.toLocaleTimeString('it-IT', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Rome'
        });
        
        const data = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
            to_email: 'info@linearityfx.tech',
            current_date: italianDate
        };

        // Basic validation
        if (!data.from_name || !data.from_email || !data.message) {
            this.showNotification('Per favore, compila tutti i campi.', 'error');
            return;
        }

        if (!this.isValidEmail(data.from_email)) {
            this.showNotification('Per favore, inserisci un indirizzo email valido.', 'error');
            return;
        }

        if (data.message.length < 10) {
            this.showNotification('Il messaggio deve contenere almeno 10 caratteri.', 'error');
            return;
        }

        // Validazione reCAPTCHA
        if (typeof grecaptcha === 'undefined') {
            this.showNotification('⚠️ Sistema di sicurezza non disponibile. Riprova tra qualche secondo.', 'error');
            return;
        }
        
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            this.showNotification('🤖 Per favore, completa la verifica "Non sono un robot".', 'error');
            return;
        }

        // Aggiungi reCAPTCHA token per validazione server-side
        data.g_recaptcha_response = recaptchaResponse;

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<span class="loading-spinner"></span> Invio in corso...';
        submitButton.disabled = true;

        try {
            // Verifica se EmailJS è disponibile
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS non è disponibile');
            }

            console.log('Invio email con dati:', {
                from_name: data.from_name,
                from_email: data.from_email,
                message: data.message.substring(0, 50) + '...',
                current_date: data.current_date
            });

            // Invia email tramite EmailJS
            const response = await emailjs.send(
                this.emailjsConfig.serviceID,
                this.emailjsConfig.templateID,
                data
            );

            console.log('Email inviata con successo:', response.status, response.text);
            this.showNotification('✅ Messaggio inviato con successo! Ti contatteremo presto a ' + data.from_email, 'success');
            form.reset();
            
            // Reset reCAPTCHA
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.reset();
            }
            
            // Track successful form submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'EmailJS Success',
                    value: 1
                });
            }
            
        } catch (error) {
            console.error('Errore dettagliato invio email:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);
            
            // Messaggio di errore più informativo
            if (error.status === 400) {
                if (error.text && error.text.includes('recaptcha')) {
                    this.showNotification('❌ Verifica reCAPTCHA fallita. Riprova la verifica.', 'error');
                    // Reset reCAPTCHA per nuovo tentativo
                    if (typeof grecaptcha !== 'undefined') {
                        grecaptcha.reset();
                    }
                } else {
                    this.showNotification('❌ Errore configurazione EmailJS. Verificare Service ID e Template ID.', 'error');
                }
            } else if (error.status === 403) {
                this.showNotification('❌ Accesso negato EmailJS. Verificare Public Key.', 'error');
            } else if (error.message.includes('EmailJS')) {
                this.showNotification('⚠️ Servizio email non disponibile. Contattaci direttamente su Telegram.', 'error');
            } else {
                this.showNotification('❌ Errore nell\'invio del messaggio. Dettagli in console. Contattaci su Telegram.', 'error');
            }
            
        } finally {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Social links setup
    setupSocialLinks() {
        // Replace these with actual social media URLs
        const socialLinks = {
            telegram: 'https://t.me/linearity_trading', // Replace with actual Telegram group
            instagram: 'https://instagram.com/linearity_trading',
            tiktok: 'https://tiktok.com/@linearity_trading'
        };

        // Update Telegram buttons
        const telegramButtons = document.querySelectorAll('#telegram-btn, #social-telegram, #contact-telegram, #nav-telegram, #footer-telegram');
        telegramButtons.forEach(button => {
            button.href = socialLinks.telegram;
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
        });

        // Update navbar social links
        const navInstagram = document.getElementById('nav-instagram');
        const navTiktok = document.getElementById('nav-tiktok');
        
        if (navInstagram) {
            navInstagram.href = socialLinks.instagram;
            navInstagram.target = '_blank';
            navInstagram.rel = 'noopener noreferrer';
        }
        
        if (navTiktok) {
            navTiktok.href = socialLinks.tiktok;
            navTiktok.target = '_blank';
            navTiktok.rel = 'noopener noreferrer';
        }

        // Update footer social links
        const footerInstagram = document.getElementById('footer-instagram');
        const footerTiktok = document.getElementById('footer-tiktok');
        
        if (footerInstagram) {
            footerInstagram.href = socialLinks.instagram;
            footerInstagram.target = '_blank';
            footerInstagram.rel = 'noopener noreferrer';
        }
        
        if (footerTiktok) {
            footerTiktok.href = socialLinks.tiktok;
            footerTiktok.target = '_blank';
            footerTiktok.rel = 'noopener noreferrer';
        }
    }

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Animation setup
    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.about-card, .step, .social-card, .contact-item');
        animateElements.forEach(el => observer.observe(el));

        // Add staggered animation delays
        const aboutCards = document.querySelectorAll('.about-card');
        aboutCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });

        const socialCards = document.querySelectorAll('.social-card');
        socialCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Notification system
    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            word-wrap: break-word;
        `;

        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
        `;

        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        const autoRemove = setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);

        // Manual remove on close button click
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Initialize website functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LinearityWebsite();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '🔄 Torna su Linearity | Trading System';
    } else {
        document.title = 'Linearity - Sistema di Trading Professionale';
    }
});

// Add loading animation for images
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.classList.add('loaded');
    });
});

// Error handling for missing images
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // You could replace with a placeholder image here
        // e.target.src = 'images/placeholder.png';
    }
}, true);

// Simple analytics tracking (replace with actual analytics if needed)
const trackEvent = (eventName, properties = {}) => {
    console.log(`Event: ${eventName}`, properties);
    // Replace with actual analytics tracking
    // gtag('event', eventName, properties);
};

// Track key interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .telegram-btn') || e.target.closest('[href*="t.me"]')) {
        // Track Telegram clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'Social',
                event_label: 'Telegram',
                event_location: e.target.id || e.target.className || 'telegram_button'
            });
        }
        trackEvent('telegram_click', { location: e.target.id || 'unknown' });
    }
    
    if (e.target.matches('.social-card') || e.target.closest('[href*="instagram"], [href*="tiktok"]')) {
        const platform = e.target.href?.includes('instagram') ? 'instagram' : 
                        e.target.href?.includes('tiktok') ? 'tiktok' : 'social';
        
        // Track social media clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'Social',
                event_label: platform,
                event_location: 'social_card'
            });
        }
        trackEvent('social_click', { platform: platform });
    }
    
    if (e.target.closest('.nav-social-link')) {
        const platform = e.target.closest('.nav-social-link').getAttribute('title')?.toLowerCase() || 'nav_social';
        
        // Track navigation social clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'Navigation',
                event_label: platform,
                event_location: 'navbar'
            });
        }
        trackEvent('nav_social_click', { platform: platform });
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
        
        // Track page load performance
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                event_category: 'Performance',
                value: loadTime,
                custom_parameter: 'load_time_ms'
            });
        }
    });
}

// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
        maxScrollDepth = scrollDepth;
        if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll', {
                event_category: 'Engagement',
                event_label: `${scrollDepth}%`,
                value: scrollDepth
            });
        }
    }
});

// Track time on page
let startTime = new Date().getTime();
window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((new Date().getTime() - startTime) / 1000);
    if (typeof gtag !== 'undefined') {
        gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            value: timeOnPage,
            custom_parameter: 'seconds'
        });
    }
});

// Service Worker registration (uncomment if you want offline functionality)
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}
*/
