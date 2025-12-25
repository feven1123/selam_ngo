// Mock data for gallery images
const mockGalleryImages = [
  { id: "1", imageUrl: "/placeholder.jpg", caption: "Community Gathering 2023" },
  { id: "2", imageUrl: "/placeholder.jpg", caption: "Education Program Launch" },
  { id: "3", imageUrl: "/placeholder.jpg", caption: "Healthcare Camp Setup" },
  { id: "4", imageUrl: "/placeholder.jpg", caption: "Water Well Installation" },
  { id: "5", imageUrl: "/placeholder.jpg", caption: "Volunteer Training Session" },
  { id: "6", imageUrl: "/placeholder.jpg", caption: "Annual Fundraising Event" },
  { id: "7", imageUrl: "/placeholder.jpg", caption: "School Construction Progress" },
  { id: "8", imageUrl: "/placeholder.jpg", caption: "Medical Outreach Program" },
  { id: "9", imageUrl: "/placeholder.jpg", caption: "Agricultural Training Workshop" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through moments captured from our programs and events around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockGalleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-4 bg-white">
                <p className="text-gray-700 text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}