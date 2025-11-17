import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5575982787441?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e vamos planejar juntos como eternizar os momentos mais especiais do seu grande dia
            </p>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4 text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Entre em Contato</h3>
                  
                  <a 
                    href="https://wa.me/5575982787441" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-sm">(75) 98278-7441</div>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/raemaretratos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Instagram className="w-5 h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-medium text-foreground">Instagram</div>
                      <div className="text-sm">@raemaretratos</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">E-mail</div>
                      <div className="text-sm">contato@raemaretratos.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Localização</div>
                      <div className="text-sm">Bahia, Brasil</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center md:items-start space-y-4">
                  <div className="text-center md:text-left">
                    <p className="text-lg font-medium text-foreground mb-2">
                      Pronta para atender você!
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Agende uma conversa sem compromisso para conhecer melhor o trabalho e tirar suas dúvidas
                    </p>
                  </div>
                  <Button 
                    size="lg" 
                    variant="hero"
                    onClick={handleWhatsAppClick}
                    className="w-full md:w-auto"
                  >
                    <MessageCircle className="mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Atendimento de segunda a sexta, das 9h às 18h. Respondo mensagens fora do horário comercial assim que possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
