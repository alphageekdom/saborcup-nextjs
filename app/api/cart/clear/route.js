import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const POST = async () => {
  try {
    await prisma.cartItem.deleteMany();

    return NextResponse.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    return NextResponse.json(
      { error: `Error clearing cart: ${error.message}` },
      { status: 500 }
    );
  }
};
