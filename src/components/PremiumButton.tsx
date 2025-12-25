"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    className?: string;
    icon?: ReactNode;
    fullWidth?: boolean;
}

export default function PremiumButton({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    icon,
    fullWidth = false,
}: PremiumButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-lg transition-all overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white shadow-xl shadow-primary/30",
        secondary: "bg-secondary text-white shadow-xl shadow-secondary/30",
        outline: "bg-transparent border-2 border-slate-900 text-slate-900",
        ghost: "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md",
    };

    const content = (
        <>
            <span className="relative z-10">{children}</span>
            {icon && <span className="relative z-10 group-hover:translate-x-1 transition-transform">{icon}</span>}
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </>
    );

    const combinedClassName = `${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : "w-auto"} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2"
                >
                    {content}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClassName}
        >
            {content}
        </motion.button>
    );
}
