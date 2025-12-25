"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem("isAdminAuthenticated") === "true";
    setIsAuthenticated(auth);

    if (!auth && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [router, isLoginPage]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    setIsAuthenticated(false);
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Admin Navigation - Only show if authenticated and NOT on login page */}
      {isAuthenticated && !isLoginPage && (
        <nav className="sticky top-0 z-50 glass shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex items-center space-x-10">
                <div className="flex-shrink-0 flex items-center pr-4 border-r border-slate-200">
                  <span className="text-xl font-black tracking-tighter text-slate-900 border-b-2 border-primary pb-0.5">ADMIN<span className="text-primary-light">PANEL</span></span>
                </div>
                <div className="hidden sm:flex sm:space-x-2">
                  {[
                    { name: 'Dashboard', href: '/admin/dashboard' },
                    { name: 'Programs', href: '/admin/programs' },
                    { name: 'Gallery', href: '/admin/gallery' },
                    { name: 'Messages', href: '/admin/messages' },
                    { name: 'Settings', href: '/admin/settings' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${pathname === item.href
                          ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end mr-2">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">Admin User</span>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase flex items-center mt-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 w-10 h-10 rounded-xl flex items-center justify-center transition-all group shadow-sm"
                  title="Logout"
                >
                  <span className="group-hover:scale-110 transition-transform">🚪</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      <main className="fade-in">
        {children}
      </main>
    </div>
  );
}