import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// GET /api/events
export const GET = async () => {
  try {
    // Update isPast status for events based on the current date
    const today = new Date();
    await prisma.event.updateMany({
      where: {
        endDate: {
          lt: today,
        },
        isPast: false, // Only update if not already marked as past
      },
      data: {
        isPast: true,
      },
    });

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
