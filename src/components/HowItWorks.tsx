import { Camera, Brain, TrendingUp, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Upload Your Photos",
    description: "60 seconds. Front face + side profile. That's it. Photos are deleted immediately after analysis.",
    highlight: "Takes 60 seconds",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analyzes Everything",
    description: "Our AI—trained on 100,000+ faces—rates you 1-10 and identifies your exact strengths and weak points.",
    highlight: "Brutally honest",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Get Your Glow-Up Plan",
    description: "Personalized routine with quick wins ranked by impact. Know exactly what to fix first for maximum results.",
    highlight: "Actionable steps",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple 3-Step Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">From Clueless to </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">Crystal Clear</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In 60 seconds, you'll know exactly what's working and what's not
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg shadow-gold">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                
                {/* Highlight Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
