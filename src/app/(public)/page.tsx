"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PremiumButton from "@/components/PremiumButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-slate-900 pt-20 overflow-hidden">
        {/* Background elements with richer gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-primary blur-[150px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
            className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-secondary blur-[120px] rounded-full"
          ></motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-3/5 text-center lg:text-left space-y-10">
              <AnimatedSection direction="down" delay={0.1}>
                <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-primary-light text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-light"></span>
                  </span>
                  <span>Making a Difference Today</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tighter">
                  Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary to-accent">Communities</span>.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-xl md:text-3xl text-slate-400 max-w-2xl lg:mx-0 leading-relaxed font-medium">
                  Join our mission to create sustainable change through education, health, and humanitarian support for vulnerable populations.
                </p>
              </AnimatedSection>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
                <AnimatedSection direction="none" delay={0.4}>
                  <PremiumButton href="/donate">
                    Start Impacting
                  </PremiumButton>
                </AnimatedSection>
                <AnimatedSection direction="none" delay={0.5}>
                  <PremiumButton href="/programs" variant="ghost">
                    Our Work
                  </PremiumButton>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.6} className="pt-12 border-t border-white/10">
                <div className="flex items-center justify-center lg:justify-start space-x-12">
                  {[
                    { label: "Established", val: "2010" },
                    { label: "Volunteers", val: "15k+" },
                    { label: "Impact", val: "12" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center lg:text-left group cursor-default">
                      <div className="text-3xl font-black text-white group-hover:text-primary-light transition-colors">{stat.val}</div>
                      <div className="text-xs text-slate-500 font-black uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:w-2/5 hidden lg:block">
              <AnimatedSection direction="right" delay={0.4} distance={50}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  <div className="relative bg-slate-800 rounded-[3rem] border border-white/10 p-12 flex items-center justify-center overflow-hidden aspect-square premium-shadow group-hover:border-primary/50 transition-all duration-700">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-[12rem] drop-shadow-2xl"
                    >
                      🤝
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6">Our Mission</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              A comprehensive approach to humanitarian aid.
            </h3>
            <div className="w-32 h-2.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: "🌍", title: "Global Impact", desc: "Reaching remote areas where aid is most needed with dedicated teams and resources.", color: "bg-blue-50/50 hover:bg-blue-50" },
              { icon: "🌱", title: "Sustainability", desc: "Programs designed to foster independence rather than just providing temporary relief.", color: "bg-emerald-50/50 hover:bg-emerald-50" },
              { icon: "🎓", title: "Empowerment", desc: "Education and skill-building initiatives that unlock local potential for generations.", color: "bg-amber-50/50 hover:bg-amber-50" }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`p-12 rounded-[3.5rem] ${feature.color} border border-transparent hover:border-black/5 transition-all duration-500 premium-shadow-hover group h-full`}>
                  <div className="text-7xl mb-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-6">{feature.title}</h4>
                  <p className="text-slate-600 text-xl leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-6">Featured Work</h2>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Current Initiatives</h3>
            </div>
            <Link href="/programs" className="group flex items-center bg-white px-10 py-5 rounded-2xl border border-slate-200 premium-shadow font-black text-slate-900 hover:text-primary transition-all">
              Explore All Programs <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Education Initiative", desc: "Empowering children with resources and school building projects.", img: "📚" },
              { title: "Rescue Mission", desc: "Disaster response and emergency medical assistance systems.", img: "🚁" },
              { title: "Clean Water", desc: "Solar-powered well systems for arid regional communities.", img: "💧" }
            ].map((program, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="none">
                <div className="bg-white rounded-[3.5rem] overflow-hidden border border-slate-200 premium-shadow-hover group h-full flex flex-col transition-all duration-500">
                  <div className="h-80 bg-slate-100 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-1000">
                    {program.img}
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                    <p className="text-slate-500 mb-10 text-xl leading-relaxed">
                      {program.desc}
                    </p>
                    <div className="mt-auto">
                      <PremiumButton href="/programs" variant="outline" fullWidth className="!rounded-2xl py-3 text-base">
                        View Details
                      </PremiumButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-slate-900">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary blur-[150px] rounded-full"
          ></motion.div>
        </div>
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection className="max-w-5xl mx-auto glass p-16 md:p-32 rounded-[5rem] border-white/5 shadow-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter">Ready to make an impact?</h2>
            <p className="text-2xl md:text-3xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
              Every small action contributes to global change. Join our network of volunteers and supporters today.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <PremiumButton href="/donate">
                Donate Support (Secure)
              </PremiumButton>
              <PremiumButton href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-slate-900">
                Talk to Us
              </PremiumButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}