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

// DELETE /api/cart/delete
export const POST = async (req) => {
  try {
    // Assuming you have a way to identify the user, e.g., via session or auth token
    // const userId = req.user.id;

    // // Delete all items in the cart for the user
    // await prisma.cartItem.deleteMany({
    //   where: {
    //     userId: userId,
    //   },
    // });

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
