import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/557182875822?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20fotografia%20de%20casamento", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Casal de noivos ao pôr do sol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-brown/70 via-dark-brown/50 to-background/90" />
      </div>

      {/* Content */}
      <Reveal
      className="relative z-10 container mx-auto px-4 py-20 text-center"
      direction="up"
      delay={100}
      durationMs={900}
      easing="cubic-bezier(0.22, 1, 0.36, 1)"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight">
          <RevealText
            mode="words"
            durationMs={900}
            easing="cubic-bezier(0.22, 1, 0.36, 1)"
            staggerStepMs={60}
          >
            Seu Grande Dia
          </RevealText>
          <br />
          <span className="text-black font-bold">
            <RevealText
              mode="letters"
              durationMs={900}
              easing="cubic-bezier(0.22, 1, 0.36, 1)"
              staggerStepMs={35}
            >
              Eternizado
            </RevealText>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto font-light">
          Registros inesquecíveis que contam a história do seu amor com sensibilidade e arte
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            onClick={handleWhatsAppClick}
            className="group"
          >
            <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" />
            Fale Comigo no WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="elegant"
          >
            Ver Portfolio
          </Button>
        </div>
      </Reveal>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
