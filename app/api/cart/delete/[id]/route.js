import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// DELETE /api/cart/delete
export const DELETE = async (req) => {
  try {
    const { productId } = await req.json();
    await prisma.cartItem.delete({
      where: { id: productId },
    });

    const cartItems = await prisma.cartItem.findMany();

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error deleting cart item:', error);
    return NextResponse.json(
      { error: `Error deleting cart item: ${error.message}` },
      { status: 500 }
    );
  }
};
