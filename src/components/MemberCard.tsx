import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { TeamMember } from '@/types';

interface MemberCardProps {
    member: TeamMember;
}

export function MemberCard({ member }: MemberCardProps) {
    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
            <CardHeader className="text-center space-y-4 pb-4">
                {/* Avatar */}
                <div className="mx-auto">
                    <Avatar className="h-24 w-24 border-2 border-border transition-all group-hover:border-primary">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-lg">
                            {member.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                        </AvatarFallback>
                    </Avatar>
                </div>

                {/* Name and Role */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {member.name}
                    </h3>
                    <Badge variant="secondary">{member.role}</Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Bio */}
                {member.bio && (
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                )}

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                    {member.githubUrl && (
                        <Button asChild variant="outline" size="icon">
                            <a
                                href={member.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} GitHub`}
                            >
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
                    {member.linkedinUrl && (
                        <Button asChild variant="outline" size="icon">
                            <a
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} LinkedIn`}
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
                    {member.portfolioUrl && (
                        <Button asChild variant="outline" size="icon">
                            <a
                                href={member.portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} Portfolio`}
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
