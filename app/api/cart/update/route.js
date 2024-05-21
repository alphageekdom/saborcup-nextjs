import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// PUT /api/cart/update
export const PUT = async (request) => {
  try {
    const { productId, quantity } = await request.json();

    await prisma.cartItem.update({
      where: { id: productId },
      data: { quantity },
    });

    const cartItems = await prisma.cartItem.findMany();

    return NextResponse.json(cartItems);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating item quantity' },
      { status: 500 }
    );
  }
};
