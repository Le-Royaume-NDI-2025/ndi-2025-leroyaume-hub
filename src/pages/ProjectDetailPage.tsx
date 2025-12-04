import { useParams, Link, Navigate } from 'react-router-dom';
import { ExternalLink, Github, FileText, ChevronLeft } from 'lucide-react';
import { projects, getProjectTeamMembers } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export function ProjectDetailPage() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const teamMembers = getProjectTeamMembers(project);

    return (
        <div className="container py-8">
            {/* Breadcrumb */}
            <div className="mb-6">
                <Button asChild variant="ghost" size="sm">
                    <Link to="/projects">
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Retour aux projets
                    </Link>
                </Button>
            </div>

            {/* Header */}
            <div className="mb-8 space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
                        <p className="text-lg text-muted-foreground">
                            {project.challengeProvider} • {project.challenge}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {project.demoUrl && (
                            <Button asChild>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Démo
                                </a>
                            </Button>
                        )}
                        <Button asChild variant="outline">
                            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Repository
                            </a>
                        </Button>
                        {project.documentationUrl && (
                            <Button asChild variant="outline">
                                <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer">
                                    <FileText className="mr-2 h-4 w-4" />
                                    Docs
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <Separator className="mb-8" />

            {/* Content Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="overview">Aperçu</TabsTrigger>
                    <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
                    {project.screenshots.length > 0 && (
                        <TabsTrigger value="screenshots">Captures</TabsTrigger>
                    )}
                    <TabsTrigger value="team">Équipe</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="mb-4 text-2xl font-semibold">Description</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="mb-4 text-2xl font-semibold">Fonctionnalités principales</h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                            {index + 1}
                                        </span>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Screenshots Tab */}
                {project.screenshots.length > 0 && (
                    <TabsContent value="screenshots" className="space-y-4">
                        <Card>
                            <CardContent className="pt-6">
                                <Carousel className="mx-auto max-w-3xl">
                                    <CarouselContent>
                                        {project.screenshots.map((screenshot, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <img
                                                        src={screenshot}
                                                        alt={`Screenshot ${index + 1}`}
                                                        className="w-full rounded-lg border border-border"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </CardContent>
                        </Card>
                    </TabsContent>
                )}

                {/* Team Tab */}
                <TabsContent value="team" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="mb-4 text-2xl font-semibold">Membres de l'équipe</h2>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {teamMembers.map((member) => (
                                    <Link
                                        key={member.id}
                                        to="/team"
                                        className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                                    >
                                        <Avatar>
                                            <AvatarImage src={member.avatar} alt={member.name} />
                                            <AvatarFallback>
                                                {member.name
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium truncate">{member.name}</p>
                                            <p className="text-sm text-muted-foreground truncate">{member.role}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
