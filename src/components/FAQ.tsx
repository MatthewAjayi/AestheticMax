import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this actually accurate?",
    answer: "Our AI is trained on 100,000+ faces using objective metrics—facial symmetry, proportions, bone structure. It's not about opinions. It's about math. You'll get the same rating our AI would give if it analyzed you tomorrow.",
  },
  {
    question: "What happens to my photos?",
    answer: "Deleted. Immediately. The second our AI finishes analyzing, your photos are wiped from our servers. We never store, share, or sell your images. You stay 100% anonymous.",
  },
  {
    question: "Why is this free during beta?",
    answer: "We need real users to test the AI and improve recommendations. You get free access, we get feedback. After beta, this becomes a paid product—but beta testers get grandfathered at a steep discount.",
  },
  {
    question: "What's the 'AI routine' everyone's talking about?",
    answer: "Based on your specific analysis, our AI builds you a personalized glow-up plan—skincare products, grooming tips, style tweaks, and quick wins. Not generic advice. Tailored to your face and goals.",
  },
  {
    question: "Can I really improve my rating?",
    answer: "Absolutely. Most guys have 1-2+ points of untapped potential sitting on the table. Simple fixes like skincare, brow grooming, facial hair optimization, and style upgrades can make a massive difference. The AI shows you exactly where to focus.",
  },
  {
    question: "Is this only for men?",
    answer: "Currently, yes. Beauty standards differ by gender, and we've focused our AI training on male facial aesthetics. We may expand in the future.",
  },
  {
    question: "How long until I see results?",
    answer: "Some quick wins (eyebrow grooming, facial hair) are instant. Others (skincare, fitness) take 4-8 weeks. Your analysis includes realistic timelines for each recommendation so you know exactly what to expect.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Got </span>
            <span className="bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's what other guys asked before signing up
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-secondary/30 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
