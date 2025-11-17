import photographerImage from "@/assets/photographer-portrait.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background" id="sobre">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
              <img
                src={photographerImage}
                alt="Raema - Fotógrafa de Casamentos"
                className="relative rounded-2xl shadow-elegant w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Olá, sou a Raema
              </h2>
              <p className="text-xl text-primary font-medium">
                Fotógrafa de Casamentos
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Há mais de 5 anos dedicada a eternizar os momentos mais especiais da vida dos meus clientes. 
                Cada casamento é único, e meu olhar sensível busca capturar não apenas imagens, mas emoções genuínas.
              </p>
              <p>
                Acredito que a fotografia de casamento vai além do registro técnico. É sobre contar histórias, 
                preservar sorrisos, lágrimas de alegria e todos aqueles detalhes que fazem do seu dia algo inesquecível.
              </p>
              <p className="font-medium text-foreground">
                Meu compromisso é fazer você reviver cada momento mágico sempre que olhar para suas fotos.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Casamentos</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
