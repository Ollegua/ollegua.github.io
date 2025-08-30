// Simplified I18n system for LinearityFX
window.LinearityI18n = {
    currentLang: null, // Don't set default here - let detection decide
    
    translations: {
        it: {
            // Page meta
            'page.title': 'Linearity FX - Sistema di Trading Automatizzato | linearityfx.tech',
            'page.description': 'Linearity FX: strategia di trading automatizzata con 10 anni di profitti comprovati. Visita il sito per iscriverti e partecipare al progetto LinearityFX',
            'page.keywords': 'linearity fx, trading automatico, forex, algoritmi trading, sistema professionale, telegram trading, linearityfx.tech',
            'page.og.title': 'Linearity FX - Sistema di Trading Automatizzato | linearityfx.tech',
            'page.og.description': 'Linearity FX: strategia di trading automatizzata con 10 anni di profitti comprovati. Visita il sito per iscriverti e partecipare al progetto LinearityFX',
            'page.twitter.title': 'Linearity FX - Sistema Trading Automatizzato',
            'page.twitter.description': '10 anni di profitti comprovati nel trading automatizzato. Unisciti oggi!',
            
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'Il Progetto', 
            'nav.guide': 'Guida',
            'nav.results': 'Risultati',
            'nav.contact': 'Contatti',

            // Hero section
            'hero.title': 'LINEARITY',
            'hero.description': 'Strategia ideata, strutturata e gestita interamente dal Team di LinearityFX!<br><br>Il sistema, attraverso dei complessi e rigorosi calcoli algoritmici, effettua operazioni intraday su XAU/USD cercando di massimizzare il profitto per il cliente non tralasciando l\'importantissimo aspetto del Money Management.<br><br>Correlato da un potente e sempre aggiornato sistema di controllo delle news, opera sempre a riparo da possibili condizionamenti estremi ed improvvisi del mercato.<br><br><strong>Continua a leggere il sito per sapere come aderire al sistema, replicarne le operazioni gratuitamente in totale autonomia senza l\'utilizzo di strumenti complicati e sfruttare le sue enormi potenzialità!</strong>',
            'hero.telegram_btn': 'Unisciti su Telegram',
            'hero.learn_more': 'Scopri di più',

            // About section
            'about.title': 'Il Progetto Linearity',
            'about.description': 'Un approccio sistematico e professionale al trading che combina tecnologia avanzata, sicurezza e libertà finanziaria per offrire ai nostri clienti un\'esperienza di investimento completamente trasparente e automatizzata.',
            'about.card1.title': 'Strategie Avanzate',
            'about.card1.description': 'Utilizziamo analisi tecnica e algoritmi proprietari per identificare le migliori opportunità di trading sui mercati finanziari. Il sistema utilizza un innovativo Take Profit mobile in modo da cavalcare l\'onda positiva della posizione aperta e massimizzare il profitto.',
            'about.card2.title': 'Filtro News Intelligente',
            'about.card2.description': 'Sempre vigile alle news globali, il sistema sospende l\'attività nel caso di news globali che possono condizionare negativamente l\'attività di trading attivandolo nuovamente al termine degli eventi sensibili.',
            'about.card3.title': 'Automatico',
            'about.card3.description': 'Il tuo conto replicherà esattamente i movimenti del conto principale senza che tu debba fare nulla. Non dovrai seguire mercati, analizzare grafici o preoccuparti di niente: tutto avviene automaticamente.',
            'about.card4.title': 'Sicuro',
            'about.card4.description': 'Collaboriamo esclusivamente con broker certificati e autorizzati dalle principali autorità finanziarie, garantendo la massima sicurezza per i tuoi investimenti. I fondi rimangono sempre nella tua piena disponibilità. Puoi prelevare i tuoi soldi quando vuoi.',
            'about.card5.title': 'Gratuito',
            'about.card5.description': 'Non pagherai mai alcuna quota associativa, il sistema cederà una piccola parte del profitto settimanale al team LinearityFX, se quella settimana non ti faremo guadagnare la tua commissione verrà azzerata.',
            'about.card6.title': 'Trasparenza Completa',
            'about.card6.description': 'Accesso in tempo reale a tutti i movimenti, statistiche dettagliate e performance del sistema. Nessun segreto, tutto sotto i tuoi occhi con 10 anni di track record verificabile.',

            // Guide section
            'guide.title': 'Guida alla Connessione',
            'guide.description': 'Tutto quello che devi sapere per iniziare il tuo percorso con LinearityFX',
            'guide.step1.title': 'Leggi l\'Introduzione',
            'guide.step1.description': 'Scarica e leggi il PDF introduttivo per comprendere il progetto LinearityFX',
            'guide.step2.title': 'Segui la Guida',
            'guide.step2.description': 'Utilizza la guida passo-passo per configurare correttamente il tuo account',
            'guide.step3.title': 'Unisciti su Telegram',
            'guide.step3.description': 'Entra nel gruppo ufficiale per supporto e aggiornamenti in tempo reale',
            'guide.intro.title': 'Presentazione di LinearityFX',
            'guide.intro.description': 'Scopri il mondo di LinearityFX, come funziona il sistema, le strategie utilizzate, i punti di forza e le potenzialità del progetto.',
            'guide.intro.button': 'Introduzione',
            'guide.manual.title': 'Guida alla Connessione',
            'guide.manual.description': 'Istruzioni alla creazione del conto presso il broker, configurazione account, connessione al sistema di LinearityFX.',
            'guide.manual.button': 'Guida',
            'guide.support.title': 'Hai Bisogno di Aiuto?',
            'guide.support.description': 'Se incontri difficoltà durante le fasi di connessione o hai ulteriori domande, il nostro team di supporto è disponibile su Telegram per assisterti.',
            'guide.support.telegram': 'Supporto Telegram',
            'guide.support.contact': 'Contattaci',

            // Results section
            'results.title': 'I Nostri Risultati',
            'results.description': 'I risultati mostrati sono verificati da MyFXBook e rappresentano performance reali dei nostri conti di trading.',
            'results.footer': 'Ecco risultati conseguiti dal sistema LinearityFX applicato ai dati storici del mercato.',
            'results.backtest1': 'Backtest<br>da 1 Gennaio 2020 al 1 Agosto 2025',
            'results.backtest2': 'Backtest<br>da 1 Gennaio 2015 al 1 Agosto 2025',
            'results.backtest_button': 'Backtest',
            'results.settings_title': 'Impostazioni utilizzate:',
            'results.backtest1.capital': '<strong>Capitale iniziale: 1.000€</strong>',
            'results.backtest1.period': 'Periodo: 01/01/2020 - 01/08/2025',
            'results.backtest1.broker': 'Broker: FP-Markets LLC',
            'results.backtest1.leverage': 'Leva: 1:500',
            'results.backtest1.size': '<strong>Size: 0.01 - fisso su posizione iniziale</strong>',
            'results.backtest1.profit': '<strong>Utile Netto: 5.523,46€</strong>',
            'results.backtest2.capital': '<strong>Capitale iniziale: 1.000€</strong>',
            'results.backtest2.period': 'Periodo: 01/01/2020 - 01/08/2025',
            'results.backtest2.broker': 'Broker: FP-Markets LLC',
            'results.backtest2.leverage': 'Leva: 1:500',
            'results.backtest2.size': '<strong>Size: 0.01 progressivo ogni 1000€</strong>',
            'results.backtest2.profit': '<strong>Utile Netto: 49.655,85€</strong>',

            // Contact section
            'contact.title': 'Contattaci',
            'contact.description': 'Hai domande? Siamo qui per aiutarti',
            'contact.telegram.title': 'Telegram',
            'contact.telegram.description': 'Il modo più veloce per contattarci',
            'contact.telegram.link': 'Vai al gruppo',
            'contact.telegram.group': 'https://t.me/linearityfx_ita',
            'contact.support.title': 'Supporto',
            'contact.support.description': 'Hai bisogno di aiuto? Siamo pronti ad assisterti per ogni problematica che potresti riscontrare nella registrazione e impostazione della strategia. Contattaci al supporto dedicato su Telegram ed entra a far parte del gruppo per non perdere nessun aggiornamento sul mondo LinearityFX.',
            'contact.support.link': 'https://t.me/linearity_support',
            'contact.support.button': 'Supporto Dedicato',
            'contact.collaborate.title': 'Collabora con noi',
            'contact.collaborate.description': 'Ti piace il progetto LinearityFX? Aiuta chi vuoi ad iscriversi al progetto e diventa nostro affiliato. Clicca il pulsante qui sotto, compila il modulo di contatto ed organizza la tua rete di affiliazione. Riceverai commissioni competitive derivanti dalla tua rete di iscritti e supporto dedicato.',
            'contact.collaborate.button': 'Diventa Affiliato',

            // Footer
            'footer.copyright': '© 2025 Linearity. Tutti i diritti riservati.',
            'footer.risk_title': 'Avviso di Rischio:',
            'footer.risk_text': 'Il trading su Forex comporta un alto livello di rischio e può non essere adatto a tutti gli investitori. Prima di decidere di investire nel mercato dei cambi, dovresti considerare attentamente i tuoi obiettivi di investimento, il livello di esperienza e la propensione al rischio. Esiste la possibilità che tu possa sostenere una perdita di parte o tutto il tuo investimento iniziale e quindi non dovresti investire denaro che non puoi permetterti di perdere. Dovresti essere consapevole di tutti i rischi associati al trading su valute estere e chiedere consigli a un consulente finanziario indipendente in caso di dubbi. Le performance passate non sono indicative di risultati futuri.'
        },

        en: {
            // Page meta
            'page.title': 'Linearity FX - Automated Trading System | linearityfx.tech',
            'page.description': 'Linearity FX: automated trading strategy with 10 years of proven profits. Visit the site to sign up and participate in the LinearityFX project',
            'page.keywords': 'linearity fx, automated trading, forex, trading algorithms, professional system, telegram trading, linearityfx.tech',
            'page.og.title': 'Linearity FX - Automated Trading System | linearityfx.tech',
            'page.og.description': 'Linearity FX: automated trading strategy with 10 years of proven profits. Visit the site to sign up and participate in the LinearityFX project',
            'page.twitter.title': 'Linearity FX - Automated Trading System',
            'page.twitter.description': '10 years of proven profits in automated trading. Join today!',
            
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'The Project',
            'nav.guide': 'Guide',
            'nav.results': 'Results',
            'nav.contact': 'Contact',

            // Hero section
            'hero.title': 'LINEARITY',
            'hero.description': 'Strategy conceived, structured and managed entirely by the LinearityFX Team!<br><br>The system, through complex and rigorous algorithmic calculations, performs intraday operations on XAU/USD seeking to maximize profit for the client without neglecting the very important aspect of Money Management.<br><br>Correlated with a powerful and always updated news control system, it always operates sheltered from possible extreme and sudden market conditioning.<br><br><strong>Continue reading the site to learn how to join the system, replicate operations for free in complete autonomy without using complicated tools and exploit its enormous potential!</strong>',
            'hero.telegram_btn': 'Join on Telegram',
            'hero.learn_more': 'Learn More',

            // About section
            'about.title': 'The Linearity Project',
            'about.description': 'A systematic and professional approach to trading that combines advanced technology, security and financial freedom to offer our clients a completely transparent and automated investment experience.',
            'about.card1.title': 'Advanced Strategies',
            'about.card1.description': 'We use technical analysis and proprietary algorithms to identify the best trading opportunities in financial markets. The system uses an innovative mobile Take Profit to ride the positive wave of the open position and maximize profit.',
            'about.card2.title': 'Intelligent News Filter',
            'about.card2.description': 'Always vigilant to global news, the system suspends activity in case of global news that can negatively affect trading activity, reactivating it at the end of sensitive events.',
            'about.card3.title': 'Automated',
            'about.card3.description': 'Your account will replicate exactly the movements of the main account without you having to do anything. You won\'t have to follow markets, analyze charts or worry about anything: everything happens automatically.',
            'about.card4.title': 'Secure',
            'about.card4.description': 'We collaborate exclusively with certified and authorized brokers by the main financial authorities, guaranteeing maximum security for your investments. Funds always remain at your full disposal. You can withdraw your money whenever you want.',
            'about.card5.title': 'Free',
            'about.card5.description': 'You will never pay any membership fee, the system will give a small part of the weekly profit to the LinearityFX team, if that week we don\'t make you earn, your commission will be reset.',
            'about.card6.title': 'Complete Transparency',
            'about.card6.description': 'Real-time access to all movements, detailed statistics and system performance. No secrets, everything under your eyes with 10 years of verifiable track record.',

            // Guide section
            'guide.title': 'Connection Guide',
            'guide.description': 'Everything you need to know to start your journey with LinearityFX',
            'guide.step1.title': 'Read the Introduction',
            'guide.step1.description': 'Download and read the introductory PDF to understand the LinearityFX project',
            'guide.step2.title': 'Follow the Guide',
            'guide.step2.description': 'Use the step-by-step guide to properly configure your account',
            'guide.step3.title': 'Join on Telegram',
            'guide.step3.description': 'Enter the official group for support and real-time updates',
            'guide.intro.title': 'LinearityFX Presentation',
            'guide.intro.description': 'Discover the world of LinearityFX, how the system works, the strategies used, the strengths and potential of the project.',
            'guide.intro.button': 'Introduction',
            'guide.manual.title': 'Connection Guide',
            'guide.manual.description': 'Instructions for creating an account with the broker, account configuration, connection to the LinearityFX system.',
            'guide.manual.button': 'Guide',
            'guide.support.title': 'Need Help?',
            'guide.support.description': 'If you encounter difficulties during the connection phases or have additional questions, our support team is available on Telegram to assist you.',
            'guide.support.telegram': 'Telegram Support',
            'guide.support.contact': 'Contact Us',

            // Results section
            'results.title': 'Our Results',
            'results.description': 'The results shown are verified by MyFXBook and represent real performance of our trading accounts.',
            'results.footer': 'Here are the results achieved by the LinearityFX system applied to historical market data.',
            'results.backtest1': 'Backtest<br>from January 1, 2020 to August 1, 2025',
            'results.backtest2': 'Backtest<br>from January 1, 2015 to August 1, 2025',
            'results.backtest_button': 'Backtest',
            'results.settings_title': 'Settings used:',
            'results.backtest1.capital': '<strong>Initial capital: €1,000</strong>',
            'results.backtest1.period': 'Period: 01/01/2020 - 01/08/2025',
            'results.backtest1.broker': 'Broker: FP-Markets LLC',
            'results.backtest1.leverage': 'Leverage: 1:500',
            'results.backtest1.size': '<strong>Size: 0.01 - fixed on initial position</strong>',
            'results.backtest1.profit': '<strong>Net Profit: €5,523.46</strong>',
            'results.backtest2.capital': '<strong>Initial capital: €1,000</strong>',
            'results.backtest2.period': 'Period: 01/01/2020 - 01/08/2025',
            'results.backtest2.broker': 'Broker: FP-Markets LLC',
            'results.backtest2.leverage': 'Leverage: 1:500',
            'results.backtest2.size': '<strong>Size: 0.01 progressive every €1,000</strong>',
            'results.backtest2.profit': '<strong>Net Profit: €49,655.85</strong>',

            // Contact section
            'contact.title': 'Contact Us',
            'contact.description': 'Have questions? We\'re here to help',
            'contact.telegram.title': 'Telegram',
            'contact.telegram.description': 'The fastest way to contact us',
            'contact.telegram.link': 'Go to group',
            'contact.telegram.group': 'https://t.me/linearityfx_en',
            'contact.support.title': 'Support',
            'contact.support.description': 'Do you need help? We are ready to assist you with any issue you may encounter during registration and strategy setup. Contact us at our dedicated support on Telegram and join the group to not miss any updates on the LinearityFX world.',
            'contact.support.link': 'https://t.me/linearity_support',
            'contact.support.button': 'Dedicated Support',
            'contact.collaborate.title': 'Collaborate with us',
            'contact.collaborate.description': 'Do you like the LinearityFX project? Help whoever you want to sign up for the project and become our affiliate. Click the button below, fill out the contact form and organize your affiliate network. You will receive competitive commissions from your network of subscribers and dedicated support.',
            'contact.collaborate.button': 'Become Affiliate',

            // Footer
            'footer.copyright': '© 2025 Linearity. All rights reserved.',
            'footer.risk_title': 'Risk Warning:',
            'footer.risk_text': 'Forex trading carries a high level of risk and may not be suitable for all investors. Before deciding to invest in the foreign exchange market, you should carefully consider your investment objectives, level of experience and risk appetite. There is a possibility that you may sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if in doubt. Past performance is not indicative of future results.'
        }
    },

    translate(key) {
        const translation = this.translations[this.currentLang][key];
        return translation || key;
    },

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (element.tagName === 'TITLE') {
                // Handle title tag specifically
                element.textContent = translation;
            } else if (element.tagName === 'META') {
                // Handle meta tags (update content attribute)
                element.setAttribute('content', translation);
            } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else {
                element.innerHTML = translation;
            }
        });
    },

    switchLanguage(lang) {
        this.currentLang = lang;
        this.translatePage();
        this.updateActiveButton();
        this.updateLinksForLanguage(lang);
        this.updateHtmlLang(lang);
        
        // Save user preference (this will override IP detection for future visits)
        localStorage.setItem('linearity-lang', lang);
        console.log('Language switched to:', lang, '(saved as user preference)');
    },

    updateHtmlLang(lang) {
        // Update the HTML lang attribute for SEO and accessibility
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        console.log('HTML lang attribute updated to:', lang);
    },

    updateLinksForLanguage(lang) {
        if (lang === 'en') {
            // English version - update links
            console.log('Updating links for English version');
            
            // Update PDF links (corrected selectors)
            const introLinks = document.querySelectorAll('a[href="intro-it.pdf"]');
            introLinks.forEach(link => {
                link.href = 'intro-en.pdf';
            });
            
            const guideLinks = document.querySelectorAll('a[href="guida-it.pdf"]');
            guideLinks.forEach(link => {
                link.href = 'guida-en.pdf';
            });
            
            // Update Telegram link
            const telegramLinks = document.querySelectorAll('a[href="http://t.me/linearityfx_ita"]');
            telegramLinks.forEach(link => {
                link.href = 'http://t.me/linearityfx_en';
            });

            // Update data-i18n-href elements for contact section
            const i18nHrefElements = document.querySelectorAll('[data-i18n-href]');
            i18nHrefElements.forEach(element => {
                const key = element.getAttribute('data-i18n-href');
                if (this.translations.en && this.translations.en[key]) {
                    element.href = this.translations.en[key];
                }
            });
            
        } else {
            // Italian version - restore original links
            console.log('Updating links for Italian version');
            
            // Restore original PDF links (corrected selectors)
            const introLinks = document.querySelectorAll('a[href="intro-en.pdf"]');
            introLinks.forEach(link => {
                link.href = 'intro-it.pdf';
            });
            
            const guideLinks = document.querySelectorAll('a[href="guida-en.pdf"]');
            guideLinks.forEach(link => {
                link.href = 'guida-it.pdf';
            });
            
            // Restore original Telegram link
            const telegramLinks = document.querySelectorAll('a[href="http://t.me/linearityfx_en"]');
            telegramLinks.forEach(link => {
                link.href = 'http://t.me/linearityfx_ita';
            });

            // Update data-i18n-href elements for contact section
            const i18nHrefElements = document.querySelectorAll('[data-i18n-href]');
            i18nHrefElements.forEach(element => {
                const key = element.getAttribute('data-i18n-href');
                if (this.translations.it && this.translations.it[key]) {
                    element.href = this.translations.it[key];
                }
            });
        }
    },

    updateActiveButton() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    init() {
        // Check for saved language preference first
        const saved = localStorage.getItem('linearity-lang');
        if (saved && this.translations[saved]) {
            console.log('Using saved language preference:', saved);
            this.currentLang = saved;
            this.setupUI();
            return; // Don't run IP detection if user has a saved preference
        }

        // If no saved preference, run IP detection
        // Start with a quick browser language check while API loads
        this.setInitialLanguage();
        this.detectCountryAndSetLanguage();
    },

    setInitialLanguage() {
        // Quick initial check based on browser language
        const browserLang = navigator.language || navigator.userLanguage;
        console.log('Browser language detected:', browserLang);
        
        if (browserLang && browserLang.startsWith('it')) {
            this.currentLang = 'it';
            console.log('Initial language set to Italian based on browser');
        } else {
            this.currentLang = 'en';
            console.log('Initial language set to English based on browser');
        }
        
        // Apply initial translation
        this.setupUI();
    },

    async detectCountryAndSetLanguage() {
        try {
            console.log('Running IP geolocation detection...');
            
            // Try primary service first
            let data;
            try {
                const response = await fetch('https://ipapi.co/json/', {
                    timeout: 5000
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                data = await response.json();
            } catch (primaryError) {
                console.warn('Primary IP service failed, trying fallback:', primaryError);
                
                // Try fallback service
                const fallbackResponse = await fetch('https://ipinfo.io/json', {
                    timeout: 5000
                });
                
                if (!fallbackResponse.ok) {
                    throw new Error(`Fallback HTTP error! status: ${fallbackResponse.status}`);
                }
                
                const fallbackData = await fallbackResponse.json();
                // Convert ipinfo.io format to ipapi.co format
                data = {
                    country_code: fallbackData.country
                };
            }
            
            console.log('IP Detection Result:', data);
            console.log('Country detected:', data.country_code);
            
            // Determine language based on country
            let detectedLang = 'en'; // Default to English for non-Italian visitors
            if (data.country_code && data.country_code.toLowerCase() === 'it') {
                detectedLang = 'it';
                console.log('Italian IP detected, setting Italian');
            } else {
                console.log('Non-Italian IP detected, setting English');
            }
            
            // Only update if different from current
            if (this.currentLang !== detectedLang) {
                console.log(`Language changed from ${this.currentLang} to ${detectedLang} based on IP`);
                this.currentLang = detectedLang;
                this.setupUI(); // Re-setup with correct language
            } else {
                console.log('IP detection confirmed current language setting');
            }
            
        } catch (error) {
            console.warn('All IP detection services failed:', error);
            // If IP detection fails completely, keep the browser-based detection
            console.log('Keeping browser-based language detection:', this.currentLang);
        }
    },

    setupUI() {
        // Set up button listeners
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });

        // Initial translation, UI update, link update, and HTML lang update
        this.translatePage();
        this.updateActiveButton();
        this.updateLinksForLanguage(this.currentLang);
        this.updateHtmlLang(this.currentLang);
        console.log('Language system initialized with:', this.currentLang);
    }
};

// Global function for compatibility
window.switchLanguage = function(lang) {
    window.LinearityI18n.switchLanguage(lang);
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.LinearityI18n.init();
    console.log('LinearityI18n initialized');
    
    // Add debug info for troubleshooting
    console.log('Debug info:');
    console.log('- Navigator language:', navigator.language || navigator.userLanguage);
    console.log('- Current lang at init:', window.LinearityI18n.currentLang);
    console.log('- Saved preference:', localStorage.getItem('linearity-lang'));
    console.log('- User agent:', navigator.userAgent);
});
