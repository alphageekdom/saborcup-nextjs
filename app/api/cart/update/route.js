import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// PUT /api/cart/update
export const PUT = async (request) => {
  const { id, quantity } = await request.json();
  try {
    const updatedItem = await prisma.cartItem.update({
      where: { id: parseInt(id) },
      data: { quantity },
    });
    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating item quantity' },
      { status: 500 }
    );
  }
};
