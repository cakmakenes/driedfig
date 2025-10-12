"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Header component implementing the design.txt navigation spec
// - Fixed at top with animated transition between top and scrolled states
// - Larger initial height/logo/nav; shrink on scroll
// - Blurred translucent background on scroll (no solid white)
// - Cross-fade logos for a seamless change
// - Responsive: hamburger menu on mobile
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/production", label: "Production" },
    { href: "/brands", label: "Brands" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  // Keep nav items white for contrast with better shadow
  const textClass = scrolled ? "text-white drop-shadow-lg" : "text-white drop-shadow-xl";
  const linkHover = "hover:text-[#CDE2D8]";
  const headerHeight = scrolled ? "h-16" : "h-20"; // shrink height on scroll
  // Enlarge scrolled green logo for better visibility
  const logoSizeClass = scrolled ? "h-[58px] w-[200px]" : "h-[60px] w-[210px]";
  const linkSizeClass = scrolled ? "text-sm" : "text-base"; // shrink link font size

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-[height] duration-500 ease-in-out ${headerHeight}`}>
          {/* Logo section with enhanced cross-fade */}
          <Link href="/" className="flex items-center gap-2 -ml-2" aria-label="Kaplanlar Dried Fruits - Home">
            <div className={`relative ${logoSizeClass}`}>
              <Image
                src="/LOGO_Kaplanlar_white.png"
                alt="Kaplanlar logo (white)"
                fill
                sizes="(max-width: 768px) 150px, 210px"
                priority
                className={`object-contain will-change-transform transition-all duration-500 ease-in-out drop-shadow-lg ${
                  scrolled ? "opacity-0 -translate-y-1 scale-95" : "opacity-100 translate-y-0 scale-100"
                }`}
              />
              <Image
                src="/LOGO_Kaplanlar-removebg-preview.png"
                alt="Kaplanlar logo (green)"
                fill
                sizes="(max-width: 768px) 150px, 200px"
                priority
                className={`object-contain will-change-transform transition-all duration-500 ease-in-out drop-shadow-lg ${
                  scrolled ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
                }`}
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className={`hidden md:flex items-center gap-8 font-medium transition-all duration-500 ease-in-out ${textClass} ${linkSizeClass}`}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${linkHover} transition-all duration-500 ease-in-out`}>
                {item.label}
              </Link>
            ))}
            <a
              href="/KAPLANLAR E-CATALOGUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#2E6B4D] px-4 py-2 text-white transition-all duration-500 ease-in-out hover:bg-[#23523A]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              E-Catalog
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-md border transition-all duration-500 ease-in-out ${
              scrolled ? "p-2 border-white/70 text-white" : "p-3 border-white/60 text-white"
            }`}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu drawer */}
        {open && (
          <div className="md:hidden py-3">
            <div className={`flex flex-col gap-2 ${scrolled ? "bg-black/60" : "bg-black/70"} rounded-md p-3 transition-colors duration-500 ease-in-out`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-2 rounded text-white ${linkHover}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/KAPLANLAR E-CATALOGUE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 justify-center rounded-md bg-[#2E6B4D] px-3 py-2 text-white hover:bg-[#23523A]"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                E-Catalog
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
