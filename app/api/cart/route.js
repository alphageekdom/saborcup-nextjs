import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// GET /api/cart
export const GET = async () => {
  try {
    const cartItems = await prisma.cartItem.findMany();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json([]);
    }

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return NextResponse.json(
      { error: 'Error fetching cart items' },
      { status: 500 }
    );
  }
};
