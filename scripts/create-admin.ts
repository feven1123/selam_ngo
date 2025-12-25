import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/lib/bcrypt';
import 'dotenv/config';

async function createAdmin() {
  const prisma = new PrismaClient();
  
  try {
    // Create a default admin user
    const email = 'admin@selamngo.org';
    const password = 'admin123';
    
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email },
    });
    
    if (existingAdmin) {
      console.log(`Admin user with email ${email} already exists`);
      return;
    }
    
    // Hash the password
    const hashedPassword = await hashPassword(password);
    
    // Create the admin user
    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    
    console.log(`Admin user created with email: ${admin.email}`);
    console.log(`Default password: ${password}`);
    console.log('Please change this password after first login!');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();