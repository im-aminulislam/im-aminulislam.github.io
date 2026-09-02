import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#research" },
  { label: "Experience", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const { theme, resolvedTheme } = useTheme();
  const lenis = useLenis();
  const logoDark = "/logo-dark.svg";
  const logoLight = "/logo-light.svg";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("skills");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Use resolvedTheme which handles 'system' preference
  const currentLogo = resolvedTheme === "dark" ? logoDark : logoLight;

  const scrollToSection = (href: string) => {
    if (href === "#about") {
      lenis?.scrollTo(0, { immediate: false });
    } else {
      const element = document.querySelector(href);
      if (element) {
        lenis?.scrollTo(element, { offset: -80 });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    lenis?.scrollTo(0, { immediate: false });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Main Wrapper: Flex container to space out Logo and Nav */}
            <div className="flex items-center justify-between py-4">
              {/* 1. Logo Section (Left Side) */}
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={handleLogoClick}
                  className="text-xl font-bold tracking-tight text-foreground"
                  aria-label="Go to homepage"
                >
                  <img
                    alt="LOGO"
                    src={currentLogo}
                    className="h-8 w-auto transition-opacity duration-300"
                  />
                </Link>
              </div>

              {/* 2. Desktop Navigation (Centered or Right) */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`font-body text-sm transition-colors ${
                      item.href.slice(1) === activeSection
                        ? "text-accent font-medium"
                        : "text-foreground hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <ThemeToggle />
              </div>

              {/* 3. Mobile menu button (Right Side on small screens) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16.25 z-40 bg-background border-b border-border md:hidden">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-sm py-2 ${
                    item.href.slice(1) === activeSection
                      ? "text-accent font-medium"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
