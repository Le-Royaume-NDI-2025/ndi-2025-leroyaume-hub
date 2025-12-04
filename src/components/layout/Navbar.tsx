import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Accueil' },
        { to: '/projects', label: 'Projets' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="relative">
                        <img 
                            src="/crown.png" 
                            alt="Crown" 
                            className="h-6 w-6 transition-transform group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 h-6 w-6 opacity-0 blur-md transition-opacity group-hover:opacity-50" />
                    </div>
                    <span className="text-xl font-bold">
                        Le Royaume
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center space-x-2">
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] p-0">
                            {/* Header */}
                            <div className="flex items-center gap-2 p-6 border-b border-border/50">
                                <img src="/crown.png" alt="Crown" className="h-6 w-6" />
                                <span className="text-lg font-bold">Le Royaume</span>
                            </div>
                            
                            {/* Navigation Links */}
                            <nav className="flex flex-col p-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center px-4 py-3 text-base font-medium text-muted-foreground rounded-lg transition-colors hover:text-foreground hover:bg-muted"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/50">
                                <p className="text-xs text-muted-foreground text-center">
                                    Nuit de l'Info 2025
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
