import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const POST = async (request) => {
  try {
    // Parsing the request body to extract cart item details
    const body = await request.json(); // Correctly parse the JSON body
    const { itemId, quantity, name, size, type, imageUrl, price } =
      body.cartItem; // Destructure the needed properties

    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        itemId,
        name,
        size,
      },
    });

    if (existingCartItem) {
      // If the item exists, update the quantity
      await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
    } else {
      // If the item does not exist, create a new cart item
      await prisma.cartItem.create({
        data: {
          itemId,
          quantity,
          name,
          size,
          type,
          imageUrl,
          price,
        },
      });
    }

    const cartItems = await prisma.cartItem.findMany();

    console.log(cartItems);

    return NextResponse.json(cartItems); // Return all cart items as response
  } catch (error) {
    console.error('Error while adding new item to cart:', error);
    return NextResponse.json(
      { error: 'Error adding new item to cart' },
      { status: 500 }
    );
  }
};
