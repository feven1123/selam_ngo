import { NextResponse } from 'next/server';
import { hashPassword, verifyPassword } from '@/lib/bcrypt';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const { email, currentPassword, newPassword } = await request.json();

        if (!email || !currentPassword || !newPassword) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Find the admin
        const admin = await prisma.admin.findUnique({
            where: { email },
        });

        if (!admin) {
            return NextResponse.json(
                { error: 'Admin not found' },
                { status: 404 }
            );
        }

        // Verify current password
        const isPasswordValid = await verifyPassword(currentPassword, admin.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Invalid current password' },
                { status: 401 }
            );
        }

        // Hash and update new password
        const hashedPassword = await hashPassword(newPassword);
        await prisma.admin.update({
            where: { email },
            data: { password: hashedPassword },
        });

        return NextResponse.json({
            success: true,
            message: 'Password updated successfully',
        });
    } catch (error) {
        console.error('Change password error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
