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
                {project.demoUrl && (
                    <Button asChild className="flex-1">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Voir le projet
                        </a>
                    </Button>
                )}
                {project.repositoryUrl && (
                    <Button asChild variant={project.demoUrl ? "outline" : "default"} className={project.demoUrl ? "" : "flex-1"}>
                        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            {!project.demoUrl && "Voir sur GitHub"}
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
