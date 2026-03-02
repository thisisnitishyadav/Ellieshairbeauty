"use client";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138daaa0c66d?w=1600&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/60 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-1/4 right-[15%] w-px h-32 bg-rose-gold/40 hidden lg:block" />
      <div className="absolute bottom-1/4 right-[20%] w-20 h-px bg-rose-gold/40 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-rose-gold" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-rose-gold">
              Premium Hair & Beauty Salon
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] mb-6">
            Where Beauty
            <br />
            <em className="text-rose-gold not-italic">Meets Art</em>
          </h1>

          <p className="font-body text-lg text-cream/75 mb-10 leading-relaxed max-w-lg">
            Experience transformative beauty services by our expert stylists. From precision cuts and
            luxurious colour to revitalising spa treatments — all tailored uniquely to you.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-rose-gold text-cream px-8 py-3.5 font-sans text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-espresso hover:scale-105 active:scale-95"
            >
              Book Appointment <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-cream/50 text-cream px-8 py-3.5 font-sans text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-cream hover:text-espresso"
            >
              Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 pt-10 border-t border-cream/20">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "8K+", label: "Happy Clients" },
              { value: "4.9", label: "Star Rating", icon: true },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-center gap-1">
                  <span className="font-display text-3xl text-cream">{stat.value}</span>
                  {stat.icon && <Star size={18} className="text-rose-gold fill-rose-gold" />}
                </div>
                <p className="font-sans text-xs text-cream/50 tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-cream/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-rose-gold absolute top-0 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
