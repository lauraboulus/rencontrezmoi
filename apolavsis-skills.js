// Données des compétences Apolavsis
const skillsData = {
    'communication-relation': {
        icon: '💬',
        title: 'Communication et relation humaine',
        subtitle: 'Créer du lien authentique avec empathie',
        sections: [
            {
                heading: 'L\'humain au cœur de l\'action',
                content: 'La communication et la relation humaine dans un contexte d\'accompagnement de personnes vulnérables vont bien au-delà de la simple transmission d\'informations. Elles reposent sur l\'écoute active, l\'empathie, la capacité à créer un espace de confiance et de sécurité émotionnelle, et l\'adaptation du discours aux besoins spécifiques de chaque personne. Cette compétence est essentielle pour établir des relations authentiques, apaiser les inquiétudes et créer du lien dans des moments difficiles.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté concrètement',
                content: 'L\'accompagnement de personnes malades m\'a permis de développer une sensibilité et des compétences relationnelles profondes :',
                list: [
                    'Pratiquer l\'écoute active et bienveillante, en laissant l\'espace nécessaire à l\'expression des émotions.',
                    'Adapter ma communication en fonction de l\'état émotionnel et physique de chaque bénéficiaire.',
                    'Créer un climat de confiance et de sécurité par une présence authentique et non-jugeante.',
                    'Communiquer avec empathie tout en maintenant une juste distance professionnelle.',
                    'Gérer les silences et les moments de vulnérabilité avec respect et délicatesse.'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'Avec le recul, j\'ai identifié plusieurs apprentissages et axes de progression :',
                list: [
                    'L\'empathie ne suffit pas : il faut aussi savoir se protéger émotionnellement pour durer dans l\'engagement.',
                    'Chaque personne a ses propres besoins de communication : ce qui réconforte l\'un peut mettre l\'autre mal à l\'aise.',
                    'Le silence peut être aussi précieux que les mots : savoir être présent sans nécessairement parler.',
                    'La communication avec les familles est tout aussi importante que celle avec les bénéficiaires.'
                ],
                conclusion: 'Cette réflexion m\'a amenée à toujours privilégier l\'authenticité et l\'adaptation, et à prendre soin de mon propre équilibre émotionnel.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma posture dans la relation d\'aide a progressivement évolué :',
                list: [
                    'D\'une volonté de "tout bien faire" vers une acceptation de mes limites et de l\'imperfection.',
                    'D\'une communication parfois maladroite vers une présence plus juste et plus apaisée.',
                    'D\'une posture d\'aide vers une posture d\'accompagnement, où la personne reste actrice.',
                    'D\'une communication individuelle vers une capacité à créer du lien entre bénéficiaires, bénévoles et familles.'
                ]
            },
            {
                heading: 'Vision d\'avenir',
                content: 'Pour continuer à développer cette compétence, je souhaite :',
                list: [
                    'Me former davantage aux techniques d\'écoute active et de communication non-violente.',
                    'Approfondir ma compréhension des mécanismes psychologiques liés à la maladie et à la vulnérabilité.',
                    'Développer ma capacité à former d\'autres bénévoles aux compétences relationnelles essentielles.',
                    'Continuer à cultiver mon empathie tout en renforçant ma résilience émotionnelle.'
                ],
                conclusion: 'Mon objectif est de faire de la qualité relationnelle un pilier de tout accompagnement, en mettant l\'humain véritablement au centre.'
            }
        ]
    },
    'leadership-gestion': {
        icon: '👥',
        title: 'Leadership et gestion d\'équipe',
        subtitle: 'Fédérer et inspirer avec bienveillance',
        sections: [
            {
                heading: 'Guider avec cœur et structure',
                content: 'Le leadership dans un contexte associatif et humanitaire nécessite une combinaison unique de bienveillance, d\'inspiration et d\'organisation. Il s\'agit de fédérer des bénévoles autour d\'une mission commune, de maintenir leur motivation dans la durée, de résoudre les tensions avec diplomatie et de créer une culture d\'équipe positive et solidaire. Ce leadership repose davantage sur l\'exemplarité et l\'écoute que sur l\'autorité.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté sur le terrain',
                content: 'La présidence d\'Apolavsis m\'a permis de développer un leadership authentique et adapté au contexte associatif :',
                list: [
                    'Fédérer une équipe de bénévoles autour d\'une mission commune forte et inspirante.',
                    'Maintenir la motivation des bénévoles malgré les moments difficiles et l\'engagement sur la durée.',
                    'Organiser des réunions régulières pour partager les réussites, les difficultés et co-construire les solutions.',
                    'Gérer les tensions et les désaccords avec diplomatie et en privilégiant le dialogue.',
                    'Reconnaître et valoriser l\'engagement de chaque bénévole pour renforcer le sentiment d\'appartenance.',
                    'Déléguer efficacement tout en restant garante de la qualité de l\'accompagnement.'
                ]
            },
            {
                heading: 'Autocritique et prise de recul',
                content: 'En prenant du recul sur mon leadership, j\'ai identifié plusieurs axes d\'amélioration :',
                list: [
                    'Trouver le bon équilibre entre écoute bienveillante et prise de décision ferme quand nécessaire.',
                    'Accepter de ne pas pouvoir répondre à toutes les attentes et de devoir parfois décevoir.',
                    'Déléguer davantage pour ne pas m\'épuiser et permettre à d\'autres de grandir dans leurs responsabilités.',
                    'Gérer ma charge émotionnelle en tant que présidente, entre soutien aux bénévoles et accompagnement des bénéficiaires.'
                ],
                conclusion: 'Cette réflexion m\'a amenée à chercher un leadership plus collaboratif et à mieux prendre soin de moi pour mieux prendre soin des autres.'
            },
            {
                heading: 'Mon évolution',
                content: 'Mon style de leadership a progressivement évolué :',
                list: [
                    'D\'un leadership directif vers un leadership participatif et collaboratif.',
                    'D\'une posture de « chef » vers une posture de « facilitateur » et « inspirateur ».',
                    'D\'une gestion individuelle vers une dynamique collective où chacun trouve sa place.',
                    'D\'une vision axée sur les tâches vers une vision axée sur les personnes et le sens.'
                ]
            },
            {
                heading: 'Projection',
                content: 'Pour continuer à développer mon leadership, je souhaite :',
                list: [
                    'Me former aux techniques de facilitation et de co-construction pour renforcer l\'intelligence collective.',
                    'Développer ma capacité à gérer les conflits et les situations émotionnellement chargées.',
                    'Apprendre à mieux identifier et former de futurs leaders au sein de l\'équipe pour assurer la pérennité.',
                    'Continuer à cultiver un leadership authentique, aligné avec mes valeurs et inspirant pour les autres.'
                ],
                conclusion: 'Mon ambition est de continuer à fédérer des équipes engagées autour de missions à fort impact humain, en alliant bienveillance, exigence et vision partagée.'
            }
        ]
    },
    'organisation-planification': {
        icon: '📅',
        title: 'Organisation et planification d\'événements',
        subtitle: 'Structurer l\'action pour maximiser l\'impact',
        sections: [
            {
                heading: 'Orchestrer pour mieux servir',
                content: 'L\'organisation et la planification dans le contexte associatif consistent à structurer les actions, coordonner les disponibilités des bénévoles, anticiper les besoins des bénéficiaires et créer des processus efficaces qui permettent de maximiser l\'impact tout en préservant l\'humain au cœur de l\'action. Cette compétence allie rigueur méthodologique, anticipation et flexibilité pour s\'adapter aux imprévus.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté concrètement',
                content: 'La coordination des visites et des activités d\'Apolavsis m\'a permis de développer des compétences organisationnelles solides :',
                list: [
                    'Élaborer un calendrier structuré des visites en tenant compte des disponibilités des bénévoles et des besoins des bénéficiaires.',
                    'Mettre en place des outils de suivi et de coordination pour assurer la régularité et la qualité des visites.',
                    'Anticiper les périodes critiques (vacances, examens) et réorganiser les plannings en conséquence.',
                    'Adapter les activités en fonction des capacités physiques et émotionnelles des personnes accompagnées.',
                    'Gérer les imprévus (annulations, urgences) avec réactivité tout en minimisant l\'impact sur les bénéficiaires.',
                    'Organiser des événements collectifs (réunions, formations, moments de convivialité) pour renforcer la cohésion.'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'Avec le recul, j\'ai identifié plusieurs apprentissages et limites :',
                list: [
                    'Une organisation trop rigide peut devenir contre-productive : il faut savoir laisser place à la spontanéité et à l\'humain.',
                    'Les outils numériques facilitent la coordination mais ne doivent pas remplacer la communication directe.',
                    'La planification doit toujours rester au service des bénéficiaires, jamais une fin en soi.',
                    'L\'anticipation est essentielle, mais l\'acceptation de l\'imprévu l\'est tout autant.'
                ],
                conclusion: 'Cette réflexion m\'a amenée à privilégier une organisation souple et adaptative, toujours centrée sur l\'impact humain.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma pratique de l\'organisation a progressivement évolué :',
                list: [
                    'D\'une planification détaillée et rigide vers une planification cadre laissant place à l\'adaptation.',
                    'D\'une gestion individuelle des tâches vers une coordination collective et partagée.',
                    'D\'une logique de contrôle vers une logique de facilitation et d\'autonomisation des bénévoles.',
                    'D\'une organisation orientée processus vers une organisation orientée impact et qualité relationnelle.'
                ]
            },
            {
                heading: 'Projection future',
                content: 'Pour continuer à développer cette compétence, je souhaite :',
                list: [
                    'Approfondir mes compétences en gestion de projet agile pour renforcer l\'adaptabilité.',
                    'Développer l\'usage d\'outils numériques collaboratifs pour faciliter la coordination à distance.',
                    'Apprendre à mieux mesurer l\'impact des actions pour ajuster l\'organisation en conséquence.',
                    'Transmettre mes méthodes d\'organisation à d\'autres membres pour assurer la pérennité de l\'association.'
                ],
                conclusion: 'Mon objectif est de continuer à mettre mon sens de l\'organisation au service de projets à forte dimension humaine, en alliant efficacité et bienveillance.'
            }
        ]
    }
};

// Fonction pour générer le contenu HTML d'une compétence
function generateSkillContent(skillKey) {
    const skill = skillsData[skillKey];
    if (!skill) return '';

    let html = `
        <div class="modal-header">
            <div class="modal-icon">${skill.icon}</div>
            <h2>${skill.title}</h2>
            <p class="modal-subtitle">${skill.subtitle}</p>
        </div>
    `;

    skill.sections.forEach(section => {
        html += `<div class="modal-section">`;
        html += `<h3>${section.heading}</h3>`;
        html += `<p>${section.content}</p>`;
        
        if (section.list) {
            html += '<ul class="modal-list">';
            section.list.forEach(item => {
                html += `<li>${item}</li>`;
            });
            html += '</ul>';
        }
        
        if (section.conclusion) {
            html += `<p class="modal-conclusion">${section.conclusion}</p>`;
        }
        
        html += `</div>`;
    });

    return html;
}

// Gestion des clics sur les compétences
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-detail-card');
    const modal = document.getElementById('skillModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.modal-close');

    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const skillKey = this.getAttribute('data-skill');
            const content = generateSkillContent(skillKey);
            modalBody.innerHTML = content;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
