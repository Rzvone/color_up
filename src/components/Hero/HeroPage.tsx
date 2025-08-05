"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Award,
  Calendar,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const HeroPage = () => {
  const specialists = [
    {
      name: "Felicia",
      title: "Specialist Manichiură & Pedichiură",
      image: "/images/felicia.jpg",
      gradient: "from-primary to-accent",
      notinoLink:
        "https://www.notino.ro/saloane/unghiutele-feliciei-salon-color-up/",
      profileLink: "/felicia",
    },
    {
      name: "Emilia",
      title: "Specialist Construcție Unghii",
      image: "/images/emilia.jpg",
      gradient: "from-accent to-secondary",
      notinoLink: "https://www.notino.ro/saloane/iphemedeea-salon-color-up/",
      profileLink: "/emilia",
    },
    {
      name: "Andreea",
      title: "Specialist Extensii Gene",
      image: "/images/andreea.jpg",
      gradient: "from-secondary to-primary",
      notinoLink:
        "https://www.notino.ro/saloane/glamlash-andreea-chelariu-salon-color-up/",
      profileLink: "/andreea",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/30">
      {/* Main Hero Section */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>

        <div className="relative max-w-7xl mx-auto px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-secondary">
                  <Sparkles size={24} />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Salon de Înfrumusețare Premium
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    COLOR UP
                  </span>
                  <br />
                  <span className="text-foreground">Your Beauty</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Transformăm frumusețea ta naturală într-o operă de artă.
                  Descoperă servicii premium pentru păr, unghii și îngrijire
                  facială într-un ambient elegant și relaxant.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/servicii"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  draggable={false}
                >
                  Descoperă Serviciile
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/despre"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-muted hover:scale-105 transition-all duration-300"
                  draggable={false}
                >
                  Despre Noi
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Clienți Mulțumiți
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <div className="text-sm text-muted-foreground">
                    Specialiști Expert
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Ani Experiență
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-border/30">
                <div className="space-y-6">
                  {/* Feature Cards */}
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <Sparkles className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Servicii Premium
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Manichiură, pedichiură și extensii gene
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Echipă Profesionistă
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Felicia, Emilia și Andreea
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Calitate Garantată
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Produse premium și tehnici moderne
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Preview Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Întâlnește Echipa Noastră
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialiștii noștri pasionați sunt aici pentru a-ți oferi cele mai
              bune servicii de înfrumusețare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30 text-center hover:scale-105 transition-all duration-300 group h-full flex flex-col"
              >
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-6 relative overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  {/* Fallback gradient circle if image fails to load */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${specialist.gradient} flex items-center justify-center text-white font-bold text-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  >
                    {specialist.name.charAt(0)}
                  </div>
                </div>

                {/* Content - Fixed height container */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {specialist.name}
                  </h3>

                  {/* Title with fixed height to ensure alignment */}
                  <div className="h-12 flex items-center justify-center mb-6">
                    <p className="text-muted-foreground text-center leading-tight">
                      {specialist.title}
                    </p>
                  </div>

                  {/* Booking Options - Always at bottom */}
                  <div className="space-y-3 mt-auto">
                    <a
                      href={specialist.notinoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary via-accent to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                      draggable={false}
                    >
                      <Calendar size={16} />
                      Rezervă pe Notino
                      <ExternalLink size={14} />
                    </a>

                    <div className="flex gap-2">
                      <Link
                        href={specialist.profileLink}
                        className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-4 py-2 rounded-full font-medium hover:bg-muted transition-all duration-300 text-sm"
                        draggable={false}
                      >
                        Vezi Serviciile
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href="https://wa.me/40123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition-all duration-300 text-sm"
                        draggable={false}
                      >
                        <MessageCircle size={14} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Methods Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Cum Poți Rezerva
            </h2>
            <p className="text-muted-foreground text-lg">
              Alege metoda care ți se potrivește cel mai bine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Notino Booking */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-border/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Rezervare Online
              </h3>
              <p className="text-muted-foreground mb-6">
                Rezervă rapid și ușor prin platforma Notino. Alege specialistul
                preferat și ora dorită.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Disponibilitate în timp real</p>
                <p>✓ Confirmare instantanee</p>
                <p>✓ Plată securizată</p>
              </div>
            </div>

            {/* WhatsApp Booking */}
            <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Contactează-ne direct pe WhatsApp pentru programări
                personalizate și întrebări.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Răspuns rapid</p>
                <p>✓ Consultanță personalizată</p>
                <p>✓ Flexibilitate maximă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified without booking buttons */}
      <section className="py-20 bg-muted/20 mb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 border border-border/30">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Gata să-ți Transformi Frumusețea?
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Rezervă o programare astăzi și descoperă de ce suntem salonul
              preferat al clientelor noastre. Te așteptăm cu servicii de
              calitate superioară!
            </p>

            {/* Contact Info Only */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-foreground">Adresă:</span>{" "}
                Str. Frumuseții Nr. 123, București
                <br />
                <span className="font-semibold text-foreground">
                  Program:
                </span>{" "}
                Lun-Vin: 9:00-19:00 | Sâm: 9:00-17:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
