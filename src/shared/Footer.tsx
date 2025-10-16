import { footerLinks, socialLinks } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-t-[#00BFFF] border-border bg-card px-6 py-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold text-[#00BFFF] hover:opacity-80 transition-opacity"
            >
              Remittra
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-[#00BFFF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:text-[#00BFFF]"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Remittra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
