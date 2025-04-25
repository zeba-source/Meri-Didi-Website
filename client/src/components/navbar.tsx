import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                  <svg 
                    width="30" 
                    height="30" 
                    viewBox="0 0 50 50" 
                    className="text-primary-foreground"
                  >
                    {/* Animated 3D maid character */}
                    <defs>
                      <linearGradient id="apron-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="#f0f0f0" />
                      </linearGradient>
                      <linearGradient id="face-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffe0bd" />
                        <stop offset="100%" stopColor="#ffcd94" />
                      </linearGradient>
                      <linearGradient id="dress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#444" />
                        <stop offset="100%" stopColor="#222" />
                      </linearGradient>
                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
                      </filter>
                    </defs>
                    
                    {/* Dress base */}
                    <path d="M15 20 L15 42 L35 42 L35 20 Z" fill="url(#dress-gradient)" />
                    
                    {/* Apron */}
                    <path d="M17 22 L33 22 L33 40 L17 40 Z" fill="url(#apron-gradient)" filter="url(#shadow)" />
                    <path d="M20 22 L20 16 L23 13 L27 13 L30 16 L30 22" fill="none" stroke="url(#apron-gradient)" strokeWidth="1.5" />
                    
                    {/* Head/face */}
                    <circle cx="25" cy="13" r="7" fill="url(#face-gradient)" filter="url(#shadow)" />
                    
                    {/* Hair with highlights */}
                    <path d="M18 13 Q18 7, 25 6 Q32 7, 32 13" fill="#543" filter="url(#shadow)" />
                    <path d="M20 13 Q20 9, 25 8 Q30 9, 30 13" fill="#764" filter="url(#shadow)" />
                    
                    {/* Eyes */}
                    <ellipse cx="22" cy="12" rx="1" ry="1.5" fill="#333" />
                    <ellipse cx="28" cy="12" rx="1" ry="1.5" fill="#333" />
                    
                    {/* Smile */}
                    <path d="M23 15 Q25 17, 27 15" fill="none" stroke="#333" strokeWidth="0.7" />
                  </svg>
                </div>
                <span className="text-xl font-heading font-bold text-neutral-900">Meri Didi</span>
              </a>
            </Link>

            <div className="hidden md:flex md:ml-10 space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                Features
              </a>
              <a href="#how-it-works" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                How It Works
              </a>
              <a href="#testimonials" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                Testimonials
              </a>
              <a href="#security" className="text-neutral-600 hover:text-neutral-900 hover:border-b-2 hover:border-primary px-3 py-2 text-sm font-medium transition-all">
                Security
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-neutral-700 hover:text-neutral-900">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">EN</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} className="cursor-pointer">
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
              onClick={() => window.location.href = "/register-worker"}
            >
              Register as Worker
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden bg-neutral-100 p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="text-neutral-700" /> : <Menu className="text-neutral-700" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              How It Works
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              Testimonials
            </a>
            <a href="#security" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50">
              Security
            </a>
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <a href="/register-worker" className="block px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                Register as Worker
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
