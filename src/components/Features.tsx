import { Target, Zap, Clock, Brain, TrendingUp, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Know Your Number",
    description: "Get an honest 1-10 rating based on facial symmetry, bone structure, and proportions. No guesswork.",
  },
  {
    icon: Zap,
    title: "Quick Wins First",
    description: "We prioritize high-impact, low-effort changes. See results in weeks, not years.",
  },
  {
    icon: Brain,
    title: "AI-Powered Routine",
    description: "Your personalized skincare, grooming, and style plan—built by AI trained on what actually works.",
  },
  {
    icon: Clock,
    title: "Realistic Timelines",
    description: "Know exactly when you'll see results. No BS promises—just honest expectations.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Glow-Up",
    description: "Upload progress photos and watch your rating climb. See the improvement over time.",
  },
  {
    icon: MessageSquare,
    title: "Weekly AI Check-ins",
    description: "Your AI coach texts you weekly to keep you accountable and adjust your plan based on progress.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Finally, </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">An Unfair Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Other guys are guessing. You'll have the playbook.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-gold/20 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
