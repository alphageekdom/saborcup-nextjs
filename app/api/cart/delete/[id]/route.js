import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// DELETE /api/cart/delete
export const DELETE = async (req) => {
  try {
    const { productId } = await req.json();

    // Check if productId is provided
    if (!productId) {
      return new NextResponse(
        JSON.stringify({ error: 'Product ID is required' }),
        { status: 400 }
      );
    }

    console.log('Attempting to delete product with ID:', productId);

    // Check if the item exists before trying to delete
    const item = await prisma.cartItem.findUnique({
      where: { id: productId },
    });

    if (!item) {
      console.log('Item not found:', productId);
      return NextResponse.json(
        { error: `Item with ID ${productId} not found` },
        { status: 404 }
      );
    }

    // If the item exists, delete it
    await prisma.cartItem.delete({
      where: { id: productId },
    });

    console.log('Deleted item:', productId);

    const cartItems = await prisma.cartItem.findMany();
    console.log('Updated cart items:', cartItemArray);

    return NextResponse.json(cartItems);
  } catch (error) {
    console.error('Error deleting cart item:', error);
    return NextResponse.json(
      { error: `Error deleting cart item: ${error.message}` },
      { status: 500 }
    );
  }
};
