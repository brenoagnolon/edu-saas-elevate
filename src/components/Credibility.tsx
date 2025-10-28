import masterpieceLogo from "@/assets/masterpiece-logo.png";

const Credibility = () => {
  return (
    <section className="py-20 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <img 
            src={masterpieceLogo} 
            alt="MasterPiece Company" 
            className="h-20 w-auto opacity-80"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
           Somos a única empresa especialista em extração metodológica que transforma esse conhecimento em E-Saas útil e escalável.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
           Com raízes na programação desde 2018 e 4 anos especializados em traduzir o conhecimento de grandes mentes em cursos, mentorias e apostilas, evoluímos para Software. Hoje, construímos E-Saas: o formato que multiplica seu valuation e gera receita recorrente previsível.
          </p>
        </div>

        <div className="pt-6 flex flex-wrap justify-center gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">4+</p>
            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Foco em Educação e Tecnologia</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">IA</p>
            <p className="text-sm text-muted-foreground">Voltada a Educação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
