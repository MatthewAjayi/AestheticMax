import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-green-500" />
            <span className="text-sm font-bold text-green-400">FREE for Beta Testers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Get Everything. </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">Pay Nothing.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            After beta, this becomes a paid product. Lock in free access now.
          </p>
        </div>

        {/* Single Beta Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-gold p-8">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-gold text-primary-foreground text-sm font-bold">
              Beta Access
            </div>

            <div className="mb-8 text-center">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground line-through">$147</span>
                <span className="text-5xl font-bold text-foreground">$0</span>
              </div>
              <p className="text-muted-foreground">Free while in beta (limited spots)</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Objective 1-10 face rating</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Strengths & weaknesses breakdown</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Top 3 quick wins (highest impact first)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Personalized AI glow-up routine ($97 value)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Weekly AI coach check-ins</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Progress tracking dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground">Private community access (500+ men)</span>
              </li>
            </ul>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={scrollToWaitlist}
            >
              Claim My Free Spot
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Only 27 spots remaining. No credit card required.
            </p>
          </div>
        </div>

        {/* Future Pricing Note */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto">
          After beta ends, pricing starts at $9.99/month. Beta testers get grandfathered access at a steep discount.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
