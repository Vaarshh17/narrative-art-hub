import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-colors duration-500 ${
        scrolled ? "nav-scrolled" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-brand">
          VARSHA
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="text-fg font-semibold">Home</Link>
          <a href="#projects" className="text-muted hover:text-fg transition">Projects</a>
          <a href="#hackathons" className="text-muted hover:text-fg transition">Hackathons</a>
          <a href="#experience" className="text-muted hover:text-fg transition">Experience</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="mailto:varshask4757@gmail.com"
          className="hidden md:inline text-sm text-muted hover:text-fg"
        >
          varshask4757@gmail.com
        </a>
      </div>
    </nav>
  );
}
