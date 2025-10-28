import { Card } from "@/components/ui/card";
import { FileText, Brain, Settings, Star } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Estruturação da Metodologia",
    description: "Extraímos e organizamos todo seu conhecimento em uma estrutura pedagógica e linha de raciocínio"
  },
  {
    icon: Brain,
    title: "IA Especialista Integrada",
    description: "Com base na sua metodologia, treinamos sua IA para dúvidas e suporte aos alunos 24/7 e outras funçoes"
  },
  {
    icon: Settings,
    title: "Ferramentas Interativas",
    description: "Desenvovemos recursos tecnológicos que potencializam o aprendizado, engajamento e prática dos alunos"
  },
  {
    icon: Star,
    title: "App completo e independente",
    description: "Traduzimos sua metodologia, ferramentas e IA em um app com design moderno e experiência de uso excepcional pronto para ser ofertado"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Passo a Passo da construção do seu E-Saas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Da extração da sua metodologia ao aplicativo exclusivo e rentável
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
