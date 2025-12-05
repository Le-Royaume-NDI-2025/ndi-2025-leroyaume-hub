import { Link } from 'react-router-dom';
import { ArrowRight, Users, Rocket, Github, Linkedin, ExternalLink, Crown } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/data/mockData';

export function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section - Full viewport height */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border/40 -mt-16">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent_50%)]" />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <div className="mx-auto max-w-4xl text-center space-y-8 flex flex-col items-center">
                        {/* Crown Icon with glow */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <img 
                                    src="/crown.png" 
                                    alt="Crown" 
                                    className="h-16 w-16 sm:h-20 sm:w-20" 
                                />
                                <div className="absolute inset-0 h-16 w-16 sm:h-20 sm:w-20 opacity-50 blur-xl" />
                            </div>
                        </div>

                        {/* Title */}
                        <SparklesText 
                            className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                            colors={{ first: '#9E7AFF', second: '#FE8BBB' }}
                        >
                            Le Royaume
                        </SparklesText>

                        <p className="text-xl text-muted-foreground sm:text-2xl md:text-3xl">
                            Nuit de l'Info 2025
                        </p>

                        {/* Description */}
                        <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                            Une équipe passionnée, une nuit de création intense. Découvrez nos projets
                            développés lors de la Nuit de l'Info, un hackathon où l'innovation rencontre
                            la technologie.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
                            <Button asChild size="lg" className="group w-full sm:w-auto">
                                <Link to="/projects">
                                    Voir les projets
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                                <a href="#team">Rencontrer l'équipe</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Stats Section */}
            <section className="border-b border-border/40 bg-muted/30">
                <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                        <Card className="border-0 bg-card/50 backdrop-blur">
                            <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                                <Rocket className="h-10 w-10 text-secondary" />
                                <div className="text-4xl font-bold text-foreground">6</div>
                                <div className="text-sm text-muted-foreground">Projets</div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card/50 backdrop-blur">
                            <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                                <Users className="h-10 w-10 text-secondary" />
                                <div className="text-4xl font-bold text-foreground">{teamMembers.length}</div>
                                <div className="text-sm text-muted-foreground">Membres</div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card/50 backdrop-blur">
                            <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                                <Crown className="h-10 w-10 text-secondary" />
                                <div className="text-4xl font-bold text-foreground">1</div>
                                <div className="text-sm text-muted-foreground">Royaume</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl space-y-8 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            À propos de la Nuit de l'Info
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            La Nuit de l'Info est un hackathon national qui rassemble des étudiants passionnés
                            autour de défis technologiques et sociétaux. Durant une nuit, les équipes conçoivent
                            et développent des solutions innovantes qui marient créativité, technique et impact social.
                        </p>
                        <div className="pt-4">
                            <Button asChild variant="default" size="lg">
                                <Link to="/projects">
                                    Découvrir nos réalisations
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-16 md:py-24 border-t border-border/40 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Notre Équipe
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Rencontrez les membres talentueux qui forment Le Royaume
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        {teamMembers.map((member) => (
                            <Card
                                key={member.id}
                                className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
                            >
                                <CardHeader className="text-center space-y-4 pb-4">
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
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {member.name}
                                        </h3>
                                        <Badge variant="secondary">{member.role}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {member.bio && (
                                        <p className="text-sm text-muted-foreground text-center">
                                            {member.bio}
                                        </p>
                                    )}
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
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
