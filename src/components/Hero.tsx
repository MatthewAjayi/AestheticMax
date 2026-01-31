import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Flame } from "lucide-react";
import heroFace from "@/assets/hero-face.jpg";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFace} 
          alt="AestheticMAX Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/50 bg-red-500/10 mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm font-bold text-red-400">Only 100 Beta Spots Available</span>
          </div>

          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 ml-0 sm:ml-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">73 spots claimed</span>
          </div>

          {/* Headline - Pain Point First */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-muted-foreground">Stop Guessing.</span>
            <br />
            <span className="text-foreground">Know </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">
              Exactly
            </span>
            <span className="text-foreground"> What's</span>
            <br />
            <span className="text-foreground">Holding You Back.</span>
          </h1>

          {/* Subheadline - Specific Outcome */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Get your <span className="text-foreground font-semibold">objective 1-10 rating</span> from AI trained on 100,000+ faces. 
            Discover the <span className="text-foreground font-semibold">3 quick fixes</span> that will take you from overlooked to unforgettable.
          </p>

          {/* Bonus Stack */}
          <div className="bg-card/80 backdrop-blur border border-primary/30 rounded-xl p-4 mb-8 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <p className="text-sm text-primary font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              BETA TESTERS GET FREE:
            </p>
            <ul className="text-sm text-foreground space-y-1">
              <li>✅ Your personalized AI glow-up routine (worth $97)</li>
              <li>✅ Weekly check-ins with AI coach to track progress</li>
              <li>✅ Access to private community of 500+ men leveling up</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" onClick={scrollToWaitlist}>
              Claim Your Spot
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              See Sample Analysis
            </Button>
          </div>

          {/* Trust Indicators - Reframed */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Results in 60 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Photos deleted instantly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">100% anonymous</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
