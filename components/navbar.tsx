"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = siteConfig.navLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/80 backdrop-blur-md border-b border-[#222222] py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded py-1"
            aria-label="AlgoraX Homepage"
          >
            <div className="relative w-8 h-8 rounded-md bg-[#0A0A0A] border border-[#222222] flex items-center justify-center group-hover:border-white transition-colors duration-200 p-1">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 35L24 13L34 35" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 27.5H30.5" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round"/>
                <path d="M18 19L30 31" stroke="#A0A0A0" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M30 19L18 31" stroke="#A0A0A0" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="24" cy="13" r="2.8" fill="#FFFFFF"/>
                <circle cx="24" cy="25" r="2.2" fill="#FFFFFF"/>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-mono">
              Algora<span className="text-[#A0A0A0]">X</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-150 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-white border border-[#222222] rounded-md bg-[#0A0A0A] hover:bg-white hover:text-black transition-all duration-200"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-[#A0A0A0] hover:text-white hover:bg-[#111111] border border-transparent hover:border-[#222222] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-black/95 backdrop-blur-xl border-t border-[#222222] z-40 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-[#A0A0A0] hover:text-white py-2 border-b border-[#111111] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#666666]">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-8 pb-4 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-black font-medium text-sm rounded-md transition-opacity hover:opacity-90"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center pt-2">
              <span className="text-xs font-mono text-[#666666]">
                {siteConfig.email}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
