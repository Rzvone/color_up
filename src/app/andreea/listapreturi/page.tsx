import React from 'react'
import { Clock, Sparkles, Eye } from 'lucide-react'
export const servicesAndreea = [
  {
    category: "Gene și sprâncene",
    items: [
      {
        name: "Laminare gene",
        description: "Este un tratament de alungire și curbare care face ca genele să pară vizual mai lungi.",
        price: "180 RON",
        duration: "1h"
      }
    ]
  },
  {
    category: "Extensii de gene",
    items: [
      {
        name: "Set nou extensii gene",
        description: "O metodă care constă în completarea firelor individuale de gene cu lipici pe genele dvs.",
        price: "150 - 350 RON",
        duration: "2h 30m"
      },
      {
        name: "Gene cu efect umed (Wet lashes)",
        description: "Extensii de gene cu aspect umed și strălucitor pentru un look dramatic și modern.",
        price: "200 - 400 RON",
        duration: "2h 20m"
      },
      {
        name: "Gene cu efect eyeliner",
        description: "Tehnica specială care creează efectul unui eyeliner perfect aplicat, accentuând conturul ochilor.",
        price: "200 - 400 RON",
        duration: "1h 40m - 2h 20m"
      },
      {
        name: "Gene color",
        description: "Extensii de gene colorate pentru un look unic și expresiv, disponibile în diverse nuanțe.",
        price: "230 RON",
        duration: "2h 30m"
      }
    ]
  }
]

const ListaPreturiAndreea = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-8 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Eye className="text-secondary" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Lista de Prețuri
            </h1>
            <Eye className="text-secondary" size={32} />
          </div>
          <p className="text-xl text-muted-foreground font-medium">Andreea</p>
          <p className="text-sm text-muted-foreground mt-2">Specialist în extensii de gene și tratamente pentru ochi</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {servicesAndreea.map((category, categoryIndex) => (
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

        {/* Specialty Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-secondary" size={20} />
              <h3 className="font-semibold text-foreground">Servicii Premium</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Andreea este specializată în tehnici avansate de extensii de gene, oferind rezultate de lungă durată și aspect natural.
            </p>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-secondary" size={20} />
              <h3 className="font-semibold text-foreground">Consultanță Personalizată</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Fiecare tratament este adaptat formei ochilor și preferințelor clientei pentru rezultate perfecte.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 p-6">
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold text-foreground">Notă:</span> Prețurile variază în funcție de tipul și densitatea extensiilor alese. 
              Consultația inițială este gratuită pentru a determina cea mai potrivită tehnică pentru dvs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListaPreturiAndreea