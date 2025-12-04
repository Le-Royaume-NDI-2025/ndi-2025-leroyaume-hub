// Types for the Le Royaume hackathon website

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  challengeProvider: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  features: string[];
  screenshots: string[];
  teamMembers: string[];
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
}

export interface FilterOptions {
  challenges: string[];
  technologies: string[];
}

export type SortOption = 'name' | 'date' | 'challenge';
