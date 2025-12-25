import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/programs - Get all programs
export async function GET() {
  try {
    const programs = await prisma.program.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(programs);
  } catch (error) {
    console.error('Error fetching programs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/programs - Create a new program
export async function POST(request: Request) {
  try {
    const { title, description, imageUrl } = await request.json();

    // Validate input
    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    const program = await prisma.program.create({
      data: {
        title,
        description,
        imageUrl: imageUrl || '',
      },
    });

    return NextResponse.json(program, { status: 201 });
  } catch (error) {
    console.error('Error creating program:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}