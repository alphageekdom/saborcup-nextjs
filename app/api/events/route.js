import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// GET /api/events
export const GET = async () => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { startDate: 'asc' }, // Order events by start date
    });

    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events.' },
      { status: 500 }
    );
  }
};
