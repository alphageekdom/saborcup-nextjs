import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '8h',
      }
    );

    return NextResponse.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ error: 'Error logging in' }, { status: 500 });
  }
};
