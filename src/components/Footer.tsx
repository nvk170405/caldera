import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Browse Apps", href: "#" },
        { name: "Submit App", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Analytics", href: "#" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "API Documentation", href: "#" },
        { name: "Guidelines", href: "#" },
        { name: "Best Practices", href: "#" },
        { name: "Success Stories", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Status", href: "#" },
        { name: "Community", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    }
  ];

  return (
    <footer className="border-t border-caldera-border bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">C</span>
              </div>
              <span className="font-bold text-xl font-inter">Caldera</span>
            </div>
            <p className="text-sm text-caldera-text-secondary mb-6 max-w-xs">
              The premier platform for developers to showcase their apps and connect with users worldwide.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold mb-4 text-caldera-text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-caldera-text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-caldera-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-caldera-text-secondary">
              © 2024 Caldera. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-caldera-text-secondary hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-caldera-text-secondary hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-caldera-text-secondary hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;