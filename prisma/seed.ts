import { hashPassword } from '../src/lib/bcrypt';
import 'dotenv/config';

// Try direct import like in prisma.ts
let prisma: any;

try {
  const { PrismaClient } = require('@prisma/client');
  prisma = new PrismaClient();
} catch (error) {
  console.error('Failed to import Prisma Client:', error);
  process.exit(1);
}

async function main() {
  // Create a default admin user
  const email = 'admin@selamngo.org';
  const password = 'admin123';
  
  // Check if admin already exists
  const existingAdmin = await prisma.admin.findUnique({
    where: { email },
  });
  
  if (existingAdmin) {
    console.log(`Admin user with email ${email} already exists`);
    await prisma.$disconnect();
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
  
  await prisma.$disconnect();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });