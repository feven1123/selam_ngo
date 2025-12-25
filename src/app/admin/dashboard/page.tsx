"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    { name: "Total Programs", value: "0", icon: "📊", color: "blue" },
    { name: "Gallery Images", value: "0", icon: "🖼️", color: "emerald" },
    { name: "Messages", value: "0", icon: "📩", color: "amber" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [programsRes, galleryRes, messagesRes] = await Promise.all([
          fetch('/api/programs'),
          fetch('/api/gallery'),
          fetch('/api/messages')
        ]);

        const [programs, gallery, messages] = await Promise.all([
          programsRes.json(),
          galleryRes.json(),
          messagesRes.json()
        ]);

        setStats([
          { name: "Total Programs", value: programs.length.toString(), icon: "📊", color: "blue" },
          { name: "Gallery Images", value: gallery.length.toString(), icon: "🖼️", color: "emerald" },
          { name: "Messages", value: messages.length.toString(), icon: "📩", color: "amber" },
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleAction = (action: string) => {
    alert(`${action} functionality coming soon!`);
  };

  const recentActivity = [
    {
      id: 1,
      title: "New message received",
      type: "New",
      description: "From: john.doe@example.com",
      date: "Dec 15, 2023",
      status: "new",
    },
    {
      id: 2,
      title: "Education Program updated",
      type: "Updated",
      description: "New resources added",
      date: "Dec 12, 2023",
      status: "updated",
    },
    {
      id: 3,
      title: "New gallery image uploaded",
      type: "Media",
      description: "Community Gathering 2023",
      date: "Dec 10, 2023",
      status: "media",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <AnimatedSection direction="down">
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-2 h-10 bg-primary rounded-full"></div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tight">Dashboard Overview</h1>
            </div>
            <p className="text-slate-500 font-bold ml-6 text-lg uppercase tracking-widest">
              Welcome back to <span className="text-primary">Selam NGO</span> control center
            </p>
          </AnimatedSection>
        </header>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <div className="glass group border-white p-10 rounded-[2.5rem] premium-shadow-hover relative overflow-hidden h-full flex flex-col justify-between transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 shadow-lg ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600 shadow-blue-100' :
                        stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 shadow-emerald-100' :
                          'bg-amber-50 text-amber-600 shadow-amber-100'
                      } group-hover:scale-110 group-hover:rotate-3`}>
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 bg-slate-50 px-3 py-1 rounded-full">Live Monitor</span>
                  </div>

                  <div>
                    <dt className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-2 leading-none">
                      {stat.name}
                    </dt>
                    <dd className="text-6xl font-black text-slate-900 tracking-tighter flex items-end gap-2">
                      {loading ? (
                        <span className="inline-block w-24 h-12 bg-slate-100 animate-pulse rounded-2xl"></span>
                      ) : (
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={stat.value}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            {stat.value}
                          </motion.span>
                        </AnimatePresence>
                      )}
                      <span className="text-sm font-bold text-slate-400 mb-2">+0%</span>
                    </dd>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">View Details</button>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100"></div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} direction="up">
          <div className="glass border-white rounded-[3rem] overflow-hidden premium-shadow">
            <div className="px-12 py-10 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/50 backdrop-blur-md">
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Recent Activity</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs pt-2">System heartbeat and updates</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleAction('Export')}
                  className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-slate-900/20"
                >
                  Export Logs
                </button>
              </div>
            </div>

            <div className="bg-white/30">
              <ul className="divide-y divide-slate-50">
                {recentActivity.map((activity, i) => (
                  <motion.li
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:bg-white/80 transition-all duration-300 group cursor-default"
                  >
                    <div className="px-12 py-8">
                      <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center space-x-8 min-w-0">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-2 transition-all duration-500 group-hover:rotate-6 ${activity.status === "new" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                              activity.status === "updated" ? "bg-blue-50 text-blue-600 border-blue-100" :
                                "bg-purple-50 text-purple-600 border-purple-100"
                            }`}>
                            <span className="text-2xl">
                              {activity.status === "new" ? "✨" : activity.status === "updated" ? "📝" : "📎"}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-xl font-black text-slate-900 truncate tracking-tight">
                              {activity.title}
                            </p>
                            <p className="text-slate-500 font-bold truncate pt-1 uppercase tracking-widest text-[10px]">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3 shrink-0">
                          <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${activity.status === "new" ? "bg-emerald-100 text-emerald-700" :
                              activity.status === "updated" ? "bg-blue-100 text-blue-700" :
                                "bg-purple-100 text-purple-700"
                            }`}>
                            {activity.type}
                          </span>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{activity.date}</p>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="px-12 py-8 bg-slate-50/50 border-t border-slate-100 text-center">
              <button
                onClick={() => handleAction('View Full Logs')}
                className="text-slate-400 font-black hover:text-primary transition-colors text-[10px] uppercase tracking-[0.3em] group"
              >
                View Full Logs Archive <span className="inline-block group-hover:translate-x-1 transition-transform ml-1">→</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}