"use client";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  Services: [
    { label: "Web & Mobile Apps", href: "#services" },
    { label: "AI & Automation", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Full-Stack Dev", href: "#services" },
    { label: "Tech Consulting", href: "#services" },
  ],
  Work: [
    { label: "Flyhi Finance", href: "https://flyhifinance.com/", external: true },
    { label: "Wedding Manual", href: "https://theweddingmanual.com/", external: true },
    { label: "YogaKaro", href: "https://m.yogakro.com/", external: true },
    { label: "Milkorra", href: "https://milkoraa.com/", external: true },
    { label: "Luxuraa Ceramics", href: "https://luxuraceramics.com/", external: true },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ],
};

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: TwitterIcon, label: "Twitter / X", href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#080B12", borderTop: "1px solid #1E2535" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top row: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-1 font-grotesk font-bold text-xl mb-4">
              <span className="font-mono" style={{ color: "#00F5FF" }}>{`{`}</span>
              <span style={{ color: "#FFFFFF" }}>BeOnline</span>
              <span style={{ color: "#00F5FF" }}>.club</span>
              <span className="font-mono" style={{ color: "#00F5FF" }}>{`}`}</span>
            </div>
            <p
              className="font-sans text-sm mb-6 leading-relaxed max-w-xs"
              style={{ color: "#A0ADB8", lineHeight: "1.7" }}
            >
              The elite engineering team startups hire to punch above their weight.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "#141B2D",
                    border: "1px solid #2E3D56",
                    color: "#A0ADB8",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#00F5FF50";
                    e.currentTarget.style.color = "#00F5FF";
                    e.currentTarget.style.background = "#00F5FF12";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2E3D56";
                    e.currentTarget.style.color = "#A0ADB8";
                    e.currentTarget.style.background = "#141B2D";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                className="font-mono text-xs tracking-widest mb-5 uppercase"
                style={{ color: "#00F5FF" }}
              >
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-sans text-sm text-left transition-colors duration-200"
                      style={{ color: "#A0ADB8" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#A0ADB8")}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "#1E2535" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs" style={{ color: "#3E5070" }}>
            © {new Date().getFullYear()} BeOnline.club — Built with ☕ and too much TypeScript.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#39FF14" }} />
            <p className="font-mono text-xs" style={{ color: "#3E5070" }}>
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
