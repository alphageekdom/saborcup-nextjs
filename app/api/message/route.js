import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// POST /api/message
export const POST = async (req, res) => {
  if (req.method !== 'POST') {
    return NextResponse.error(new Error('Method Not Allowed'), { status: 405 });
  }

  try {
    const { name, email, subject, message } = await req.json();

    const messageSubmission = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json(
      { message: 'Form submitted successfully', data: messageSubmission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
};
