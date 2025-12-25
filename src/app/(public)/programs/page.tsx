"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch('/api/programs');
        const data = await res.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the various initiatives we undertake to create positive change in communities around the world.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link 
                key={program.id} 
                href={`/programs/${program.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                  <span className="text-blue-900 font-medium hover:underline">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}