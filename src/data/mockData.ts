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
    },
    {
        id: '2',
        name: 'Damien Mathieu',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/damienmathieu.jpeg',
        bio: 'Étudiant à Polytech Montpellier, spécialisé dans l\'infrastructure et le CI/CD.',
        githubUrl: 'https://github.com/damien-mathieu1',
    },
    {
        id: '3',
        name: 'Evan Paillard',
        role: 'Apprenti Ingénieur DevOps',
        avatar: '/images/team/evanpaillard.jpeg',
        bio: 'Étudiant à Polytech Montpellier, expert en conteneurisation et orchestration.',
        githubUrl: 'https://github.com/evan-paillard',
    },
];

// Projects - Défis NDI 2025
export const projects: Project[] = [
    {
        id: '1',
        title: 'L\'ergonomie : simplifier pour mieux vivre',
        description:
            'Défi proposé par Sopra Steria axé sur l\'amélioration de l\'ergonomie et de l\'expérience utilisateur pour simplifier le quotidien.',
        challenge: 'L\'ergonomie : simplifier pour mieux vivre',
        challengeProvider: 'Sopra Steria',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        features: [
            'Interface utilisateur intuitive',
            'Accessibilité optimisée',
            'Design centré utilisateur',
        ],
        screenshots: [],
        teamMembers: ['1', '2', '3'],
        createdAt: '2025-12-05T00:00:00Z',
    },
    {
        id: '2',
        title: 'La Carte des Talents',
        description:
            'Défi proposé par le CESI de Saint-Nazaire pour créer une carte interactive mettant en valeur les talents et compétences.',
        challenge: 'La Carte des Talents',
        challengeProvider: 'CESI de Saint-Nazaire',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-talent-map',
        features: [
            'Carte interactive des talents',
            'Visualisation des compétences',
            'Mise en réseau des profils',
        ],
        screenshots: [],
        teamMembers: ['1', '2', '3'],
        createdAt: '2025-12-05T00:00:00Z',
    },
    {
        id: '3',
        title: 'La Ligue des Extensions',
        description:
            'Défi NEVERHACK : "Manifestement à jour, open source et utile" - Création d\'une extension navigateur éco-responsable.',
        challenge: 'La Ligue des Extensions : Manifestement à jour, open source et utile',
        challengeProvider: 'NEVERHACK',
        technologies: ['JavaScript', 'Browser Extension', 'Open Source'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-extension-ecosearch',
        features: [
            'Extension open source',
            'Recherche éco-responsable',
            'Interface utilisateur moderne',
        ],
        screenshots: [],
        teamMembers: ['1', '2', '3'],
        createdAt: '2025-12-05T00:00:00Z',
    },
    {
        id: '4',
        title: 'RSE by Design',
        description:
            'Défi proposé par NUMIH France pour intégrer la Responsabilité Sociétale des Entreprises dès la conception des projets.',
        challenge: 'RSE by design',
        challengeProvider: 'NUMIH France',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        repositoryUrl: 'https://github.com/Le-Royaume-NDI-2025/ndi-2025-leroyaume-extension-ecosearch-frontend',
        features: [
            'Conception responsable',
            'Impact environnemental réduit',
            'Bonnes pratiques RSE',
        ],
        screenshots: [],
        teamMembers: ['1', '2', '3'],
        createdAt: '2025-12-05T00:00:00Z',
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
