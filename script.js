// ==================== SYSTÈME DE NAVIGATION CORRIGÉ ====================

// 1. NAVIGATION PAR PAGES (priorité absolue)
function initPageNavigation() {
    const pageLinks = document.querySelectorAll('a[href^="#"]');
    const pageSections = document.querySelectorAll('.page-section');
    
    function navigateToPage(targetId) {
        console.log('🔍 Navigation vers:', targetId);
        
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.scrollTop = 0;
            
            // Scroll vers le haut de la page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            history.pushState(null, '', targetId);
        }
    }
    
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Ne bloquer QUE les liens vers des sections internes
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
            // Les liens externes (sans #) ou vers des fichiers HTML fonctionneront normalement
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

document.addEventListener('DOMContentLoaded', initPageNavigation);

// 2. FILTRES RÉALISATIONS (après navigation)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const projectCards = document.querySelectorAll('.project-showcase-card');

        console.log('🎨 Filtres - Boutons:', categoryBtns.length, 'Cards:', projectCards.length);

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = this.getAttribute('data-category');
                console.log('✅ Filtre cliqué:', category);
                
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'grid';
                        card.style.animation = 'fadeInUp 0.6s ease backwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }, 500);
});

// 3. NAVBAR SCROLL
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

// 4. MENU MOBILE
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// 5. ANIMATIONS AU SCROLL (dans chaque page-section)
document.addEventListener('DOMContentLoaded', function() {
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
});

// 6. GESTION DU FORMULAIRE DE CONTACT
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Ici vous pouvez ajouter la logique d'envoi du formulaire
            // Par exemple via EmailJS, Formspree, ou votre propre API
            
            console.log('Formulaire soumis:', { name, email, message });
            
            // Afficher un message de confirmation
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            
            // Réinitialiser le formulaire
            this.reset();
        });
    }
});

console.log('✅ Script chargé - Navigation corrigée et optimisée');
