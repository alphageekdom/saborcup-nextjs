import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: 'asc' },
    });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories.' },
      { status: 500 }
    );
  }
};
