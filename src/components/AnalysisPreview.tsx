import { Check, AlertCircle, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalysisPreview = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">What You'll </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">Discover</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's what your analysis looks like (real example)
          </p>
        </div>

        {/* Analysis Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-2xl">
            {/* Rating Header */}
            <div className="p-8 md:p-12 text-center bg-gradient-to-b from-secondary to-card">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Your Rating</span>
              </div>
              
              <div className="relative inline-block">
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">
                  6.5
                </span>
                <span className="text-3xl md:text-4xl text-muted-foreground font-medium">/10</span>
              </div>
              
              <p className="text-xl text-muted-foreground mt-4">
                You're in the <span className="text-foreground font-medium">top 35%</span> of men. But with the right fixes...
              </p>
              
              <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 inline-block">
                <p className="text-primary font-medium">
                  Your Potential: <span className="text-3xl font-bold">8.0</span>/10 
                  <span className="text-muted-foreground text-sm ml-2">(+1.5 points)</span>
                </p>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Strengths */}
              <div className="p-8 border-r border-b md:border-b-0 border-border">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  What's Working For You
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="font-medium text-foreground">Strong jawline</p>
                      <p className="text-sm text-muted-foreground">Top 20% definition—this is your weapon</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="font-medium text-foreground">Good eye shape</p>
                      <p className="text-sm text-muted-foreground">Hunter eyes with positive canthal tilt</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="font-medium text-foreground">Facial symmetry</p>
                      <p className="text-sm text-muted-foreground">Both sides aligned within 2% variance</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Wins */}
              <div className="p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  Your Quick Wins
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">Fix your skin (+0.5 points)</p>
                      <p className="text-sm text-muted-foreground">Clear acne, even tone → 4-week routine included</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">Shape your brows (+0.3 points)</p>
                      <p className="text-sm text-muted-foreground">Professional threading = instant upgrade</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-medium text-foreground">Optimize facial hair (+0.4 points)</p>
                      <p className="text-sm text-muted-foreground">Stubble at 3-5mm maximizes your jaw</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-secondary/30 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                Ready to find <span className="text-foreground font-medium">your</span> quick wins?
              </p>
              <Button variant="hero" size="lg" onClick={scrollToWaitlist}>
                Get My Analysis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisPreview;
