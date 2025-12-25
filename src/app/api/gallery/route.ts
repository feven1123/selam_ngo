import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/gallery - Get all gallery images
export async function GET() {
  try {
    const images = await prisma.gallery.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(images);
  } catch (error: any) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/gallery - Add a new gallery image
export async function POST(request: Request) {
  try {
    const { imageUrl, caption } = await request.json();

    // Validate input
    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Image URL is required' },
        { status: 400 }
      );
    }

    const image = await prisma.gallery.create({
      data: {
        imageUrl,
        caption: caption || '',
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error: any) {
    console.error('Error adding gallery image:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error.message || 'Unknown error',
        stack: error.stack
      },
      { status: 500 }
    );
  }
}