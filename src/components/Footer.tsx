import { Mail, Linkedin, FileText, GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Copyright */}
          <div className="pt-6">
            <p className="text-center text-xs text-muted-foreground">
              {currentYear} - © Copyright - Md Aminul Islam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;