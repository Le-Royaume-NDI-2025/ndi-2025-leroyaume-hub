import { useState, useMemo } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, availableChallenges, availableTechnologies } from '@/data/mockData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import type { SortOption } from '@/types';

export function ProjectsPage() {
    const [selectedChallenge, setSelectedChallenge] = useState<string>('all');
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>('date');

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = [...projects];

        // Filter by challenge
        if (selectedChallenge !== 'all') {
            filtered = filtered.filter((p) => p.challenge === selectedChallenge);
        }

        // Filter by technologies
        if (selectedTechs.length > 0) {
            filtered = filtered.filter((p) =>
                selectedTechs.every((tech) => p.technologies.includes(tech))
            );
        }

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'date':
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case 'challenge':
                    return a.challenge.localeCompare(b.challenge);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [selectedChallenge, selectedTechs, sortBy]);

    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        );
    };

    const clearFilters = () => {
        setSelectedChallenge('all');
        setSelectedTechs([]);
    };

    return (
        <div className="container py-12">
            {/* Header */}
            <div className="mb-12 space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Nos Projets
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Découvrez les projets développés par notre équipe durant la Nuit de l'Info
                </p>
            </div>

            {/* Filters & Sort */}
            <div className="mb-8 space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Challenge Filter */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium">Challenge:</span>
                        <Select value={selectedChallenge} onValueChange={setSelectedChallenge}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Tous" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Tous les challenges</SelectItem>
                                {availableChallenges.map((challenge) => (
                                    <SelectItem key={challenge} value={challenge}>
                                        {challenge}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">Trier par:</span>
                        <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">Date</SelectItem>
                                <SelectItem value="name">Nom</SelectItem>
                                <SelectItem value="challenge">Challenge</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Technology Filter */}
                <div className="space-y-2">
                    <span className="text-sm font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-2">
                        {availableTechnologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant={selectedTechs.includes(tech) ? 'default' : 'outline'}
                                className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                                onClick={() => toggleTech(tech)}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Active Filters */}
                {(selectedChallenge !== 'all' || selectedTechs.length > 0) && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Filtres actifs:</span>
                        {selectedChallenge !== 'all' && (
                            <Badge variant="secondary" className="gap-1">
                                {selectedChallenge}
                                <X
                                    className="h-3 w-3 cursor-pointer"
                                    onClick={() => setSelectedChallenge('all')}
                                />
                            </Badge>
                        )}
                        {selectedTechs.map((tech) => (
                            <Badge key={tech} variant="secondary" className="gap-1">
                                {tech}
                                <X
                                    className="h-3 w-3 cursor-pointer"
                                    onClick={() => toggleTech(tech)}
                                />
                            </Badge>
                        ))}
                        <button
                            onClick={clearFilters}
                            className="text-sm text-muted-foreground hover:text-foreground underline"
                        >
                            Tout effacer
                        </button>
                    </div>
                )}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="py-12 text-center">
                    <p className="text-lg text-muted-foreground">
                        Aucun projet ne correspond aux filtres sélectionnés.
                    </p>
                </div>
            )}
        </div>
    );
}
