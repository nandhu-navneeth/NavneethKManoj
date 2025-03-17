import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <motion.a 
            className="flex items-center gap-2 text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-10 h-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-xl transform rotate-3 transition-transform group-hover:rotate-6" />
              <div className="absolute inset-0.5 bg-background rounded-lg flex items-center justify-center text-primary font-bold">
                NKM
              </div>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Navneeth K Manoj
            </span>
          </motion.a>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/navneeth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/navneeth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}