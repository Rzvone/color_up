// components/footer.tsx
'use client';
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-border mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold text-2xl tracking-wide">
                COLOR UP
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformăm frumusețea ta naturală într-o operă de artă. Salonul nostru de înfrumusețare oferă servicii premium pentru păr, unghii și îngrijire facială.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Navigare Rapidă</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Acasă
                </Link>
              </li>
              <li>
                <Link 
                  href="/despre" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicii" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Servicii
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialists */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Specialiștii Noștri</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/felicia" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Felicia
                </Link>
              </li>
              <li>
                <Link 
                  href="/emilia" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Emilia
                </Link>
              </li>
              <li>
                <Link 
                  href="/andreea" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                >
                  Andreea
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary" />
                <span className="text-muted-foreground text-sm">+40 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-secondary" />
                <span className="text-muted-foreground text-sm">contact@colorup.ro</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-secondary" />
                <span className="text-muted-foreground text-sm">Str. Frumuseții Nr. 123, București</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-secondary" />
                <div className="text-muted-foreground text-sm">
                  <div>Lun-Vin: 9:00-19:00</div>
                  <div>Sâm: 9:00-17:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Color Up. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
              >
                Politica de Confidențialitate
              </Link>
              <Link 
                href="#" 
                className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;