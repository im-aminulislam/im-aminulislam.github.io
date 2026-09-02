import { Mail, Phone, MapPin } from "lucide-react";

const languages = [
  "English (Professional working proficiency)",
  "Chinese (Mandarin) (Professional working proficiency)",
  "Bengali (Native)",
  "Hindi (Professional working proficiency)",
  "Arabic (Conversational)",
];

const volunteering = [
  "Founder, community charity foundation — established and managed a local charitable organization in my hometown focused on social welfare and community development.",
  "Regular blood donor (twice annually), supporting national health initiatives.",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Contact</h2>

          {/* Contact Info - Inline */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 pb-8 border-b border-border">
            <a
              href="mailto:aminul.islam.7145@gmail.com"
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>aminul.islam.7145@gmail.com</span>
            </a>
            <span className="text-muted-foreground/30">|</span>
            <a
              href="tel:+13135737626"
              className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+1 313 573 7626</span>
            </a>
            <span className="text-muted-foreground/30">|</span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Detroit, Michigan</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Languages */}
            <div>
              <h3 className="section-heading">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Community Engagement & Volunteering */}
            <div>
              <h3 className="section-heading">Community Engagement & Volunteering</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                {volunteering.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* References */}
          <p className="text-sm text-muted-foreground text-center mt-12 pt-8 border-t border-border">
            References available upon request. Academic and professional referees can be
            provided from Yunnan University (thesis supervisor) and former employers in
            Bangladesh and China.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
