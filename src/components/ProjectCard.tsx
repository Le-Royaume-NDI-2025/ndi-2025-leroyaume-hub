import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-xl hover:border-primary/50 h-full">
            {/* Project Header */}
            <CardHeader className="pb-4">
                <div className="space-y-2">
                    <Badge variant="outline" className="text-xs w-fit">
                        {project.challengeProvider}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                    </CardTitle>
                </div>
            </CardHeader>

            {/* Project Description */}
            <CardContent className="flex-1 space-y-6">
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
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
            <CardFooter className="flex gap-3 pt-6 border-t border-border/50">
                <Button asChild className="flex-1">
                    <Link to={`/projects/${project.id}`}>
                        Voir le projet
                    </Link>
                </Button>
                {project.repositoryUrl && (
                    <Button asChild variant="outline" size="icon">
                        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                        </a>
                    </Button>
                )}
                {project.demoUrl && (
                    <Button asChild variant="outline" size="icon">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
