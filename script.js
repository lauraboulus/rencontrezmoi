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
    initProjectButtons(); // Nouvelle fonction pour les boutons de projet
    initTooltips(); // Initialisation des tooltips pour les adjectifs
    initPhotoModal(); // Initialisation du modal photo
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
    
    // Ajouter les événements sur les liens UNIQUEMENT pour les ancres
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
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

// ==================== 7. BOUTONS DE PROJET ====================
function initProjectButtons() {
    // Forcer le fonctionnement des boutons "Découvrir le projet"
    const projectButtons = document.querySelectorAll('.project-cta');
    
    console.log('Boutons projet trouvés:', projectButtons.length);
    
    projectButtons.forEach(button => {
        // Empêcher la propagation du clic sur le bouton vers la carte parente
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const href = this.getAttribute('href');
            console.log('Clic sur bouton projet, navigation vers:', href);
            
            // Navigation directe
            if (href) {
                window.location.href = href;
            }
        });
    });
    
    // S'assurer que les cartes de projet ne bloquent pas les clics sur les boutons
    const projectCards = document.querySelectorAll('.project-showcase-card');
    projectCards.forEach(card => {
        card.style.cursor = 'default';
    });
}

// ==================== 8. TOOLTIPS POUR ADJECTIFS ====================
function initTooltips() {
    console.log('🎯 Initialisation des tooltips...');
    
    // Sélectionner tous les conteneurs d'adjectifs
    const adjectiveContainers = document.querySelectorAll('.hero-tags .adjective-container');
    
    console.log('📌 Nombre de conteneurs trouvés:', adjectiveContainers.length);
    
    // Définir les dégradés de bleu pour chaque tooltip
    const tooltipColors = {
        'adjective-rigoureuse': {
            gradient: 'linear-gradient(135deg, #1a3a52 0%, #2c5f7f 100%)', // Bleu marine foncé
            arrowColor: '#2c5f7f'
        },
        'adjective-collaborative': {
            gradient: 'linear-gradient(135deg, #2c5f7f 0%, #4D96FF 100%)', // Bleu marine vers bleu clair
            arrowColor: '#4D96FF'
        },
        'adjective-engagee': {
            gradient: 'linear-gradient(135deg, #4D96FF 0%, #6BB6FF 100%)', // Bleu clair lumineux
            arrowColor: '#6BB6FF'
        }
    };
    
    adjectiveContainers.forEach((container, index) => {
        const tooltip = container.querySelector('.tooltip');
        
        if (tooltip) {
            console.log(`✅ Tooltip ${index + 1} trouvé`);
            
            // Déterminer la couleur du dégradé selon la classe du conteneur
            let gradientColor = tooltipColors['adjective-rigoureuse'].gradient;
            let arrowColor = tooltipColors['adjective-rigoureuse'].arrowColor;
            
            if (container.classList.contains('adjective-collaborative')) {
                gradientColor = tooltipColors['adjective-collaborative'].gradient;
                arrowColor = tooltipColors['adjective-collaborative'].arrowColor;
            } else if (container.classList.contains('adjective-engagee')) {
                gradientColor = tooltipColors['adjective-engagee'].gradient;
                arrowColor = tooltipColors['adjective-engagee'].arrowColor;
            }
            
            // S'assurer que le tooltip est caché par défaut
            tooltip.style.display = 'none';
            tooltip.style.position = 'absolute';
            tooltip.style.bottom = 'calc(100% + 20px)';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.zIndex = '10000';
            tooltip.style.background = gradientColor;
            tooltip.style.color = 'white';
            tooltip.style.padding = '15px 20px';
            tooltip.style.borderRadius = '12px';
            tooltip.style.boxShadow = '0 10px 30px rgba(26, 58, 82, 0.3)';
            tooltip.style.width = '300px';
            tooltip.style.maxWidth = '90vw';
            tooltip.style.fontSize = '14px';
            tooltip.style.lineHeight = '1.6';
            tooltip.style.textAlign = 'center';
            tooltip.style.pointerEvents = 'none';
            
            // Créer la flèche du tooltip
            const arrow = document.createElement('div');
            arrow.style.position = 'absolute';
            arrow.style.top = '100%';
            arrow.style.left = '50%';
            arrow.style.transform = 'translateX(-50%)';
            arrow.style.width = '0';
            arrow.style.height = '0';
            arrow.style.borderLeft = '10px solid transparent';
            arrow.style.borderRight = '10px solid transparent';
            arrow.style.borderTop = `10px solid ${arrowColor}`;
            tooltip.appendChild(arrow);
            
            // Événement mouseenter (survol)
            container.addEventListener('mouseenter', function() {
                console.log('🖱️ Survol sur tooltip', index + 1);
                tooltip.style.display = 'block';
                tooltip.style.opacity = '0';
                
                // Animation d'apparition
                setTimeout(() => {
                    tooltip.style.transition = 'opacity 0.3s ease';
                    tooltip.style.opacity = '1';
                }, 10);
            });
            
            // Événement mouseleave (sortie)
            container.addEventListener('mouseleave', function() {
                console.log('👋 Sortie du survol', index + 1);
                tooltip.style.opacity = '0';
                
                setTimeout(() => {
                    tooltip.style.display = 'none';
                }, 300);
            });
        } else {
            console.log(`❌ Tooltip ${index + 1} NON trouvé`);
        }
    });
    
    console.log('✨ Tooltips initialisés !');
}

