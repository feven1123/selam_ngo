"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PremiumButton from "@/components/PremiumButton";
import { motion, AnimatePresence } from "framer-motion";

export default function DonatePage() {
    const [copied, setCopied] = useState<string | null>(null);

    const bankDetails = [
        {
            bank: "Global Trust Bank",
            accountName: "Selam Humanitarian Organization",
            accountNumber: "1234 5678 9012",
            swiftCode: "GTBKSUS33",
            type: "International Wire",
            currency: "USD/EUR"
        },
        {
            bank: "Community Saving Bank",
            accountName: "Selam NGO",
            accountNumber: "9876 5432 1098",
            swiftCode: "CSBKS77",
            type: "Local Transfer",
            currency: "ETB"
        }
    ];

    const otherMethods = [
        { name: "PayPal", icon: "💳", color: "blue" },
        { name: "Stripe", icon: "🌍", color: "indigo" },
        { name: "Apple Pay", icon: "🍎", color: "black" },
        { name: "Google Pay", icon: "📱", color: "red" },
        { name: "Crypto", icon: "₿", color: "orange" },
        { name: "Mobile Money", icon: "📲", color: "emerald" },
    ];

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Header / Hero */}
            <div className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] bg-primary/20 blur-[120px] rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection direction="down" delay={0.1}>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                            Fuel Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">Impact</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                            Transparent, direct, and life-changing. Your financial support allows us to remain responsive to the world's most urgent needs.
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Bank Details Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <AnimatedSection delay={0.2} direction="up">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-6 pl-4">Bank Architecture</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {bankDetails.map((detail, i) => (
                                    <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 premium-shadow group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                                                    🏦
                                                </div>
                                                <span className="px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                    {detail.currency}
                                                </span>
                                            </div>
                                            <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3">{detail.type}</h3>
                                            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">{detail.bank}</h2>

                                            <div className="space-y-6">
                                                <div className="group/item">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Account Name</p>
                                                    <p className="text-lg font-bold text-slate-800">{detail.accountName}</p>
                                                </div>
                                                <div className="group/item" onClick={() => handleCopy(detail.accountNumber, `acc-${i}`)}>
                                                    <div className="flex justify-between items-center mb-1.5 cursor-pointer">
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Number</p>
                                                        <AnimatePresence>
                                                            {copied === `acc-${i}` && (
                                                                <motion.span
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                                    className="text-[10px] font-black text-secondary uppercase"
                                                                >
                                                                    Copied!
                                                                </motion.span>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                    <p className="text-2xl font-black text-slate-900 tracking-wider hover:text-primary transition-colors cursor-pointer break-all">
                                                        {detail.accountNumber}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">SWIFT / BIC</p>
                                                    <p className="text-lg font-bold text-slate-800">{detail.swiftCode}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Other Methods Area */}
                    <div className="space-y-8">
                        <AnimatedSection delay={0.4} direction="up">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-6 pl-4">Digital Channels</h2>
                            <div className="bg-slate-900 rounded-[3rem] p-10 premium-shadow">
                                <div className="grid grid-cols-2 gap-4">
                                    {otherMethods.map((method, idx) => (
                                        <button
                                            key={method.name}
                                            className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group"
                                        >
                                            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{method.icon}</span>
                                            <span className="text-[10px] font-black text-white uppercase tracking-widest">{method.name}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-10 p-8 border-t border-white/5 text-center">
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                        Contact our billing department for large-scale corporate grants or non-cash assets.
                                    </p>
                                    <div className="mt-4 inline-block text-white font-black text-[10px] uppercase tracking-[0.2em]">
                                        grants@selamngo.org
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.5} direction="up">
                            <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10">
                                <div className="text-2xl mb-4">🛡️</div>
                                <h4 className="text-lg font-black text-slate-900 mb-3">Donor Privacy</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    We protect your data and identity. Selam NGO never sells or shares donor information with third-party organizations.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <PremiumButton href="/" variant="outline">
                        Return to Homepage
                    </PremiumButton>
                </div>
            </div>
        </div>
    );
}
