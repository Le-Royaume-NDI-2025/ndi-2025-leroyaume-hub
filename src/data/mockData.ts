import type { Project, TeamMember } from '../types';

// Mock team members
export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Alice Dubois',
        role: 'Full Stack Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        bio: 'Passionate about creating elegant solutions to complex problems.',
        githubUrl: 'https://github.com/alice',
        portfolioUrl: 'https://alice.dev',
    },
    {
        id: '2',
        name: 'Thomas Martin',
        role: 'Frontend Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
        bio: 'UI/UX enthusiast with a love for React and TypeScript.',
        githubUrl: 'https://github.com/thomas',
    },
    {
        id: '3',
        name: 'Sophie Bernard',
        role: 'Backend Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
        bio: 'Database wizard and API architect.',
        githubUrl: 'https://github.com/sophie',
        linkedinUrl: 'https://linkedin.com/in/sophie',
    },
    {
        id: '4',
        name: 'Lucas Petit',
        role: 'DevOps Engineer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
        bio: 'Automation enthusiast and cloud infrastructure expert.',
        githubUrl: 'https://github.com/lucas',
    },
    {
        id: '5',
        name: 'Emma Laurent',
        role: 'UI/UX Designer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        bio: 'Creating beautiful and accessible user experiences.',
        portfolioUrl: 'https://emma.design',
    },
];

// Mock projects
export const projects: Project[] = [
    {
        id: '1',
        title: 'EcoTracker',
        description:
            'A web application to track and reduce carbon footprint. Users can log their daily activities and receive personalized recommendations for a more sustainable lifestyle.',
        challenge: 'Sustainability Challenge',
        challengeProvider: 'Green Tech Foundation',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
        repositoryUrl: 'https://github.com/leroyaume/ecotracker',
        demoUrl: 'https://ecotracker.demo.com',
        features: [
            'Real-time carbon footprint calculation',
            'Personalized sustainability tips',
            'Community challenges and leaderboards',
            'Integration with smart home devices',
        ],
        screenshots: [
            'https://placehold.co/800x600/1e3a8a/fbbf24?text=Dashboard',
            'https://placehold.co/800x600/1e40af/f59e0b?text=Analytics',
            'https://placehold.co/800x600/1e3a8a/fbbf24?text=Community',
        ],
        teamMembers: ['1', '2', '3'],
        createdAt: '2024-12-04T00:00:00Z',
    },
    {
        id: '2',
        title: 'MediConnect',
        description:
            'Healthcare platform connecting patients with doctors for virtual consultations. Features include appointment scheduling, prescription management, and health records.',
        challenge: 'Healthcare Innovation',
        challengeProvider: 'Health Ministry',
        technologies: ['Vue.js', 'Firebase', 'WebRTC', 'TailwindCSS'],
        repositoryUrl: 'https://github.com/leroyaume/mediconnect',
        documentationUrl: 'https://docs.mediconnect.com',
        features: [
            'Video consultation with end-to-end encryption',
            'Electronic health records management',
            'Automated appointment reminders',
            'Multi-language support',
        ],
        screenshots: [
            'https://placehold.co/800x600/1e40af/fbbf24?text=Consultations',
            'https://placehold.co/800x600/1e3a8a/f59e0b?text=Records',
        ],
        teamMembers: ['1', '4', '5'],
        createdAt: '2024-12-03T00:00:00Z',
    },
    {
        id: '3',
        title: 'CodeMentor AI',
        description:
            'AI-powered coding assistant that helps students learn programming through interactive tutorials and real-time code review.',
        challenge: 'Education & AI',
        challengeProvider: 'EdTech Alliance',
        technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'Docker'],
        repositoryUrl: 'https://github.com/leroyaume/codementor-ai',
        demoUrl: 'https://codementor-ai.demo.com',
        documentationUrl: 'https://docs.codementor-ai.com',
        features: [
            'AI-powered code suggestions',
            'Interactive coding challenges',
            'Progress tracking and analytics',
            'Peer code review system',
        ],
        screenshots: [
            'https://placehold.co/800x600/1e3a8a/fbbf24?text=Code+Editor',
            'https://placehold.co/800x600/1e40af/f59e0b?text=AI+Assistant',
            'https://placehold.co/800x600/1e3a8a/fbbf24?text=Progress',
        ],
        teamMembers: ['2', '3', '4'],
        createdAt: '2024-12-04T12:00:00Z',
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
