const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">AestheticMAX</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 AestheticMAX. All rights reserved.
          </p>
        </div>

        {/* Disclaimers */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> AestheticMAX is for self-improvement purposes only and is not medical advice. 
            AI ratings are based on conventional beauty standards and may not reflect personal preferences. 
            Consult a professional before making significant changes to your appearance or health routine.
            Results may vary and are not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
