"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass py-3 shadow-lg shadow-black/5"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Link href="/" className="group flex items-center space-x-3">
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">S</div>
                <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                  SELAM<span className="text-secondary group-hover:text-secondary-dark">NGO</span>
                </span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex space-x-8 items-center">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Gallery", href: "/gallery" },
                { name: "Donate", href: "/donate" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-bold text-slate-600 hover:text-primary transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="md:hidden">
              {/* Mobile menu trigger could go here */}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
            <div className="md:col-span-12 lg:col-span-5">
              <Link href="/" className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
                <span className="text-2xl font-black tracking-tight">SELAM<span className="text-secondary">NGO</span></span>
              </Link>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                Empowering communities through sustainable development, education, and humanitarian aid. Together, we build a brighter future for all.
              </p>
              <div className="flex space-x-5">
                {[
                  { icon: "𝕏", label: "Twitter" },
                  { icon: "FB", label: "Facebook" },
                  { icon: "IG", label: "Instagram" },
                  { icon: "LI", label: "LinkedIn" }
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-2 group"
                    title={social.label}
                  >
                    <span className="font-bold text-xs group-hover:scale-110 transition-transform">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-3">
              <h3 className="text-xl font-black mb-8 flex items-center">
                Explore
                <span className="ml-3 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-5">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Our Programs", href: "/programs" },
                  { name: "Photo Gallery", href: "/gallery" },
                  { name: "Donate support", href: "/donate" },
                  { name: "Contact Us", href: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-400 hover:text-white transition-all flex items-center group font-medium">
                      <span className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300 text-primary opacity-0 group-hover:opacity-100">→</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 lg:col-span-4">
              <h3 className="text-xl font-black mb-8 flex items-center">
                Contact Info
                <span className="ml-3 w-8 h-1 bg-secondary rounded-full"></span>
              </h3>
              <div className="space-y-8">
                {[
                  { icon: "📍", text: "Addis Ababa" },
                  { icon: "📧", text: "selamngo@gmail.com" },
                  { icon: "📞", text: "+251912345678" }
                ].map((info, i) => (
                  <div key={i} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl shrink-0 group-hover:bg-slate-700 transition-colors">
                      {info.icon}
                    </div>
                    <p className="text-slate-400 font-medium leading-relaxed pt-2 group-hover:text-slate-200 transition-colors">{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-bold tracking-wider">
            <p className="uppercase tracking-widest">&copy; {new Date().getFullYear()} SELAM NGO. ALL RIGHTS RESERVED.</p>
            <div className="mt-6 md:mt-0 flex space-x-8">
              <Link href="/privacy" className="hover:text-white transition-colors uppercase">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors uppercase">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

