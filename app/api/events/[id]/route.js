import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

//GET app/api/events
export const GET = async (request, { params }) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
};
