import { NextResponse } from 'next/server';
import { hashPassword, verifyPassword } from '@/lib/bcrypt';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find admin user
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    // Check if admin exists and password is correct
    if (!admin || !(await verifyPassword(password, admin.password))) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In a real application, you would create a session or JWT token here
    // For this example, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}