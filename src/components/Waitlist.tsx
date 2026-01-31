import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Sparkles, Clock, Gift, Users } from "lucide-react";
import { toast } from "sonner";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("You're in! Check your email for next steps.");
  };

  const spotsRemaining = 27;

  return (
    <section id="waitlist" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/50 bg-red-500/10 mb-4">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-sm font-bold text-red-400">Only {spotsRemaining} spots left for beta testing</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Stop Wondering. </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">
              Start Knowing.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the beta and get your personalized AI glow-up plan in under 60 seconds.
          </p>

          {/* Value Stack Box */}
          <div className="bg-card border border-primary/30 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
            <p className="text-sm font-bold text-primary mb-4 flex items-center gap-2">
              <Gift className="w-4 h-4" />
              WHAT YOU GET (FREE FOR BETA):
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-foreground font-medium">Objective 1-10 Rating</span>
                  <span className="text-muted-foreground text-sm block">No BS, no ego—just where you stand</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-foreground font-medium">Your Top 3 Quick Wins</span>
                  <span className="text-muted-foreground text-sm block">Biggest impact, least effort changes</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-foreground font-medium">Personalized AI Routine</span>
                  <span className="text-muted-foreground text-sm block">Your custom glow-up plan ($97 value)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-foreground font-medium">Weekly AI Coach Check-ins</span>
                  <span className="text-muted-foreground text-sm block">Stay accountable, see progress</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">Total Value: <span className="line-through">$147</span> → <span className="text-primary font-bold">FREE</span> for beta testers</p>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 px-6 bg-secondary border-border text-foreground placeholder:text-muted-foreground rounded-xl focus:border-primary focus:ring-primary"
                required
              />
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isLoading}
                className="shrink-0"
              >
                {isLoading ? (
                  "Joining..."
                ) : (
                  <>
                    Get My Rating
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-green-500/10 border border-green-500/30">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-foreground block mb-1">
                  You're in! 🎉
                </span>
                <span className="text-muted-foreground">
                  Check your email—your spot is secured.
                </span>
              </div>
            </div>
          )}

          {/* Social Proof + Trust */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>73 men joined this week</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>No spam. Unsubscribe anytime.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