// ==================== 9. MODAL PHOTO À PROPOS ====================
function initPhotoModal() {
    console.log('📸 Initialisation du modal photo...');
    
    // Créer le modal
    const modalHTML = `
        <div id="photoModal" class="photo-modal">
            <div class="photo-modal-overlay"></div>
            <div class="photo-modal-content">
                <button class="photo-modal-close">&times;</button>
                <div class="photo-modal-body">
                    <h2 class="photo-modal-title">Laura Boulus</h2>
                    <p class="photo-modal-subtitle">Passionnée de cybersécurité, engagée pour l'humain</p>
                    
                    <div class="photo-modal-text">
                        <p>Je suis Laura, animée par la curiosité et l'envie d'apprendre. Pour moi, la cybersécurité ne se limite pas à la technique : c'est avant tout une question de confiance, de pédagogie et d'humain.</p>
                        
                        <h3>Ce qui me motive</h3>
                        <p>Protéger les systèmes tout en créant du lien. J'aime vulgariser des concepts complexes, sensibiliser les équipes et transformer la sécurité en culture d'entreprise accessible à tous.</p>
                        
                        <h3>Mon engagement</h3>
                        <p>Au-delà du professionnel, je m'investis auprès d'associations solidaires. Cet équilibre entre expertise technique et contribution sociale me définit.</p>
                        
                        <h3>Ma vision</h3>
                        <p>Devenir une experte capable d'allier rigueur technique et coordination stratégique, tout en portant des projets qui ont du sens. Mon ambition : contribuer à bâtir une sécurité numérique solide et humaine.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter le modal au body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Sélectionner les éléments
    const photoImage = document.querySelector('.profile-image img');
    const modal = document.getElementById('photoModal');
    const closeBtn = modal.querySelector('.photo-modal-close');
    const overlay = modal.querySelector('.photo-modal-overlay');
    
    // Ouvrir le modal au clic sur la photo
    if (photoImage) {
        photoImage.style.cursor = 'pointer';
        photoImage.addEventListener('click', function() {
            console.log('📸 Ouverture du modal photo');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Fermer le modal
    function closeModal() {
        console.log('❌ Fermeture du modal photo');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Fermer avec Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    console.log('✅ Modal photo initialisé !');
}

console.log('✅ Script entièrement initialisé');
