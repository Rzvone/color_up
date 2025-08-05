import React from 'react'
import { Clock, Sparkles } from 'lucide-react'

const ListaPreturiFelicia = () => {
  const services = [
    {
      category: "Manichiură",
      items: [
        {
          name: "Manichiură - ojă clasică",
          description: "Manichiura clasica",
          price: "70 RON",
          duration: "30m"
        },
        {
          name: "Manichiură uscată cu gel",
          description: "Manichiura cu gel",
          price: "120 RON",
          duration: "2h"
        },
        {
          name: "Manichiură uscată cu ojă semipermanentă",
          description: "Manichiura cu oja semi permanenta, cu apex sau fara (in funcție de tipologia unghiilor).",
          price: "105 RON",
          duration: "1h 20m"
        },
        {
          name: "Japanese manicure",
          description: "Manichiura japoneza",
          price: "80 RON",
          duration: "40m"
        }
      ]
    },
    {
      category: "Construcție unghii",
      items: [
        {
          name: "Construcție unghii gel",
          description: "Modelarea unghiilor cu ajutorul gelului.",
          price: "160 - 500 RON",
          duration: "1h 50m - 3h"
        },
        {
          name: "Reparare unghie ruptă",
          description: "",
          price: "10 - 40 RON",
          duration: "10m - 20m"
        },
        {
          name: "Îndepărtare acrylic",
          description: "Îndepărtarea gelului acrilic de pe unghii.",
          price: "40 RON",
          duration: "20m"
        },
        {
          name: "Îndepărtarea unghiilor – polygel",
          description: "Îndepărtarea unghiilor cu polygel este un proces delicat care îndepărtează în siguranță unghiile false, fără a vă deteriora unghiile naturale. Procedura începe prin pilirea delicată a stratului de suprafață al polygelului, pentru a-i altera textura. Ulterior, unghiile sunt înmuiate într-o soluție specială care dizolvă materialul rămas, după care unghiile sunt pilite ușor și netezite pentru a le menține netede și sănătoase. La final, se aplică de regulă un ulei nutritiv și o cremă hidratantă.",
          price: "40 RON",
          duration: "20m"
        },
        {
          name: "Îndepărtarea unghiilor – hard gel",
          description: "În timpul îndepărtării unghiilor artificiale, se pilește mai întâi stratul superior de gel. Apoi se aplică pe fiecare unghie dischete îmbibate în acetonă, pentru a dizolva stratul de gel. După 15 minute, materialul rămas se șterge sau se pilește cu grijă. Cu toate acestea, procedura de îndepărtare poate varia în unele cazuri.",
          price: "40 RON",
          duration: "20m"
        }
      ]
    },
    {
      category: "Pedichiură femei",
      items: [
        {
          name: "Pedichiură uscată cu ojă",
          description: "Tratament pentru picioare cu ajutorul unui dispozitiv profesional, urmat de aplicarea lacului de unghii.",
          price: "85 RON",
          duration: "30m"
        },
        {
          name: "Pedichiură umedă și aplicare lac semipermanent",
          description: "Tratament pentru tălpi, care sunt mai întâi cufundate într-o baie fierbinte. Acesta include și aplicarea unui lac de unghii, care rezistă câteva săptămâni.",
          price: "105 - 140 RON",
          duration: "45m"
        },
        {
          name: "Pedichiură clasică complexă",
          description: "",
          price: "120 RON",
          duration: "1h"
        }
      ]
    },
    {
      category: "Pedichiură bărbați",
      items: [
        {
          name: "Pedichiură uscată bărbați",
          description: "Tratament uscat pentru picioare cu ajutorul unui dispozitiv profesional.",
          price: "85 RON",
          duration: "30m"
        },
        {
          name: "Pedichiură clasică complexă",
          description: "",
          price: "120 RON",
          duration: "1h"
        }
      ]
    },
    {
      category: "Nail art",
      items: [
        {
          name: "Manichiură French",
          description: "",
          price: "30 RON",
          duration: "10m"
        },
        {
          name: "Manichiură Baby Boomer",
          description: "Tranziție delicată a culorilor individuale de lac de unghii",
          price: "30 RON",
          duration: "15m"
        },
        {
          name: "Decorarea unghiilor cu pietricele",
          description: "Decorarea unghiilor cu pietricele decorative.",
          price: "10 - 50 RON",
          duration: "5m - 15m"
        },
        {
          name: "Decorarea unghiilor cu desen",
          description: "Decorarea unghiilor cu ajutorul unui desen de mână.",
          price: "10 - 50 RON",
          duration: "5m - 15m"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-8 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-secondary" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Lista de Prețuri
            </h1>
            <Sparkles className="text-secondary" size={32} />
          </div>
          <p className="text-xl text-muted-foreground font-medium">Felicia</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 px-8 py-6 border-b border-border/30">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>
                  {category.category}
                </h2>
              </div>

              {/* Services List */}
              <div className="p-8">
                <div className="space-y-6">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group hover:bg-muted/30 rounded-xl p-6 transition-all duration-300 border border-transparent hover:border-border/50">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        {/* Service Info */}
                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors duration-200">
                            {service.name}
                          </h3>
                          {service.description && (
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {service.description}
                            </p>
                          )}
                        </div>

                        {/* Price and Duration */}
                        <div className="flex flex-col lg:items-end gap-2 lg:min-w-[200px]">
                          <div className="flex items-center gap-2 text-lg font-bold text-secondary">
                            <span>{service.price}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock size={16} />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6">
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold text-foreground">Notă:</span> Prețurile pot varia în funcție de complexitatea serviciului. 
              Pentru programări și informații suplimentare, vă rugăm să ne contactați.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListaPreturiFelicia