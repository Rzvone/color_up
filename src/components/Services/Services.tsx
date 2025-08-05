"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  Calendar,
  MessageCircle,
  ExternalLink,
  Palette,
  Eye,
  Heart,
  Award,
  CheckCircle,
  Users,
} from "lucide-react";

const ServicesPage = () => {
  const [activeSpecialist, setActiveSpecialist] = useState("all");

  const specialists = [
    {
      id: "felicia",
      name: "Felicia",
      title: "Specialist Manichiură & Pedichiură",
      image: "/images/felicia.jpg",
      gradient: "from-primary to-accent",
      notinoLink:
        "https://www.notino.ro/saloane/unghiutele-feliciei-salon-color-up/",
      whatsappNumber: "+40723456789",
      icon: <Palette className="w-6 h-6" />,
      categories: [
        {
          category: "Manichiură",
          items: [
            {
              name: "Manichiură - ojă clasică",
              description:
                "Manichiura clasica pentru un look elegant și îngrijit.",
              duration: "30m",
              features: [
                "Îngrijire completă",
                "Lac clasic",
                "Finisare perfectă",
                "Look natural",
              ],
            },
            {
              name: "Manichiură uscată cu gel",
              description:
                "Manichiura cu gel pentru durabilitate maximă și strălucire.",
              duration: "2h",
              features: [
                "Durabilitate mare",
                "Strălucire intensă",
                "Rezistență la zgârieturi",
                "Culori vibrante",
              ],
            },
            {
              name: "Manichiură uscată cu ojă semipermanentă",
              description:
                "Manichiura cu oja semi permanenta, cu apex sau fara (în funcție de tipologia unghiilor).",
              duration: "1h 20m",
              features: [
                "Durată lungă",
                "Uscare rapidă",
                "Fără cojire",
                "Aspect profesional",
              ],
            },
            {
              name: "Japanese manicure",
              description:
                "Manichiura japoneza pentru unghii sănătoase și strălucitoare natural.",
              duration: "40m",
              features: [
                "Tehnică tradițională",
                "Întărire naturală",
                "Strălucire naturală",
                "Îngrijire profundă",
              ],
            },
          ],
        },
        {
          category: "Construcție unghii",
          items: [
            {
              name: "Construcție unghii gel",
              description:
                "Modelarea unghiilor cu ajutorul gelului pentru forme perfecte.",
              duration: "1h 50m - 3h",
              features: [
                "Forme personalizate",
                "Durabilitate mare",
                "Aspect natural",
                "Tehnică avansată",
              ],
            },
            {
              name: "Reparare unghie ruptă",
              description: "Repararea rapidă și eficientă a unghiilor rupte.",
              duration: "10m - 20m",
              features: [
                "Reparare rapidă",
                "Aspect natural",
                "Durabilitate",
                "Tehnică profesională",
              ],
            },
            {
              name: "Îndepărtare acrylic",
              description:
                "Îndepărtarea gelului acrilic de pe unghii în siguranță.",
              duration: "20m",
              features: [
                "Îndepărtare sigură",
                "Fără deteriorare",
                "Îngrijire post-tratament",
                "Proces delicat",
              ],
            },
            {
              name: "Îndepărtarea unghiilor – polygel",
              description:
                "Îndepărtarea unghiilor cu polygel este un proces delicat care îndepărtează în siguranță unghiile false.",
              duration: "20m",
              features: [
                "Proces delicat",
                "Protejare unghie naturală",
                "Îngrijire nutritivă",
                "Rezultat sigur",
              ],
            },
            {
              name: "Îndepărtarea unghiilor – hard gel",
              description:
                "Îndepărtare profesională a hard gel-ului cu tehnici avansate.",
              duration: "20m",
              features: [
                "Tehnică profesională",
                "Îndepărtare completă",
                "Îngrijire post-tratament",
                "Siguranță maximă",
              ],
            },
          ],
        },
        {
          category: "Pedichiură femei",
          items: [
            {
              name: "Pedichiură uscată cu ojă",
              description:
                "Tratament pentru picioare cu ajutorul unui dispozitiv profesional, urmat de aplicarea lacului.",
              duration: "30m",
              features: [
                "Tratament profesional",
                "Îngrijire completă",
                "Lac de calitate",
                "Relaxare",
              ],
            },
            {
              name: "Pedichiură umedă și aplicare lac semipermanent",
              description:
                "Tratament pentru tălpi cu baie fierbinte și lac semipermanent.",
              duration: "45m",
              features: [
                "Baie relaxantă",
                "Lac durabil",
                "Îngrijire intensivă",
                "Rezultat de lungă durată",
              ],
            },
            {
              name: "Pedichiură clasică complexă",
              description:
                "Tratament complet pentru picioare cu îngrijire intensivă.",
              duration: "1h",
              features: [
                "Îngrijire completă",
                "Tratament intensiv",
                "Relaxare maximă",
                "Rezultat profesional",
              ],
            },
          ],
        },
        {
          category: "Pedichiură bărbați",
          items: [
            {
              name: "Pedichiură uscată bărbați",
              description:
                "Tratament uscat pentru picioare cu ajutorul unui dispozitiv profesional.",
              duration: "30m",
              features: [
                "Îngrijire masculină",
                "Tratament eficient",
                "Confort maxim",
                "Rezultat natural",
              ],
            },
            {
              name: "Pedichiură clasică complexă",
              description: "Tratament complet adaptat nevoilor masculine.",
              duration: "1h",
              features: [
                "Îngrijire intensivă",
                "Tratament personalizat",
                "Confort și relaxare",
                "Rezultat durabil",
              ],
            },
          ],
        },
        {
          category: "Nail art",
          items: [
            {
              name: "Manichiură French",
              description:
                "Clasica manichiură franceză pentru eleganță atemporală.",
              duration: "10m",
              features: [
                "Stil clasic",
                "Eleganță atemporală",
                "Finisare perfectă",
                "Look sofisticat",
              ],
            },
            {
              name: "Manichiură Baby Boomer",
              description:
                "Tranziție delicată a culorilor individuale de lac de unghii.",
              duration: "15m",
              features: [
                "Tranziție delicată",
                "Gradient perfect",
                "Look modern",
                "Tehnică avansată",
              ],
            },
            {
              name: "Decorarea unghiilor cu pietricele",
              description:
                "Decorarea unghiilor cu pietricele decorative pentru strălucire extra.",
              duration: "5m - 15m",
              features: [
                "Decoruri strălucitoare",
                "Design personalizat",
                "Materiale premium",
                "Creativitate",
              ],
            },
            {
              name: "Decorarea unghiilor cu desen",
              description:
                "Decorarea unghiilor cu ajutorul unui desen de mână artistic.",
              duration: "5m - 15m",
              features: [
                "Art manual",
                "Design unic",
                "Creativitate maximă",
                "Personalizare completă",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "andreea",
      name: "Andreea",
      title: "Specialist Extensii Gene",
      image: "/images/andreea.jpg",
      gradient: "from-secondary to-primary",
      notinoLink:
        "https://www.notino.ro/saloane/glamlash-andreea-chelariu-salon-color-up/",
      whatsappNumber: "+40723456789",
      icon: <Eye className="w-6 h-6" />,
      categories: [
        {
          category: "Gene și sprâncene",
          items: [
            {
              name: "Laminare gene",
              description:
                "Este un tratament de alungire și curbare care face ca genele să pară vizual mai lungi.",
              duration: "1h",
              features: [
                "Curbare naturală",
                "Efect de alungire",
                "Gene mai dense vizual",
                "Rezultat natural",
              ],
            },
          ],
        },
        {
          category: "Extensii de gene",
          items: [
            {
              name: "Set nou extensii gene",
              description:
                "O metodă care constă în completarea firelor individuale de gene cu lipici pe genele dvs.",
              duration: "2h 30m",
              features: [
                "Consultanță personalizată",
                "Gene premium",
                "Aplicare profesională",
                "Look personalizat",
              ],
            },
            {
              name: "Gene cu efect umed (Wet lashes)",
              description:
                "Extensii de gene cu aspect umed și strălucitor pentru un look dramatic și modern.",
              duration: "2h 20m",
              features: [
                "Efect glossy",
                "Look dramatic",
                "Aspect umed",
                "Tehnică avansată",
              ],
            },
            {
              name: "Gene cu efect eyeliner",
              description:
                "Tehnica specială care creează efectul unui eyeliner perfect aplicat, accentuând conturul ochilor.",
              duration: "1h 40m - 2h 20m",
              features: [
                "Contur perfect",
                "Efect eyeliner",
                "Accentuare ochi",
                "Look definit",
              ],
            },
            {
              name: "Gene color",
              description:
                "Extensii de gene colorate pentru un look unic și expresiv, disponibile în diverse nuanțe.",
              duration: "2h 30m",
              features: [
                "Culori vibrante",
                "Look unic",
                "Expresie creativă",
                "Diverse nuanțe",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "emilia",
      name: "Emilia",
      title: "Specialist Construcție Unghii",
      image: "/images/emilia.jpg",
      gradient: "from-accent to-secondary",
      notinoLink: "https://www.notino.ro/saloane/iphemedeea-salon-color-up/",
      whatsappNumber: "+40723456789",
      icon: <Palette className="w-6 h-6" />,
      categories: [
        {
          category: "Manichiură",
          items: [
            {
              name: "Manichiură - ojă clasică",
              description:
                "Aplicarea pe unghii a unui strat de bază, a unui lac de culoare și a unui strat de acoperire.",
              duration: "1h",
              features: [
                "Strat de bază profesional",
                "Lac de culoare premium",
                "Strat de acoperire durabil",
                "Finisare perfectă",
              ],
            },
            {
              name: "Proteză unghie",
              description:
                "Protetica unghiilor înlocuiește plăcile unghiilor, fie o parte a unghiei, fie întreaga suprafață este înlocuită.",
              duration: "15m - 35m",
              features: [
                "Înlocuire parțială sau completă",
                "Aspect natural",
                "Durabilitate mare",
                "Tehnică avansată",
              ],
            },
            {
              name: "Manichiură uscată cu ojă semipermanentă",
              description:
                "Tratament cosmetic pentru unghii și mâini, cu ajutorul unui balsam care contribuie la îndepărtarea cuticulelor, hrănind în același timp unghia.",
              duration: "1h 30m",
              features: [
                "Îngrijire completă cuticulă",
                "Hrănire unghie",
                "Lac semipermanent",
                "Potrivit pentru unghii naturale și false",
              ],
            },
            {
              name: "Protecție unghie naturală",
              description:
                "Tratament special pentru protejarea și întărirea unghiilor naturale.",
              duration: "1h 20m",
              features: [
                "Întărire unghie naturală",
                "Protecție de lungă durată",
                "Aspect sănătos",
                "Prevenire rupere",
              ],
            },
          ],
        },
        {
          category: "Construcție unghii",
          items: [
            {
              name: "Construcție unghii gel",
              description: "Modelarea unghiilor cu ajutorul gelului.",
              duration: "1h 40m - 3h 20m",
              features: [
                "Modelarea cu gel premium",
                "Forme personalizate",
                "Durabilitate excepțională",
                "Aspect natural",
              ],
            },
            {
              name: "Întreținere unghii cu gel",
              description: "Completarea gelului pe unghii.",
              duration: "1h 30m - 2h 10m",
              features: [
                "Completare profesională",
                "Menținerea formei",
                "Rebalansare",
                "Aspect fresh",
              ],
            },
            {
              name: "Demontare gel",
              description: "Îndepărtarea gelului acrilic de pe unghii.",
              duration: "20m",
              features: [
                "Îndepărtare sigură",
                "Fără deteriorare unghie",
                "Proces delicat",
                "Îngrijire post-tratament",
              ],
            },
          ],
        },
        {
          category: "Pedichiură femei",
          items: [
            {
              name: "Pedichiură spa",
              description: "Pedichiura spa fără ojă semipermanentă.",
              duration: "30m",
              features: [
                "Tratament spa relaxant",
                "Îngrijire completă picioare",
                "Hidratare intensivă",
                "Experiență de lux",
              ],
            },
            {
              name: "Pedichiură cu ojă semipermanentă și Spa",
              description:
                "Combinația perfectă între relaxare spa și durabilitatea ojei semipermanente.",
              duration: "1h 20m",
              features: [
                "Tratament spa complet",
                "Ojă semipermanentă",
                "Durabilitate mare",
                "Relaxare maximă",
              ],
            },
          ],
        },
        {
          category: "Nail art",
          items: [
            {
              name: "Manichiură Baby Boomer",
              description:
                "Tranziție delicată a culorilor individuale de lac de unghii.",
              duration: "10m",
              features: [
                "Tranziție delicată",
                "Gradient perfect",
                "Look modern",
                "Tehnică avansată",
              ],
            },
            {
              name: "Manichiură French",
              description:
                "Model French clasic sau French Glass pentru eleganță maximă.",
              duration: "10m - 30m",
              features: [
                "French clasic sau Glass",
                "Eleganță atemporală",
                "Finisare perfectă",
                "Variante multiple",
              ],
            },
            {
              name: "Pictură unghii",
              description:
                "De la picturi simple la complexe, pentru un look unic și personalizat.",
              duration: "10m - 1h",
              features: [
                "Picturi simple, medii sau complexe",
                "Design personalizat",
                "Creativitate maximă",
                "Atenție la detalii",
              ],
            },
          ],
        },
      ],
    },
  ];

  const filteredSpecialists =
    activeSpecialist === "all"
      ? specialists
      : specialists.filter((specialist) => specialist.id === activeSpecialist);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-secondary mb-6">
              <Sparkles size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">
                Servicii Premium
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Serviciile Noastre
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Descoperă gama completă de servicii premium oferite de
              specialiștii noștri. De la extensii de gene la nail art artistic,
              îți oferim tot ce ai nevoie pentru a-ți transforma frumusețea.
            </p>

            {/* Specialist Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button
                onClick={() => setActiveSpecialist("all")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSpecialist === "all"
                    ? "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg"
                    : "bg-card/50 text-foreground hover:bg-muted border border-border"
                }`}
              >
                <Users className="w-4 h-4 inline mr-2" />
                Toate Serviciile
              </button>

              {specialists.map((specialist) => (
                <button
                  key={specialist.id}
                  onClick={() => setActiveSpecialist(specialist.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSpecialist === specialist.id
                      ? "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg"
                      : "bg-card/50 text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {specialist.icon}
                  {specialist.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {filteredSpecialists.map((specialist, specialistIndex) => (
            <div key={specialist.id} className="mb-20">
              {/* Specialist Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 relative overflow-hidden rounded-full mr-6">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      {specialist.name}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {specialist.title}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href={specialist.notinoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-accent to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Calendar size={16} />
                    Rezervă pe Notino
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={`https://wa.me/${specialist.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Service Categories */}
              {specialist.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                    {category.category}
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:scale-105 transition-all duration-300 group h-full flex flex-col relative"
                      >
                        {/* Service Header */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {service.name}
                            </h4>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <Clock size={14} />
                              {service.duration}
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Service Features */}
                        <div className="mt-auto">
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle
                                  size={14}
                                  className="text-secondary flex-shrink-0"
                                />
                                <span className="text-sm text-muted-foreground">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Galeria Noastră
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Admiră câteva dintre lucrările noastre și inspiră-te pentru
              următoarea ta transformare
            </p>
          </div>

          {/* Placeholder for gallery - you can add actual images later */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border border-border/30 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <Sparkles className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Lucrare {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Iată motivele pentru care clientele noastre ne recomandă cu
              încredere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Experiență Profesională
              </h3>
              <p className="text-muted-foreground">
                Specialiștii noștri au ani de experiență și formarea continuă în
                domeniu
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Îngrijire Personalizată
              </h3>
              <p className="text-muted-foreground">
                Fiecare client primește atenție individuală și servicii adaptate
                nevoilor sale
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Produse Premium
              </h3>
              <p className="text-muted-foreground">
                Folosim doar produse de cea mai înaltă calitate pentru rezultate
                durabile
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Rezultate Garantate
              </h3>
              <p className="text-muted-foreground">
                Satisfacția clientelor noastre este prioritatea noastră numărul
                unu
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-12 border border-border/30">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
              <Star className="text-secondary" size={24} />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Rezervă-ți Programarea Astăzi!
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Alege serviciul dorit și rezervă o programare cu specialistul
              preferat. Te așteptăm să-ți oferim o experiență de neuitat!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-accent to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <ArrowRight size={20} />
                Înapoi la Pagina Principală
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border/30 mt-8">
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

export default ServicesPage;
