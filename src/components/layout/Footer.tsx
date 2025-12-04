import { Crown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background/95">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand Section */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <Crown className="h-5 w-5 text-secondary" />
                            <span className="text-lg font-bold">Le Royaume</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Nuit de l'Info 2025 - Showcasing innovation through code.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Navigation</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/" className="hover:text-primary transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="hover:text-primary transition-colors">
                                    Projets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold">Suivez-nous</h3>
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/leroyaume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@leroyaume.dev"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Le Royaume. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
