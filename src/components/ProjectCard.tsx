import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
            {/* Project Header */}
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                    </CardTitle>
                </div>
                <CardDescription className="text-sm">
                    {project.challengeProvider} • {project.challenge}
                </CardDescription>
            </CardHeader>

            {/* Project Description */}
            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                        </Badge>
                    )}
                </div>
            </CardContent>

            {/* Project Actions */}
            <CardFooter className="flex gap-2">
                <Button asChild className="flex-1" size="sm">
                    <Link to={`/projects/${project.id}`}>
                        Voir le projet
                    </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                    </a>
                </Button>
                {project.demoUrl && (
                    <Button asChild variant="outline" size="sm">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
