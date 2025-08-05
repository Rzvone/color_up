import React from 'react'
import { Clock, Sparkles } from 'lucide-react'

const ListaPreturiEmilia = () => {
  const services = [
    {
      category: "Manichiură",
      items: [
        {
          name: "Manichiură - ojă clasică",
          description: "Aplicarea pe unghii a unui strat de bază, a unui lac de culoare și a unui strat de acoperire.",
          price: "70 RON",
          duration: "1h"
        },
        {
          name: "Proteză unghie",
          description: "Protetica unghiilor înlocuiește plăcile unghiilor, fie o parte a unghiei, fie întreaga suprafață este înlocuită.",
          price: "5 - 40 RON",
          duration: "15m - 35m"
        },
        {
          name: "Manichiură uscată cu ojă semipermanentă",
          description: "Tratament cosmetic pentru unghii și mâini, cu ajutorul unui balsam care contribuie la îndepărtarea cuticulelor, hrănind în același timp unghia. Apoi, pe unghii se aplică un lac semipermanent, care este potrivit atât pentru unghiile naturale, cât și pentru cele false.",
          price: "110 RON",
          duration: "1h 30m"
        },
        {
          name: "Protecție unghie naturală",
          description: "",
          price: "120 RON",
          duration: "1h 20m"
        }
      ]
    },
    {
      category: "Construcție unghii",
      items: [
        {
          name: "Construcție unghii gel",
          description: "Modelarea unghiilor cu ajutorul gelului.",
          price: "130 - 300 RON",
          duration: "1h 40m - 3h 20m"
        },
        {
          name: "Întreținere unghii cu gel",
          description: "Completarea gelului pe unghii.",
          price: "110 - 250 RON",
          duration: "1h 30m - 2h 10m"
        },
        {
          name: "Demontare gel",
          description: "Îndepărtarea gelului acrilic de pe unghii.",
          price: "40 RON",
          duration: "20m"
        }
      ]
    },
    {
      category: "Pedichiură femei",
      items: [
        {
          name: "Pedichiură spa",
          description: "Pedichiura spa fara oja semipermanenta.",
          price: "85 RON",
          duration: "30m"
        },
        {
          name: "Pedichiură cu ojă semipermanentă și Spa",
          description: "",
          price: "120 RON",
          duration: "1h 20m"
        }
      ]
    },
    {
      category: "Nail art",
      items: [
        {
          name: "Manichiură Baby Boomer",
          description: "Tranziție delicată a culorilor individuale de lac de unghii",
          price: "15 RON",
          duration: "10m"
        },
        {
          name: "Manichiură French",
          description: "Model French + 15 Ron | Model French Glass + 25 Ron",
          price: "15 - 25 RON",
          duration: "10m - 30m"
        },
        {
          name: "Pictură unghii",
          description: "Picturi simple 5-15 lei | Picturi medii 15-30 lei | Picturi complexe 30-50 lei",
          price: "5 - 50 RON",
          duration: "10m - 1h"
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
          <p className="text-xl text-muted-foreground font-medium">Emilia</p>
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

export default ListaPreturiEmilia