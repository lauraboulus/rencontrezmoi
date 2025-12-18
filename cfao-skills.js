// Données des compétences CFAO
const skillsData = {
    'gestion-vulnerabilites': {
        icon: '🛡️',
        title: 'Gestion des vulnérabilités',
        subtitle: 'De l\'identification du risque à la maîtrise continue',
        sections: [
            {
                heading: 'Comprendre avant de sécuriser',
                content: 'La gestion des vulnérabilités est une démarche continue visant à identifier, analyser, prioriser et corriger les failles de sécurité présentes sur un système d\'information. Elle repose à la fois sur des outils techniques (scans, analyses, tests d\'intrusion), des processus structurés (qualification, suivi, remédiation) et une communication efficace entre les équipes techniques et métiers. Son objectif n\'est pas seulement de détecter des failles, mais de réduire durablement le risque en tenant compte du contexte, de la criticité des actifs et des impacts business.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté sur le terrain',
                content: 'La mise en pratique de la gestion des vulnérabilités m\'a permis de développer une vision globale et structurée de la sécurité. Concrètement, j\'ai appris à :',
                list: [
                    'Mettre en place un processus clair et reproductible de détection, d\'évaluation et de suivi des vulnérabilités.',
                    'Prioriser les risques non pas uniquement selon des scores techniques, mais selon leur impact réel sur l\'organisation.',
                    'Travailler en lien avec différentes parties prenantes (IT, métiers, partenaires) pour transformer un constat de faille en action concrète.',
                    'Comprendre que la sécurité n\'est efficace que lorsqu\'elle est opérationnelle, suivie et comprise.'
                ]
            },
            {
                heading: 'Prendre du recul : mon regard critique',
                content: 'Avec le recul, cette compétence m\'a aussi appris à identifier mes axes d\'amélioration. J\'ai notamment constaté que :',
                list: [
                    'Les outils sont indispensables, mais ne remplacent pas l\'analyse humaine et le contexte métier.',
                    'La gestion des vulnérabilités peut devenir chronophage si les processus ne sont pas suffisamment automatisés ou priorisés.',
                    'La communication autour des vulnérabilités est parfois aussi complexe que leur résolution technique.'
                ],
                conclusion: 'Cette autocritique m\'a poussée à chercher un meilleur équilibre entre exhaustivité, efficacité et pragmatisme.'
            },
            {
                heading: 'Mon évolution dans cette pratique',
                content: 'Au fil de l\'expérience, ma posture a évolué :',
                list: [
                    'D\'une approche principalement technique vers une approche orientée risque et décision.',
                    'D\'une logique de détection à une logique de pilotage et de suivi dans le temps.',
                    'D\'une vision individuelle à une dynamique collective, intégrant sensibilisation et accompagnement des équipes.'
                ],
                conclusion: 'J\'ai appris à considérer la gestion des vulnérabilités comme un levier de maturité cybersécurité, et non comme une simple obligation technique.'
            },
            {
                heading: 'Regard vers l\'avenir',
                content: 'À moyen et long terme, je souhaite approfondir cette compétence en :',
                list: [
                    'Renforçant mes connaissances en gestion du risque, gouvernance et conformité.',
                    'Continuant à relier la gestion des vulnérabilités à la sensibilisation des utilisateurs, car l\'humain reste un maillon clé de la sécurité.'
                ],
                conclusion: 'Mon ambition est de faire de la gestion des vulnérabilités un outil de décision stratégique, au service de la protection des systèmes et des personnes.'
            }
        ]
    },
    'pentest': {
        icon: '🔍',
        title: 'Tests d\'intrusion (Pentest)',
        subtitle: 'Méthodologie structurée et vision offensive de la sécurité',
        sections: [
            {
                heading: 'Comprendre pour mieux protéger',
                content: 'Le pentest (test d\'intrusion) consiste à simuler une attaque réelle sur un système d\'information pour identifier ses vulnérabilités avant qu\'un attaquant malveillant ne les exploite. Cette démarche offensive permet de valider l\'efficacité des mesures de sécurité en place et de fournir des recommandations concrètes pour renforcer la posture de défense. Un pentest bien mené combine expertise technique, méthodologie rigoureuse et compréhension du contexte métier.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté concrètement',
                content: 'La pratique des tests d\'intrusion m\'a permis de développer une approche offensive de la cybersécurité. Concrètement, j\'ai appris à :',
                list: [
                    'Élaborer une méthodologie de pentest structurée, reproductible et traçable.',
                    'Maîtriser des outils spécialisés (Nessus, Nmap, Nikto, WhatWeb) et comprendre leurs résultats.',
                    'Identifier les vulnérabilités critiques et évaluer leur exploitabilité réelle.',
                    'Documenter les failles découvertes avec clarté pour faciliter leur remédiation par les équipes techniques.'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'En prenant du recul sur ma pratique du pentest, j\'ai identifié plusieurs axes d\'amélioration :',
                list: [
                    'Un pentest sans contexte métier est incomplet : comprendre les priorités business est essentiel.',
                    'Les outils automatisés sont puissants, mais l\'analyse manuelle reste indispensable pour détecter les failles complexes.',
                    'La communication des résultats doit être adaptée à chaque interlocuteur : technique pour les équipes IT, stratégique pour la direction.'
                ],
                conclusion: 'Cette réflexion m\'a amenée à toujours contextualiser mes tests et à soigner la présentation de mes recommandations.'
            },
            {
                heading: 'Mon évolution dans cette pratique',
                content: 'Ma pratique du pentest a évolué progressivement :',
                list: [
                    'D\'une approche purement technique vers une vision orientée impact métier.',
                    'D\'une exécution de tests ponctuels vers l\'intégration dans un processus continu de sécurité.',
                    'D\'un focus sur la détection vers un accompagnement complet incluant priorisation et remédiation.'
                ]
            },
            {
                heading: 'Projection et ambitions',
                content: 'Pour continuer à progresser dans le domaine des tests d\'intrusion, je souhaite :',
                list: [
                    'Approfondir mes connaissances en exploitation avancée et post-exploitation.',
                    'Développer mes compétences en pentest applicatif (web, mobile, API).',
                    'Renforcer mon approche Red Team pour simuler des scénarios d\'attaque réalistes et complexes.'
                ],
                conclusion: 'Mon objectif est de devenir une experte capable d\'évaluer la résilience globale d\'une organisation face aux cybermenaces.'
            }
        ]
    },
    'sensibilisation': {
        icon: '💡',
        title: 'Sensibilisation à la cybersécurité',
        subtitle: 'Transformer les utilisateurs en acteurs de la sécurité',
        sections: [
            {
                heading: 'L\'humain, maillon essentiel de la sécurité',
                content: 'La sensibilisation à la cybersécurité vise à éduquer et former les utilisateurs aux bonnes pratiques de sécurité, afin de réduire les risques liés au facteur humain. Elle repose sur la création de contenus pédagogiques adaptés, l\'animation de formations interactives et la mesure de l\'adoption des comportements sécurisés. Une sensibilisation réussie transforme les collaborateurs d\'une potentielle vulnérabilité en première ligne de défense contre les cyberattaques.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté',
                content: 'Le déploiement de programmes de sensibilisation m\'a permis de développer des compétences transverses essentielles :',
                list: [
                    'Concevoir des contenus pédagogiques engageants (vidéos, quiz, ateliers) adaptés à différents publics.',
                    'Vulgariser des concepts techniques complexes pour les rendre accessibles et actionnables.',
                    'Animer des formations interactives qui suscitent l\'adhésion et favorisent le changement de comportement.',
                    'Mesurer l\'efficacité des campagnes de sensibilisation et ajuster les contenus en conséquence.'
                ]
            },
            {
                heading: 'Autocritique et axes d\'amélioration',
                content: 'Avec le recul, j\'ai identifié plusieurs apprentissages et limites de ma pratique :',
                list: [
                    'La sensibilisation ponctuelle n\'est pas suffisante : elle doit être continue et intégrée au quotidien.',
                    'Chaque public a ses propres enjeux : une approche unique ne fonctionne pas pour tous les métiers.',
                    'Le changement de comportement prend du temps : la patience et la répétition sont nécessaires.'
                ],
                conclusion: 'Cette prise de conscience m\'a poussée à adopter une approche plus personnalisée et à inscrire la sensibilisation dans la durée.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma posture dans la sensibilisation cybersécurité a progressivement évolué :',
                list: [
                    'D\'une approche descendante (imposer des règles) vers une approche participative (co-construire avec les utilisateurs).',
                    'De la transmission d\'informations vers la création d\'expériences engageantes et mémorables.',
                    'D\'une vision centrée sur le contenu vers une vision centrée sur l\'impact et le changement de comportement.'
                ]
            },
            {
                heading: 'Vision pour l\'avenir',
                content: 'À moyen et long terme, je souhaite continuer à renforcer cette compétence en :',
                list: [
                    'Développant des programmes de sensibilisation gamifiés et innovants pour maximiser l\'engagement.',
                    'Intégrant davantage de retours d\'expérience réels et de mises en situation pratiques.',
                    'Formant des ambassadeurs cybersécurité au sein des équipes pour démultiplier l\'impact.'
                ],
                conclusion: 'Mon ambition est de faire de la sensibilisation un levier stratégique de transformation culturelle, où chaque collaborateur devient acteur conscient de la sécurité.'
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
