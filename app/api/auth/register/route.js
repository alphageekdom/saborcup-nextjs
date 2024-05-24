import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import bcrypt from 'bcryptjs';

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    const hashedPassword = bcrypt.hashSync(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: 'User registered successfully',
      userId: user.id,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { error: 'Error registering user' },
      { status: 500 }
    );
  }
};
