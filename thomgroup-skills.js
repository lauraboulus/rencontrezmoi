// Données des compétences Thom Group
const skillsData = {
    'reporting': {
        icon: '📊',
        title: 'Reporting',
        subtitle: 'Traduire les données en décisions éclairées',
        sections: [
            {
                heading: 'Comprendre pour piloter',
                content: 'Le reporting en cybersécurité consiste à collecter, analyser et présenter des données de sécurité de manière claire et exploitable pour différents publics (direction, équipes techniques, métiers). Il transforme des informations brutes en indicateurs pertinents qui permettent de mesurer l\'efficacité des actions de sécurité, d\'identifier les tendances et d\'orienter les décisions stratégiques. Un bon reporting allie rigueur méthodologique, capacité de synthèse et adaptation au public cible.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté concrètement',
                content: 'La pratique du reporting m\'a permis de développer une vision transverse de la cybersécurité et des compétences essentielles :',
                list: [
                    'Concevoir des tableaux de bord synthétiques et visuels adaptés à chaque type d\'interlocuteur.',
                    'Identifier les indicateurs clés (KPI) pertinents pour mesurer l\'efficacité des campagnes de sensibilisation et des actions de sécurité.',
                    'Communiquer des résultats techniques de manière accessible et actionnable pour les décideurs.',
                    'Suivre l\'évolution des métriques dans le temps pour détecter les progrès et les axes d\'amélioration.'
                ]
            },
            {
                heading: 'Mon regard critique',
                content: 'Avec le recul, j\'ai identifié plusieurs apprentissages et limites dans ma pratique du reporting :',
                list: [
                    'Un reporting trop détaillé peut noyer l\'essentiel : la synthèse et la priorisation sont cruciales.',
                    'Les chiffres sans contexte peuvent être mal interprétés : l\'analyse qualitative est aussi importante que les données quantitatives.',
                    'Le reporting doit être un outil d\'aide à la décision, pas une simple compilation de statistiques.',
                    'La fréquence et le format doivent s\'adapter aux besoins réels des destinataires.'
                ],
                conclusion: 'Cette prise de conscience m\'a amenée à privilégier la qualité à la quantité et à systématiquement contextualiser mes analyses.'
            },
            {
                heading: 'Mon évolution dans cette pratique',
                content: 'Ma posture face au reporting a progressivement évolué :',
                list: [
                    'D\'une approche descriptive (présenter des chiffres) vers une approche analytique (expliquer ce qu\'ils signifient).',
                    'D\'un reporting uniforme vers une personnalisation en fonction du public (technique, managérial, stratégique).',
                    'D\'une logique de restitution vers une logique d\'aide à la décision et de pilotage.'
                ]
            },
            {
                heading: 'Projection et ambitions',
                content: 'Pour continuer à progresser dans le reporting cybersécurité, je souhaite :',
                list: [
                    'Approfondir mes compétences en data visualisation pour rendre mes rapports encore plus percutants.',
                    'Développer l\'automatisation des reportings pour gagner en efficacité et en réactivité.',
                    'Intégrer davantage d\'analyses prédictives pour anticiper les risques futurs.'
                ],
                conclusion: 'Mon objectif est de faire du reporting un véritable outil stratégique de pilotage de la cybersécurité.'
            }
        ]
    },
    'gestion-projet': {
        icon: '📋',
        title: 'Gestion de projet',
        subtitle: 'Coordonner, planifier et livrer avec impact',
        sections: [
            {
                heading: 'Orchestrer pour réussir',
                content: 'La gestion de projet en cybersécurité consiste à planifier, coordonner et piloter des initiatives de sécurité en mobilisant des ressources techniques et humaines, en respectant des contraintes de temps et de budget, et en assurant la communication entre toutes les parties prenantes. Elle nécessite organisation, anticipation, adaptabilité et capacité à gérer les imprévus tout en gardant le cap sur les objectifs.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté sur le terrain',
                content: 'Le pilotage du déploiement de la roadmap cybersécurité m\'a permis de développer des compétences opérationnelles essentielles :',
                list: [
                    'Structurer un projet complexe en phases claires avec des livrables identifiés.',
                    'Coordonner plusieurs chantiers simultanés (Terra Nova, MFA, audit partenaires) en priorisant les actions.',
                    'Communiquer régulièrement avec les équipes IT, la direction et les partenaires externes.',
                    'Gérer les imprévus et ajuster le planning en fonction des contraintes terrain.',
                    'Assurer un suivi rigoureux de l\'avancement et de la qualité des livrables.'
                ]
            },
            {
                heading: 'Autocritique et axes d\'amélioration',
                content: 'En prenant du recul sur ma gestion de projet, j\'ai identifié plusieurs points d\'amélioration :',
                list: [
                    'L\'anticipation des risques projet peut toujours être renforcée : mieux identifier les dépendances critiques en amont.',
                    'La documentation des décisions et des arbitrages est parfois négligée sous la pression du calendrier.',
                    'L\'implication des utilisateurs finaux dès le début du projet facilite l\'adoption et réduit les résistances.',
                    'Les outils de gestion de projet doivent rester simples et adaptés au contexte, sans surcharge administrative.'
                ],
                conclusion: 'Cette réflexion m\'a poussée à adopter une approche plus agile, avec des points de synchronisation fréquents et une documentation ciblée.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma pratique de la gestion de projet a progressivement mûri :',
                list: [
                    'D\'une approche séquentielle rigide vers une approche plus itérative et adaptative.',
                    'D\'un focus sur les livrables techniques vers une attention accrue à l\'adhésion des utilisateurs et au change management.',
                    'D\'une posture de coordination vers une posture de facilitation et d\'accompagnement des équipes.'
                ]
            },
            {
                heading: 'Vision pour l\'avenir',
                content: 'Pour continuer à progresser en gestion de projet cybersécurité, je souhaite :',
                list: [
                    'Me former aux méthodologies agiles (Scrum, Kanban) pour renforcer mon adaptabilité.',
                    'Développer mes compétences en gestion du changement pour améliorer l\'adoption des projets de sécurité.',
                    'Approfondir les aspects budgétaires et ROI pour mieux argumenter les investissements en cybersécurité.'
                ],
                conclusion: 'Mon ambition est de piloter des projets stratégiques de cybersécurité en alliant rigueur méthodologique et agilité opérationnelle.'
            }
        ]
    },
    'phishing': {
        icon: '🎣',
        title: 'Campagnes de Phishing',
        subtitle: 'Tester la vigilance, renforcer les défenses',
        sections: [
            {
                heading: 'Simuler pour protéger',
                content: 'Les campagnes de phishing en contexte professionnel consistent à simuler des attaques d\'hameçonnage réalistes pour évaluer le niveau de vigilance des collaborateurs, identifier les comportements à risque et mesurer l\'efficacité des formations de sensibilisation. Ces campagnes permettent de transformer une menace en opportunité d\'apprentissage, en créant des situations concrètes et sans risque réel.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté concrètement',
                content: 'La conception et le pilotage de campagnes de phishing via Terra Nova m\'ont permis de développer des compétences spécifiques :',
                list: [
                    'Créer des scénarios d\'hameçonnage réalistes et adaptés au contexte de l\'entreprise.',
                    'Paramétrer et déployer des campagnes à grande échelle tout en assurant leur suivi technique.',
                    'Analyser les résultats (taux de clics, de saisie d\'identifiants, de signalement) pour identifier les profils à risque.',
                    'Transformer les résultats en actions de sensibilisation ciblées et constructives.',
                    'Communiquer avec pédagogie pour éviter la stigmatisation et favoriser l\'apprentissage.'
                ]
            },
            {
                heading: 'Prendre du recul : mon regard critique',
                content: 'Avec le recul, j\'ai identifié plusieurs enseignements et limites :',
                list: [
                    'Les campagnes de phishing peuvent être perçues comme punitives si elles ne s\'accompagnent pas d\'une approche pédagogique et bienveillante.',
                    'La répétition des campagnes sans variation des scénarios peut créer un effet d\'accoutumance et réduire leur efficacité.',
                    'Le contexte de la campagne (période chargée, contexte organisationnel) influence fortement les résultats et doit être pris en compte.',
                    'Les utilisateurs qui cliquent ne sont pas nécessairement « mauvais » : c\'est une opportunité de renforcement, pas une faute.'
                ],
                conclusion: 'Cette réflexion m\'a amenée à toujours contextualiser les résultats et à privilégier une communication positive et constructive.'
            },
            {
                heading: 'Mon évolution dans cette pratique',
                content: 'Ma posture face aux campagnes de phishing a évolué :',
                list: [
                    'D\'une approche centrée sur le test vers une approche centrée sur l\'apprentissage.',
                    'D\'une logique de sanction (« qui a cliqué ? ») vers une logique de progression (« comment progresser collectivement ? »).',
                    'D\'une vision technique (déployer la campagne) vers une vision stratégique (mesurer l\'évolution de la maturité).'
                ]
            },
            {
                heading: 'Projection future',
                content: 'Pour approfondir cette compétence, je souhaite :',
                list: [
                    'Développer des scénarios de phishing encore plus sophistiqués, intégrant des techniques d\'ingénierie sociale avancées.',
                    'Intégrer davantage de gamification pour rendre l\'apprentissage plus engageant.',
                    'Mesurer l\'impact à long terme des campagnes sur la réduction des incidents réels de phishing.'
                ],
                conclusion: 'Mon objectif est de faire des campagnes de phishing un levier durable d\'amélioration de la culture cybersécurité.'
            }
        ]
    },
    'sensibilisation-formation': {
        icon: '🎓',
        title: 'Sensibilisation et Formation à la cybersécurité',
        subtitle: 'Éduquer pour transformer les comportements',
        sections: [
            {
                heading: 'Former pour protéger durablement',
                content: 'La sensibilisation et la formation à la cybersécurité visent à éduquer les collaborateurs aux bonnes pratiques de sécurité, à développer leur vigilance face aux menaces et à les transformer en acteurs conscients et responsables de la protection du SI. Cette démarche repose sur des contenus pédagogiques variés, des formats engageants et une approche progressive adaptée à chaque public.'
            },
            {
                heading: 'Ce que cette compétence m\'a apporté',
                content: 'Le déploiement de programmes de sensibilisation m\'a permis de développer des compétences transverses :',
                list: [
                    'Concevoir des contenus pédagogiques adaptés à différents niveaux de maturité (débutants, intermédiaires, experts).',
                    'Utiliser des formats variés pour maintenir l\'engagement : vidéos, quiz, ateliers pratiques, jeux de rôle.',
                    'Animer des sessions de formation interactives en présentiel et à distance.',
                    'Mesurer l\'efficacité des formations via des évaluations avant/après et des indicateurs comportementaux.',
                    'Adapter mon discours en fonction des métiers, des enjeux et des résistances rencontrées.'
                ]
            },
            {
                heading: 'Autocritique et prise de recul',
                content: 'Avec l\'expérience, j\'ai identifié plusieurs axes d\'amélioration :',
                list: [
                    'La sensibilisation ponctuelle ne suffit pas : elle doit être continue et intégrée au quotidien des collaborateurs.',
                    'Les messages trop techniques ou alarmistes créent de la distance : la pédagogie doit rester accessible et positive.',
                    'L\'implication des managers et de la direction est essentielle pour légitimer et amplifier les messages de sécurité.',
                    'Le changement de comportement prend du temps : il faut de la patience, de la répétition et de la bienveillance.'
                ],
                conclusion: 'Cette réflexion m\'a convaincue de l\'importance d\'une approche progressive, positive et ancrée dans le réel.'
            },
            {
                heading: 'Mon évolution',
                content: 'Ma pratique de la sensibilisation a progressivement évolué :',
                list: [
                    'D\'une logique de transmission descendante vers une co-construction avec les utilisateurs.',
                    'D\'une approche centrée sur les menaces vers une approche centrée sur les solutions et les comportements positifs.',
                    'D\'une vision individuelle vers une dynamique collective, en créant des ambassadeurs cybersécurité au sein des équipes.'
                ]
            },
            {
                heading: 'Vision d\'avenir',
                content: 'Pour continuer à progresser dans la sensibilisation cybersécurité, je souhaite :',
                list: [
                    'Développer des programmes gamifiés et immersifs pour maximiser l\'engagement et la mémorisation.',
                    'Intégrer davantage de mises en situation réelles et de retours d\'expérience concrets.',
                    'Former des relais internes (ambassadeurs cybersécurité) pour démultiplier l\'impact et ancrer la sécurité dans la culture d\'entreprise.',
                    'Mesurer l\'impact à long terme des formations sur la réduction des incidents de sécurité liés au facteur humain.'
                ],
                conclusion: 'Mon ambition est de faire de la sensibilisation un pilier stratégique de la transformation culturelle en cybersécurité, où chaque collaborateur devient acteur conscient de la protection.'
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
