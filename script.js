// ==================== NAVIGATION PAR SECTIONS ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Script chargé');
    
    // Initialiser toutes les fonctionnalités
    initPageNavigation();
    initFilters();
    initMobileMenu();
    initScrollAnimations();
    initNavbarScroll();
    initContactForm();
});

// ==================== 1. NAVIGATION PAR PAGES ====================
function initPageNavigation() {
    const pageLinks = document.querySelectorAll('a[href^="#"]');
    const pageSections = document.querySelectorAll('.page-section');
    
    console.log('Navigation: sections trouvées =', pageSections.length);
    
    function navigateToPage(targetId) {
        console.log('Navigation vers:', targetId);
        
        // Désactiver toutes les sections
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Activer la section cible
        const targetSection = document.querySelector(targetId);
        if (targetSection && targetSection.classList.contains('page-section')) {
            targetSection.classList.add('active');
            targetSection.scrollTop = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, '', targetId);
            console.log('✅ Section activée:', targetId);
        }
    }
    
    // Ajouter les événements sur les liens
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignorer les boutons "Découvrir le projet" 
            if (this.classList.contains('project-cta')) {
                return; // Laisser le comportement par défaut
            }
            
            // Vérifier si c'est un lien vers une section interne
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection && targetSection.classList.contains('page-section')) {
                    e.preventDefault();
                    e.stopPropagation();
                    navigateToPage(targetId);
                    
                    // Fermer le menu mobile si ouvert
                    const navToggle = document.getElementById('navToggle');
                    const navMenu = document.getElementById('navMenu');
                    if (navToggle && navMenu) {
                        navToggle.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Gestion du bouton retour du navigateur
    window.addEventListener('popstate', () => {
        const hash = window.location.hash || '#accueil';
        navigateToPage(hash);
    });
    
    // Navigation initiale
    const initialHash = window.location.hash || '#accueil';
    navigateToPage(initialHash);
}

// ==================== 2. FILTRES RÉALISATIONS ====================
function initFilters() {
    setTimeout(function() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const projectCards = document.querySelectorAll('.project-showcase-card');
        
        console.log('Filtres: boutons =', categoryBtns.length, 'cartes =', projectCards.length);
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = this.getAttribute('data-category');
                console.log('Filtre sélectionné:', category);
                
                // Activer le bouton
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrer les cartes
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'grid';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }, 300);
}

// ==================== 3. MENU MOBILE ====================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fermer le menu en cliquant dehors
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ==================== 4. ANIMATIONS AU SCROLL ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const elementsToObserve = document.querySelectorAll('.timeline-item, .value-card, .skill-hex-card');
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
}

// ==================== 5. NAVBAR SCROLL ====================
function initNavbarScroll() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// ==================== 6. FORMULAIRE DE CONTACT ====================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            console.log('Formulaire soumis:', { name, email, message });
            
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            this.reset();
        });
    }
}

console.log('✅ Script entièrement initialisé');
