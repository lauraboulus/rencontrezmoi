// Données des compétences CFAO - Version épurée avec niveaux de lecture
const skillsData = {
    'gestion-vulnerabilites': {
        icon: '🛡️',
        title: 'Gestion des vulnérabilités',
        subtitle: 'De l\'identification du risque à la maîtrise continue',
        sections: [
            {
                heading: 'Comprendre avant de sécuriser',
                content: 'La <strong class="highlight-tech">gestion des vulnérabilités</strong> est une démarche continue visant à identifier, analyser, prioriser et corriger les failles de sécurité. Elle repose sur des <strong class="highlight-tech">outils techniques</strong>, des <strong>processus structurés</strong> et une communication efficace entre équipes. Son objectif est de <strong>réduire durablement le risque</strong> en tenant compte du contexte métier et de la criticité des actifs.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté',
                content: 'La mise en pratique m\'a permis de développer une vision globale et structurée :',
                list: [
                    'Mettre en place un <strong>processus reproductible</strong> de détection, évaluation et suivi',
                    '<strong>Prioriser les risques</strong> selon leur impact réel sur l\'organisation',
                    'Travailler avec différentes parties prenantes pour transformer un constat en <strong>action concrète</strong>',
                    'Comprendre que la sécurité n\'est efficace que lorsqu\'elle est opérationnelle et comprise'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'Avec le recul, cette compétence m\'a appris à identifier mes axes d\'amélioration :',
                list: [
                    'Les <strong class="highlight-tech">outils</strong> sont indispensables, mais ne remplacent pas l\'analyse humaine',
                    'La gestion peut devenir chronophage si les processus ne sont pas suffisamment <strong>automatisés</strong>',
                    'La <strong>communication</strong> autour des vulnérabilités est parfois aussi complexe que leur résolution'
                ],
                conclusion: 'Cette autocritique m\'a poussée à chercher un meilleur équilibre entre exhaustivité, efficacité et pragmatisme.'
            },
            {
                heading: 'Mon évolution',
                content: 'Au fil de l\'expérience, ma posture a évolué :',
                list: [
                    'D\'une approche technique vers une <strong>approche orientée risque</strong> et décision',
                    'D\'une logique de détection à une logique de <strong>pilotage et suivi</strong>',
                    'D\'une vision individuelle à une <strong>dynamique collective</strong>'
                ],
                conclusion: 'J\'ai appris à considérer la gestion des vulnérabilités comme un levier de maturité cybersécurité.'
            },
            {
                heading: 'Regard vers l\'avenir',
                content: 'À moyen et long terme, je souhaite approfondir cette compétence :',
                list: [
                    'Renforcer mes connaissances en <strong>gestion du risque</strong> et gouvernance',
                    'Relier la gestion technique à la <strong>sensibilisation des utilisateurs</strong>'
                ],
                conclusion: 'Mon ambition est d\'en faire un outil de décision stratégique au service de la protection des systèmes et des personnes.'
            }
        ]
    },
    'pentest': {
        icon: '🔍',
        title: 'Tests d\'intrusion (Pentest)',
        subtitle: 'Méthodologie structurée et vision offensive',
        sections: [
            {
                heading: 'Comprendre pour mieux protéger',
                content: 'Le <strong class="highlight-tech">pentest</strong> consiste à simuler une attaque réelle pour identifier les vulnérabilités avant qu\'un attaquant ne les exploite. Cette démarche offensive permet de valider l\'efficacité des mesures de sécurité et de fournir des <strong>recommandations concrètes</strong>. Un pentest bien mené combine expertise technique, <strong>méthodologie rigoureuse</strong> et compréhension du contexte métier.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté',
                content: 'La pratique des tests d\'intrusion m\'a permis de développer une approche offensive :',
                list: [
                    'Élaborer une <strong>méthodologie structurée</strong>, reproductible et traçable',
                    'Maîtriser des <strong class="highlight-tech">outils spécialisés</strong> (Nessus, Nmap, Nikto, WhatWeb)',
                    'Identifier les <strong>vulnérabilités critiques</strong> et évaluer leur exploitabilité',
                    'Documenter les failles avec clarté pour faciliter leur remédiation'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'En prenant du recul, j\'ai identifié plusieurs axes d\'amélioration :',
                list: [
                    'Un pentest sans <strong>contexte métier</strong> est incomplet',
                    'Les outils automatisés sont puissants, mais l\'<strong>analyse manuelle</strong> reste indispensable',
                    'La communication doit être <strong>adaptée</strong> à chaque interlocuteur'
                ],
                conclusion: 'Cette réflexion m\'a amenée à toujours contextualiser mes tests et soigner la présentation.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma pratique a progressivement évolué :',
                list: [
                    'D\'une approche technique vers une vision <strong>orientée impact métier</strong>',
                    'De tests ponctuels vers l\'intégration dans un <strong>processus continu</strong>',
                    'D\'un focus sur la détection vers un accompagnement complet'
                ]
            },
            {
                heading: 'Projection',
                content: 'Pour continuer à progresser, je souhaite :',
                list: [
                    'Approfondir mes connaissances en <strong>exploitation avancée</strong>',
                    'Développer mes compétences en <strong class="highlight-tech">pentest applicatif</strong> (web, mobile, API)',
                    'Renforcer mon approche <strong>Red Team</strong> pour des scénarios réalistes'
                ],
                conclusion: 'Mon objectif est d\'évaluer la résilience globale d\'une organisation face aux cybermenaces.'
            }
        ]
    },
    'sensibilisation': {
        icon: '💡',
        title: 'Sensibilisation à la cybersécurité',
        subtitle: 'Transformer les utilisateurs en acteurs de la sécurité',
        sections: [
            {
                heading: 'L\'humain, maillon essentiel',
                content: 'La <strong>sensibilisation</strong> vise à éduquer les utilisateurs aux bonnes pratiques de sécurité pour réduire les risques liés au <strong>facteur humain</strong>. Elle repose sur la création de contenus pédagogiques adaptés, l\'animation de formations interactives et la mesure de l\'adoption des comportements sécurisés. Une sensibilisation réussie transforme les collaborateurs en <strong>première ligne de défense</strong>.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté',
                content: 'Le déploiement de programmes de sensibilisation m\'a permis de développer :',
                list: [
                    'Concevoir des <strong>contenus pédagogiques engageants</strong> adaptés à différents publics',
                    '<strong>Vulgariser</strong> des concepts techniques complexes',
                    'Animer des <strong>formations interactives</strong> qui favorisent le changement',
                    'Mesurer l\'efficacité des campagnes et ajuster les contenus'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'Avec le recul, j\'ai identifié plusieurs apprentissages :',
                list: [
                    'La sensibilisation ponctuelle ne suffit pas : elle doit être <strong>continue</strong>',
                    'Chaque public a ses propres enjeux : une approche unique ne fonctionne pas',
                    'Le changement de comportement prend du temps : patience et répétition sont nécessaires'
                ],
                conclusion: 'Cette prise de conscience m\'a poussée à adopter une approche personnalisée et durable.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma posture a progressivement évolué :',
                list: [
                    'D\'une approche descendante vers une <strong>approche participative</strong>',
                    'De la transmission d\'informations vers la création d\'<strong>expériences engageantes</strong>',
                    'D\'une vision centrée sur le contenu vers une vision centrée sur l\'<strong>impact</strong>'
                ]
            },
            {
                heading: 'Vision pour l\'avenir',
                content: 'Pour renforcer cette compétence, je souhaite :',
                list: [
                    'Développer des programmes <strong>gamifiés</strong> et innovants',
                    'Intégrer davantage de <strong>retours d\'expérience réels</strong>',
                    'Former des <strong>ambassadeurs cybersécurité</strong> pour démultiplier l\'impact'
                ],
                conclusion: 'Mon ambition est de faire de la sensibilisation un levier de transformation culturelle.'
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
