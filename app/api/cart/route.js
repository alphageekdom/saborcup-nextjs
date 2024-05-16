import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

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

export const POST = async (request) => {
  try {
    const { name, size, quantity, price, imageUrl } = await request.json();

    if (typeof price !== 'number' || isNaN(price)) {
      throw new Error('Price must be a valid number');
    }

    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        name,
        size,
      },
    });

    if (existingCartItem) {
      const updatedCartItem = await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });

      return NextResponse.json(updatedCartItem);
    } else {
      const createdItem = await prisma.cartItem.create({
        data: {
          name,
          size,
          quantity,
          price: parseFloat(price.toFixed(2)),
          imageUrl,
        },
      });

      return NextResponse.json(createdItem);
    }
  } catch (error) {
    console.error('Failed to add item to cart:', error);
    return NextResponse.json(
      { error: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
};
