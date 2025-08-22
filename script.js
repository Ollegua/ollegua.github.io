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
        this.setupAboutCarousel(); // Aggiunge il carousel
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
                
                // Block/unblock body scroll
                if (navMenu.classList.contains('active')) {
                    document.body.classList.add('menu-open');
                } else {
                    document.body.classList.remove('menu-open');
                }
            });

            // Close menu when clicking nav links
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open'); // Unlock scroll
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open'); // Unlock scroll
                }
            });
        }
    }

    // Scroll effects
    setupScrollEffects() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', this.throttle(() => {
            const currentScrollY = window.scrollY;

            if (header) {
                if (currentScrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // Hide header on scroll down, show on scroll up
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    header.classList.add('header-hidden');
                } else {
                    header.classList.remove('header-hidden');
                }
            }

            lastScrollY = currentScrollY;
        }, 100));
    }

    // Contact form handling
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(form);
        });
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        
        // Ottieni la data italiana
        const now = new Date();
        const italianDate = now.toLocaleDateString('it-IT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
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
        if (!recaptchaResponse || recaptchaResponse.length < 20) {
            this.showNotification('🤖 Per favore, completa la verifica "Non sono un robot".', 'error');
            return;
        }

        console.log('reCAPTCHA token length:', recaptchaResponse.length);

        // Aggiungi reCAPTCHA token nel formato corretto per EmailJS
        data['g-recaptcha-response'] = recaptchaResponse;

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = '🚀 Invio in corso...';
        submitButton.disabled = true;

        // Send email using EmailJS
        emailjs.send(this.emailjsConfig.serviceID, this.emailjsConfig.templateID, data)
            .then(() => {
                this.showNotification('✅ Messaggio inviato con successo! Ti risponderemo presto.', 'success');
                form.reset();
                
                // Reset reCAPTCHA
                if (typeof grecaptcha !== 'undefined') {
                    grecaptcha.reset();
                }

                // Track successful form submission
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'Engagement',
                        event_label: 'Contact Form Success'
                    });
                }
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                this.showNotification('❌ Errore nell\'invio. Riprova o contattaci su Telegram.', 'error');
                
                // Track form submission error
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_error', {
                        event_category: 'Error',
                        event_label: 'Contact Form Failed'
                    });
                }
            })
            .finally(() => {
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            max-width: 400px;
            word-wrap: break-word;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        `;

        // Add to page
        document.body.appendChild(notification);

        // Remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Social links functionality
    setupSocialLinks() {
        const socialLinks = document.querySelectorAll('[href*="t.me"], [href*="instagram"], [href*="tiktok"]');

        socialLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Add some visual feedback
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#' || href === '#top') return;

                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Animation on scroll
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.hero-content, .service-card, .about-card, .social-card');
        animateElements.forEach(el => {
            observer.observe(el);
        });
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

    // ============================================
    // CAROUSEL RADICALE - IMPLEMENTAZIONE DA ZERO
    // ============================================
    setupAboutCarousel() {
        console.log('🔥 CAROUSEL RADICALE - START');
        
        // Elementi DOM
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.getElementById('about-prev');
        const nextBtn = document.getElementById('about-next');
        const indicators = document.querySelectorAll('.indicator');
        
        if (!track || !slides.length) {
            console.error('❌ Elementi carousel mancanti');
            return;
        }
        
        // Variabili di stato
        let currentPosition = 0; // Posizione corrente (0, 1, 2, 3)
        const totalSlides = slides.length; // 6 slides totali
        let slidesVisible = window.innerWidth >= 1025 ? 3 : 2; // 3 su desktop, 2 su mobile
        const maxPositions = totalSlides - slidesVisible; // Posizioni massime (3 o 4)
        
        console.log(`📊 Setup: ${totalSlides} slides, ${slidesVisible} visibili, ${maxPositions + 1} posizioni`);
        console.log(`🖥️ Window width: ${window.innerWidth}px`);
        
        // Funzione per rilevare se siamo su mobile
        function isMobile() {
            return window.innerWidth < 1025;
        }
        
        // Funzione per rilevare Firefox
        function isFirefox() {
            return navigator.userAgent.indexOf('Firefox') > -1;
        }
        
        // Funzione per aggiornare il carousel
        function updateCarousel() {
            // Ricalcola slides visibili in tempo reale
            slidesVisible = window.innerWidth >= 1025 ? 3 : 2;
            
            console.log(`📍 Update: position=${currentPosition}, slidesVisible=${slidesVisible}`);
            console.log(`🖥️ Current window width: ${window.innerWidth}px`);
            
            // Fix specifico per Firefox - forza il ricalcolo del layout
            if (isFirefox()) {
                track.style.display = 'none';
                track.offsetHeight; // Trigger reflow
                track.style.display = 'flex';
            }
            
            // Calcola la larghezza delle slide in base al dispositivo
            // Desktop: 16.6667% (ogni slide è 1/6 del track 200%)
            // Mobile: 16.6667% (ogni slide è 1/6 del track 300%) - il track più largo gestisce la visualizzazione
            const slideWidth = 16.6667; // Stessa larghezza per tutte le slide
            const translateX = -(currentPosition * slideWidth);
            
            track.style.transform = `translateX(${translateX}%)`;
            
            // Fix aggiuntivo per Firefox - forza il repaint
            if (isFirefox()) {
                track.style.transform = `translateX(${translateX}%) translateZ(0)`;
            }
            
            console.log(`🎯 Transform: translateX(${translateX}%) | slideWidth: ${slideWidth}%`);
            
            // Aggiorna indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentPosition);
            });
            
            // Mostra la sequenza attuale
            const visibleSlides = [];
            for (let i = 0; i < slidesVisible; i++) {
                const slideIndex = (currentPosition + i) % totalSlides;
                visibleSlides.push(slideIndex + 1); // +1 per display umano
            }
            console.log(`👁️ Slides visibili: [${visibleSlides.join(',')}]`);
        }
        
        // Slide successiva
        function nextSlide() {
            console.log('➡️ NEXT');
            // Ricalcola maxPositions in tempo reale
            const currentMaxPositions = totalSlides - slidesVisible;
            if (currentPosition < currentMaxPositions) {
                currentPosition++;
            } else {
                currentPosition = 0; // Torna all'inizio solo dopo aver raggiunto la fine
            }
            updateCarousel();
        }
        
        // Slide precedente  
        function prevSlide() {
            console.log('⬅️ PREV');
            // Ricalcola maxPositions in tempo reale
            const currentMaxPositions = totalSlides - slidesVisible;
            if (currentPosition > 0) {
                currentPosition--;
            } else {
                currentPosition = currentMaxPositions; // Va alla fine solo se è all'inizio
            }
            updateCarousel();
        }
        
        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                console.log('🖱️ Next button clicked');
                nextSlide();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                console.log('🖱️ Prev button clicked');
                prevSlide();
            });
        }
        
        // Indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                console.log(`🎯 Indicator ${index} clicked`);
                if (index <= maxPositions) {
                    currentPosition = index;
                    updateCarousel();
                }
            });
        });
        
        // Responsive handling
        window.addEventListener('resize', () => {
            const newSlidesVisible = window.innerWidth >= 1025 ? 3 : 2;
            if (newSlidesVisible !== slidesVisible) {
                slidesVisible = newSlidesVisible;
                const newMaxPositions = totalSlides - slidesVisible;
                if (currentPosition > newMaxPositions) {
                    currentPosition = newMaxPositions;
                }
                console.log(`📱 Responsive: ${slidesVisible} slides visibili, max position: ${newMaxPositions}`);
                updateCarousel();
            }
        });
        
        // INIZIALIZZAZIONE
        updateCarousel();
        console.log('✅ CAROUSEL RADICALE ATTIVO!');
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
        document.title = 'Linearity | Sistema di Trading Automatizzato';
    }
});

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
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                event_category: 'Performance',
                value: Math.round(loadTime)
            });
        }
        console.log(`Page load time: ${loadTime}ms`);
    }, 0);
});

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

// ============================================
// BACKTEST BUTTONS TOOLTIP
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const comingSoonBtn = document.getElementById('backtest-2015-btn');
    const tooltip = document.getElementById('coming-soon-tooltip');
    
    if (comingSoonBtn && tooltip) {
        console.log('✅ Tooltip elements found');
        
        comingSoonBtn.addEventListener('mouseenter', function() {
            console.log('🖱️ Mouse enter - showing tooltip');
            tooltip.classList.add('show');
        });
        
        comingSoonBtn.addEventListener('mouseleave', function() {
            console.log('🖱️ Mouse leave - hiding tooltip');
            tooltip.classList.remove('show');
        });
        
        comingSoonBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('👆 Click - showing tooltip');
            tooltip.classList.add('show');
            // Nascondi dopo 2 secondi per dispositivi touch
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 2000);
        });
    } else {
        console.error('❌ Tooltip elements not found');
    }
});

// ============================================
// PDF LINKS HANDLER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔗 Setting up PDF link handlers...');
    
    // Seleziona tutti i link PDF
    const pdfLinks = document.querySelectorAll('.pdf-link');
    
    pdfLinks.forEach((link, index) => {
        console.log(`📄 Found PDF link ${index + 1}:`, link.href);
        
        // Aggiungi event listener per il click
        link.addEventListener('click', function(e) {
            // Previeni il comportamento default del link
            e.preventDefault();
            
            const href = this.getAttribute('href');
            console.log(`🖱️ PDF link clicked: ${href}`);
            
            // Verifica se il link è valido
            if (!href || href === '#') {
                console.error('❌ Invalid PDF link');
                alert('Link non valido. Assicurati che il file PDF sia presente nella cartella del sito.');
                return;
            }
            
            // Prova ad aprire in nuova finestra
            try {
                const newWindow = window.open(href, '_blank', 'noopener,noreferrer');
                if (!newWindow) {
                    console.warn('⚠️ Popup blocked, trying direct navigation');
                    // Se il popup è bloccato, prova navigazione diretta in nuova finestra
                    window.open(href, '_blank');
                }
                console.log('✅ PDF opened successfully');
            } catch (error) {
                console.error('❌ Error opening PDF:', error);
                // Fallback: prova download diretto
                const a = document.createElement('a');
                a.href = href;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        });
        
        // Aggiungi hover effect per debug
        link.addEventListener('mouseenter', function() {
            console.log(`🖱️ Hovering over PDF: ${this.getAttribute('href')}`);
        });
    });
    
    console.log(`✅ PDF handlers setup complete for ${pdfLinks.length} links`);
});
