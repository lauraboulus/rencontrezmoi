// ==================== NAVIGATION ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect on navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
});

// ==================== ANIMATIONS ON SCROLL ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.timeline-item, .value-card, .project-card, .skill-item, .info-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate skill bars when visible
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// ==================== MODAL FUNCTIONS ==================== //
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });
});

// ==================== CONTACT FORM ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:lauraboulus01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Votre client email va s\'ouvrir pour envoyer le message.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// ==================== PARALLAX EFFECTS ==================== //
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// ==================== TYPING EFFECT ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const heroGreeting = document.querySelector('.hero-greeting');
    
    if (heroGreeting) {
        const text = heroGreeting.textContent;
        heroGreeting.textContent = '';
        heroGreeting.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroGreeting.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});

// ==================== NAVIGATION PAR PAGES ====================
function initPageNavigation() {
    const pageLinks = document.querySelectorAll('a[href^="#"]');
    const pageSections = document.querySelectorAll('.page-section');
    
    // Fonction pour changer de page
    function navigateToPage(targetId) {
        // Retirer la classe active de toutes les sections
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Ajouter la classe active à la section ciblée
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Scroll en haut de la nouvelle page
            targetSection.scrollTop = 0;
            
            // Mettre à jour l'URL sans recharger
            history.pushState(null, '', targetId);
        }
    }
    
    // Écouter tous les clics sur les liens
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                navigateToPage(targetId);
            }
        });
    });
    
    // Gérer le bouton retour du navigateur
    window.addEventListener('popstate', () => {
        const hash = window.location.hash || '#accueil';
        navigateToPage(hash);
    });
    
    // Au chargement, afficher la bonne page selon l'URL
    const initialHash = window.location.hash || '#accueil';
    navigateToPage(initialHash);
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', initPageNavigation);

// ==================== FILTRES RÉALISATIONS ====================
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-showcase-card');

    if (categoryBtns.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Activer le bouton cliqué
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrer les projets
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'grid';
                        // Animation d'apparition
                        card.style.animation = 'fadeInUp 0.6s ease backwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// ==================== BARRE DE PROGRESSION LECTURE ====================
if (document.querySelector('.project-detail-page')) {
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // Créer la barre si elle n'existe pas
        let progressBar = document.querySelector('.reading-progress-bar');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'reading-progress-bar';
            progressBar.style.cssText = `
                position: fixed;
                top: 80px;
                left: 0;
                width: ${scrolled}%;
                height: 3px;
                background: linear-gradient(90deg, var(--primary), var(--secondary));
                z-index: 9999;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        } else {
            progressBar.style.width = scrolled + '%';
        }
    });
}

// ==================== ANIMATIONS PAGES DÉTAILS ====================

// Intersection Observer pour animations au scroll
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

// Observer tous les éléments qui doivent apparaître
document.addEventListener('DOMContentLoaded', function() {
    // Éléments à observer
    const elementsToObserve = document.querySelectorAll('.content-section, .skill-detail-card, .impact-card');
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });

    // Accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Fermer tous les autres
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle celui cliqué
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });

    // Animation des progress bars
    const progressBars = document.querySelectorAll('.skill-progress-fill');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        bar.style.width = '0%';
        progressObserver.observe(bar);
    });

    // Parallax subtil sur les cards
    const parallaxCards = document.querySelectorAll('.parallax-card');
    document.addEventListener('mousemove', (e) => {
        parallaxCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            } else {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            }
        });
    });

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Animation de compteur pour les stats
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    };

    // Observer pour les stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});
// ==================== FIX ULTRA BOUTONS RÉALISATIONS ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Init fix boutons réalisations');
    
    // Attendre que tout soit chargé
    setTimeout(function() {
        // FILTRES
        const categoryBtns = document.querySelectorAll('.category-btn');
        const projectCards = document.querySelectorAll('.project-showcase-card');
        
        console.log('Boutons filtres:', categoryBtns.length);
        console.log('Cards projets:', projectCards.length);
        
        categoryBtns.forEach(btn => {
            // Retirer tous les listeners existants en clonant
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                const category = this.getAttribute('data-category');
                console.log('✅ Filtre cliqué:', category);
                
                // Activer bouton
                document.querySelectorAll('.category-btn').forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');
                
                // Filtrer projets
                document.querySelectorAll('.project-showcase-card').forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'grid';
                        card.style.opacity = '1';
                        card.style.visibility = 'visible';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, true); // useCapture = true
        });
        
        // BOUTONS "DÉCOUVRIR LE PROJET"
        const projectButtons = document.querySelectorAll('.project-cta');
        console.log('Boutons découvrir:', projectButtons.length);
        
        projectButtons.forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                const href = this.getAttribute('href');
                console.log('✅ Bouton découvrir cliqué:', href);
                
                if (href) {
                    window.location.href = href;
                }
            }, true);
        });
        
    }, 1000); // 1 seconde de délai
});
