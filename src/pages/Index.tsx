import Hero from "@/components/Hero";
import RevenueSimulator from "@/components/RevenueSimulator";
import WhyESaas from "@/components/WhyESaas";
import ValuationHighlight from "@/components/ValuationHighlight";
import MarketData from "@/components/MarketData";
import Benefits from "@/components/Benefits";
import Credibility from "@/components/Credibility";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <RevenueSimulator />
        <WhyESaas />
        <ValuationHighlight />
        <MarketData />
        <Benefits />
        <Credibility />
        <LeadForm />
        <FinalCTA />
        
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/30">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>© 2025 MasterPiece Company. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
