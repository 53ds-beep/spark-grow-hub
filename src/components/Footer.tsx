import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-xs">
                SP
              </div>
              <span className="font-display text-lg font-bold">SPIC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Society of Promotion of Innovation and Creativity — A Student Society of the EII Department, RKGIT.
            </p>
            <p className="text-sm font-medium text-primary mt-2">Innovate. Create. Inspire.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Events", path: "/events" },
                { label: "Team", path: "/team" },
                { label: "Contact", path: "/contact" },
                { label: "Join Team", path: "/join" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="font-display font-semibold mb-3">Upcoming Events</h4>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm font-medium">Ideation 2.0</p>
                <p className="text-xs text-muted-foreground">11 March 2026</p>
              </div>
              <div>
                <p className="text-sm font-medium">TEDx RKGIT</p>
                <p className="text-xs text-muted-foreground">1 April 2026</p>
              </div>
              <Link to="/events" className="text-sm text-primary hover:underline">View all events →</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-3">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Instagram, label: "Instagram", url: "#" },
                { icon: Linkedin, label: "LinkedIn", url: "#" },
                { icon: Youtube, label: "YouTube", url: "#" },
                { icon: Mail, label: "Email", url: "mailto:spic@rkgit.edu.in" },
              ].map(({ icon: Icon, label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">spic@rkgit.edu.in</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          © 2026 SPIC-RKGIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
