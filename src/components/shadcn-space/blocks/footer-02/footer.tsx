import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Pricing", href: "#pricing" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/everyday.standards/" },
    { icon: Youtube, href: "https://www.youtube.com/@everyday.standards" },
    { icon: Twitter, href: "https://x.com/evdaystds" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/everyday-standards-b00825405/" },
  ];

  return (
    <footer className="dark bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 md:py-24 py-8">
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
              <h2 className="sm:text-5xl text-3xl font-medium mb-6 text-foreground">
                Helping you build better habits and stay consistent every day.
              </h2>
              <a
                href="https://www.instagram.com/everyday.standards/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="py-3.5 px-6 rounded-full bg-[#ffd41d] text-black hover:bg-[#ffd41d]/80 h-auto font-medium">
                  Follow us on Instagram
                </Button>
              </a>
            </div>
            <div className="md:col-span-1" />
            <div className="col-span-12 md:col-span-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
              <div className="grid grid-cols-2 gap-4">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-base text-muted-foreground hover:text-[#ffd41d] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <Separator />
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-in-out fill-mode-both">
              <p className="text-sm text-muted-foreground">
                ©2026 Everyday Standards. All Rights Reserved
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#ffd41d] transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}