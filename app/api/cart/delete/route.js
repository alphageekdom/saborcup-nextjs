import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// DELETE /api/cart/delete
export const DELETE = async (req) => {
  try {
    const { id } = await req.json();
    const deletedItem = await prisma.cartItem.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(deletedItem);
  } catch (error) {
    console.error('Error deleting cart item:', error);
    return NextResponse.json(
      { error: `Error deleting cart item: ${error.message}` },
      { status: 500 }
    );
  }
};
