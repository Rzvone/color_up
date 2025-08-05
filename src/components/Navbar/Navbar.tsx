'use client';
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border shadow-sm sticky top-0 z-50">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex h-20 flex-row justify-between items-center px-8">
        {/* Left Navigation Links */}
        <div className="flex flex-row justify-between items-center h-full gap-8">
          <Link
            href="/"
            className="text-foreground hover:text-secondary transition-all duration-200 font-medium relative group"
          >
            Acasa
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/despre"
            className="text-foreground hover:text-secondary transition-all duration-200 font-medium relative group"
          >
            Despre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/servicii"
            className="text-foreground hover:text-secondary transition-all duration-200 font-medium relative group"
          >
            Servicii
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Center Logo - Gradient Colors */}
        <Link
          href="/"
          className="flex items-center h-full px-24 font-bold text-2xl tracking-wide"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            COLOR UP
          </span>
        </Link>

        {/* Right Navigation Links */}
        <div className="flex flex-row justify-between items-center h-full gap-8">
          <Link
            href="/felicia"
            className="text-foreground hover:text-secondary transition-all duration-200 font-medium relative group"
          >
            Felicia
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/emilia"
            className="text-foreground hover:text-secondary transition-all duration-200 font-medium relative group"
          >
            Emilia
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/andreea"
            className="text-foreground hover:text-secondary transition-all duration-200 font-medium relative group"
          >
            Andreea
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <div className="ml-4 pl-4 border-l border-border">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex h-16 justify-between items-center px-4">
        <Link
          href="/"
          className="font-bold text-xl"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            COLOR UP
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-secondary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Acasa
            </Link>
            <Link
              href="/despre"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Despre
            </Link>
            <Link
              href="/servicii"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicii
            </Link>
            <hr className="border-border" />
            <Link
              href="/felicia"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Felicia
            </Link>
            <Link
              href="/emilia"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Emilia
            </Link>
            <Link
              href="/andreea"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Andreea
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;