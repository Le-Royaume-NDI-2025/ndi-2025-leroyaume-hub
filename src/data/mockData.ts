import type { Project, TeamMember } from '../types';

// Team members
export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Axel Frache',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/axelfrache.png',
        bio: 'Étudiant à Polytech Montpellier, passionné par l\'automatisation et le cloud.',
        githubUrl: 'https://github.com/axelfrache',
        linkedinUrl: 'https://www.linkedin.com/in/axel-frache/',
    },
    {
        id: '2',
        name: 'Damien Mathieu',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/damienmathieu.jpeg',
        bio: 'Étudiant à Polytech Montpellier, spécialisé dans l\'infrastructure et le CI/CD.',
        githubUrl: 'https://github.com/damien-mathieu1',
        linkedinUrl: 'https://www.linkedin.com/in/damien-mathieu1/',
    },
    {
        id: '3',
        name: 'Evan Paillard',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/evanpaillard.jpeg',
        bio: 'Étudiant à Polytech Montpellier, expert en conteneurisation et orchestration.',
        githubUrl: 'https://github.com/evan-paillard',
        linkedinUrl: 'https://www.linkedin.com/in/evan-paillard1/',
    },
    {
        id: '4',
        name: 'Nathan Dilhan',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/nathandilhan.jpeg',
        bio: 'Étudiant à Polytech Montpellier, passionné par le DevOps et les technologies cloud.',
        githubUrl: 'https://github.com/dilnat',
        linkedinUrl: 'https://www.linkedin.com/in/nathan-dilhan-69045622b/',
    },
    {
        id: '5',
        name: 'Noa Despaux',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/noadespaux.jpeg',
        bio: 'Étudiant à Polytech Montpellier, spécialisé dans l\'automatisation et l\'infrastructure.',
        githubUrl: 'https://github.com/NoaDespaux',
        linkedinUrl: 'https://www.linkedin.com/in/noa-despaux/',
    },
];

// Projects - Défis NDI 2025
export const projects: Project[] = [
    {
        id: '1',
        title: 'NIRD - Village Numérique Résistant',
        description:
            'Défi principal de la Nuit de l\'Info 2025 proposé par le collectif NIRD. Une application web pour aider les établissements scolaires à comprendre et réduire leurs dépendances numériques, en promouvant un numérique libre, responsable et durable.',
        challenge: 'Le Village Numérique Résistant',
        challengeProvider: 'Collectif NIRD',
        technologies: ['React', 'TypeScript', 'Vite', 'Docker'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-nird',
        demoUrl: 'https://nird.royaumendi.dev',
        features: [
            'Application ludique et engageante pour sensibiliser au numérique responsable',
            'Outils interactifs (mini-site narratif, parcours visuel, plateforme explicative)',
            'Mécaniques de choix et scénarios pour transmettre la résistance numérique',
            'Environnement gamifié pour donner envie d\'apprendre et d\'agir',
        ],
        screenshots: [
            'https://placehold.co/800x600/1e3a8a/fbbf24?text=NIRD+Dashboard',
            'https://placehold.co/800x600/1e40af/f59e0b?text=NIRD+Interactive',
        ],
        teamMembers: ['1', '2', '3', '4', '5'],
        createdAt: '2024-12-05T00:00:00Z',
    },
    {
        id: '2',
        title: 'La Carte des Talents',
        description:
            'Défi proposé par le CESI de Saint-Nazaire pour créer une carte interactive mettant en valeur les talents et compétences des participants.',
        challenge: 'La Carte des Talents',
        challengeProvider: 'CESI de Saint-Nazaire',
        technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Vite', 'Docker', 'Kubernetes'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-talent-map',
        demoUrl: 'https://talent.royaumendi.dev',
        features: [
            'Carte interactive des talents',
            'Visualisation géographique des compétences',
            'Mise en réseau des profils',
            'Interface responsive et intuitive',
        ],
        screenshots: [
            'https://placehold.co/800x600/1e40af/fbbf24?text=Talent+Map',
        ],
        teamMembers: ['1', '2', '3'],
        createdAt: '2024-12-05T00:00:00Z',
    },
    {
        id: '3',
        title: 'EcoSearch - Extension Éco-responsable',
        description:
            'Défi NEVERHACK : "Manifestement à jour, open source et utile" - Création d\'une extension navigateur pour promouvoir la recherche éco-responsable sur le web.',
        challenge: 'La Ligue des Extensions',
        challengeProvider: 'NEVERHACK',
        technologies: ['TypeScript', 'React', 'Vite', 'Docker'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-extension-ecosearch',
        features: [
            'Extension open source multi-navigateurs',
            'Recherche web éco-responsable',
            'Interface utilisateur minimaliste',
            'Respect de la vie privée',
        ],
        screenshots: [],
        teamMembers: ['1', '2'],
        createdAt: '2024-12-05T00:00:00Z',
    },
    {
        id: '4',
        title: 'RSE by Design',
        description:
            'Défi proposé par NUMIH France pour intégrer la Responsabilité Sociétale des Entreprises dès la conception des projets numériques.',
        challenge: 'RSE by design',
        challengeProvider: 'NUMIH France',
        technologies: ['TypeScript', 'React', 'Vite', 'Docker'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-rse',
        features: [
            'Conception responsable et durable',
            'Évaluation de l\'impact environnemental',
            'Guide de bonnes pratiques RSE',
            'Outils d\'aide à la décision éco-responsable',
        ],
        screenshots: [],
        teamMembers: ['1', '3', '4'],
        createdAt: '2024-12-05T00:00:00Z',
    },
    {
        id: '5',
        title: 'L\'Ergonomie : Simplifier pour Mieux Vivre',
        description:
            'Défi Sopra Steria : créer un champ de saisie volontairement difficile et frustrant à utiliser. Un exercice d\'anti-pattern UX où l\'originalité et la complexité de conception sont récompensées, tout en restant théoriquement utilisable.',
        challenge: 'L\'ergonomie : simplifier pour mieux vivre',
        challengeProvider: 'Sopra Steria',
        technologies: ['TypeScript', 'React', 'Vite', 'Docker'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-nird',
        features: [
            'Champ de saisie intentionnellement complexe',
            'UX frustrante par design',
            'Conception originale et créative',
            'Démonstration des anti-patterns d\'interface',
        ],
        screenshots: [],
        teamMembers: ['2', '5'],
        createdAt: '2024-12-05T00:00:00Z',
    },
];


// Get unique challenges for filtering
export const availableChallenges = Array.from(
    new Set(projects.map((p) => p.challenge))
);

// Get unique technologies for filtering
export const availableTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
).sort();

// Helper function to get team members for a project
export const getProjectTeamMembers = (project: Project): TeamMember[] => {
    return teamMembers.filter((member) => project.teamMembers.includes(member.id));
};

// Helper function to get member by ID
export const getMemberById = (id: string): TeamMember | undefined => {
    return teamMembers.find((member) => member.id === id);
};
