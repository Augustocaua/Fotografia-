import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana paula & Pedro",
      date: "Casamento - Dezembro 2023",
      text: "A Carolina conseguiu capturar cada emoção do nosso dia de forma única. As fotos ficaram lindas demais! Profissionalismo e sensibilidade em cada clique.",
      rating: 5,
    },
    {
      name: "Julia & Ricardo",
      date: "Casamento - Outubro 2023",
      text: "Superou todas as expectativas! A Carolina tem um olhar especial que transforma momentos simples em verdadeiras obras de arte. Recomendo demais!",
      rating: 5,
    },
    {
      name: "luiza & Bruno",
      date: "Casamento - Agosto 2023",
      text: "Profissional incrível! Nos deixou super à vontade durante todo o dia. As fotos ficaram perfeitas e chegaram antes do prazo. Muito obrigada por eternizar nosso amor!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que os noivos falam sobre o trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="animate-slide-up hover:shadow-elegant transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
