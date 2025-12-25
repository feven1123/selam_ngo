"use client";

import { useEffect, useState } from "react";

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
  createdAt: string;
}

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [uploading, setUploading] = useState(false);

  // Fetch gallery images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setNewImageUrl(data.url);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newImageUrl) {
      try {
        const res = await fetch('/api/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imageUrl: newImageUrl,
            caption: newCaption,
          }),
        });

        if (res.ok) {
          const newImage = await res.json();
          setImages([...images, newImage]);
          setNewImageUrl("");
          setNewCaption("");
          setShowForm(false);
        }
      } catch (error) {
        console.error("Error adding image:", error);
      }
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        const res = await fetch(`/api/gallery/${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          setImages(images.filter(image => image.id !== id));
        }
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
            <p className="mt-2 text-gray-600">Manage your organization's photo gallery</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New Image
          </button>
        </div>

        {showForm && (
          <div className="bg-white shadow sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Add New Image
              </h2>
            </div>
            <div className="border-t border-gray-200">
              <form onSubmit={handleAddImage} className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Upload Image
                    </label>
                    <div className="mt-1 flex items-center space-x-4">
                      {newImageUrl && (
                        <div className="flex-shrink-0 h-24 w-24 relative">
                          <img
                            src={newImageUrl}
                            alt="Preview"
                            className="h-24 w-24 object-cover rounded-md border"
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleFileUpload}
                          required={!newImageUrl}
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {uploading && (
                          <p className="mt-1 text-xs text-blue-600 animate-pulse">Uploading...</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                      Caption (optional)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="caption"
                        id="caption"
                        value={newCaption}
                        onChange={(e) => setNewCaption(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setNewImageUrl("");
                      setNewCaption("");
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={uploading || !newImageUrl}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${(uploading || !newImageUrl) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Add Image
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden border">
                <div className="h-48 bg-gray-100 relative">
                  {image.imageUrl ? (
                    <img
                      src={image.imageUrl}
                      alt={image.caption}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-center mb-4 line-clamp-1">{image.caption || "No caption"}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}