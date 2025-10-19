"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const items = [
    { label: "BOOK NOW", href: "/book" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT US", href: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    // Prevent background scroll when menu is open
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="fixed top-4 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between rounded-[12px] border border-white/10 bg-white/5 backdrop-blur-md shadow-lg ring-1 ring-white/10 px-4 sm:px-6 py-2 sm:py-3">
          {/* Logo (left) */}
          <Link href="/" aria-label="Go to homepage" className="flex items-center gap-3">
            <Image src="/PNG-LOGO-12.svg" alt="Cuts & Coffee logo" width={40} height={40} priority className="w-10 h-10" />
          </Link>

          {/* Desktop tabs (hidden on mobile) */}
          <ul className="hidden sm:flex items-center gap-4 sm:gap-6">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      />

      {/* Side menu drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 sm:w-80 transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col gap-2 bg-white/5 backdrop-blur-md border-l border-white/10 shadow-lg ring-1 ring-white/10 p-6">
          <div className="flex items-center justify-between">
            <span className="text-white/80 font-bold">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block nav-link px-0 py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}