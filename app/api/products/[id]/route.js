import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// GET /api/product/:id
export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    if (!id) {
      console.log('Item ID is undefined or null');
      return NextResponse.json(
        { error: 'Item ID is required.' },
        { status: 400 }
      );
    }

    const item = await prisma.product.findUnique({
      where: { id: String(id) },
    });

    if (!item) {
      console.log('Item not found');
      return NextResponse.json({ error: 'Item not found.' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch item.' },
      { status: 500 }
    );
  }
};
