"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Scissors
            size={22}
            className="text-rose-gold transition-transform duration-300 group-hover:rotate-45"
          />
          <span className="font-display text-xl text-espresso tracking-wide">
            <span className="text-rose-gold">Ellies</span> Hair & Beauty
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase text-mocha hover:text-rose-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-rose-gold text-cream px-6 py-3 font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:bg-espresso hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-espresso"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-cream border-t border-champagne px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase text-mocha hover:text-rose-gold transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="inline-flex justify-center items-center gap-2 bg-rose-gold text-cream px-6 py-3 font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:bg-espresso"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
