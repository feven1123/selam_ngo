"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { use } from "react";

// Mock data for a specific program
const mockProgram = {
  id: "1",
  title: "Education Initiative",
  description: `
    <p>Our Education Initiative is designed to bridge the educational gap in underserved communities by providing essential learning resources, qualified teachers, and infrastructure support.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Program Goals</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Increase literacy rates among children aged 6-16 by 40%</li>
      <li>Provide scholarships to 200 deserving students annually</li>
      <li>Train 50 local teachers in modern pedagogical techniques</li>
      <li>Establish 5 community learning centers in remote areas</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Impact So Far</h2>
    <p>Since launching this initiative three years ago, we have successfully:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>Enrolled over 1,200 children in formal education programs</li>
      <li>Built 3 school facilities with capacity for 400 students each</li>
      <li>Trained 85 local teachers, improving the student-teacher ratio</li>
      <li>Distributed 5,000 textbooks and learning materials</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">How You Can Help</h2>
    <p>Your support can make a significant difference in expanding this program:</p>
    <ul class="list-disc pl-6 space-y-2">
      <li>$50 sponsors a child's education for one year</li>
      <li>$200 funds a teacher's monthly salary</li>
      <li>$1,000 helps build a classroom facility</li>
      <li>$5,000 establishes a full scholarship for university education</li>
    </ul>
    
    <p class="mt-6"><strong>Together, we can transform lives through education.</strong></p>
  `,
  imageUrl: "/placeholder.jpg",
  createdAt: "2023-05-15",
};

export default function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  // In a real app, we would fetch the program data based on the ID
  // For now, we'll just check if the ID matches our mock data
  if (id !== mockProgram.id) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-900 font-medium mb-6 hover:underline"
          >
            ← Back to Programs
          </button>

          <div className="mb-8">
            <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{mockProgram.title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: mockProgram.description }} />
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Support This Program</h3>
            <p className="mb-4">Your contribution can help us expand this vital program and reach more children in need.</p>
            <Link
              href="/donate"
              className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-800 transition duration-300 transform hover:-translate-y-1"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}