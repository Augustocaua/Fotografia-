import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Camera, Heart, Image } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Essencial",
      icon: Camera,
      price: "A partir de R$ 2.500",
      description: "Perfeito para cerimônias intimistas",
      features: [
        "4 horas de cobertura",
        "200+ fotos editadas",
        "Álbum digital",
        "Entrega em 30 dias",
        "1 fotógrafo",
      ],
    },
    {
      name: "Completo",
      icon: Heart,
      price: "A partir de R$ 4.500",
      description: "O pacote mais popular para seu grande dia",
      features: [
        "8 horas de cobertura",
        "400+ fotos editadas",
        "Álbum físico premium + digital",
        "Entrega em 30 dias",
        "2 fotógrafos",
        "Making of dos noivos",
        "Ensaio pré-wedding",
      ],
      popular: true,
    },
    {
      name: "Premium",
      icon: Image,
      price: "A partir de R$ 6.500",
      description: "Experiência completa e exclusiva",
      features: [
        "12 horas de cobertura",
        "600+ fotos editadas",
        "Álbum físico premium + digital",
        "Entrega em 20 dias",
        "3 fotógrafos",
        "Making of completo",
        "Ensaio pré-wedding",
        "Vídeo teaser do dia",
        "Fotos em fine art",
      ],
    },
  ];

  const handleContactClick = () => {
    window.open("https://wa.me/5575982787441?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20pacotes", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pacotes & Investimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote ideal para eternizar seu grande dia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card 
                key={index} 
                className={`relative animate-slide-up hover:shadow-elegant transition-all duration-300 ${
                  pkg.popular ? 'border-primary border-2 scale-105 md:scale-110' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    onClick={handleContactClick}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Todos os pacotes incluem tratamento profissional das imagens, galeria online privada para compartilhamento e suporte completo durante todo o processo.
        </p>
      </div>
    </section>
  );
};

export default Services;
