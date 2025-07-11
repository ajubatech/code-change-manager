// app/api/changes/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const changes = await prisma.changeRequest.findMany({
    orderBy: { submittedAt: 'desc' },
  });
  return NextResponse.json(changes);
}

export async function POST(req: Request) {
  const data = await req.json();
  // you might validate here (e.g. ensure title, author exist)
  const newChange = await prisma.changeRequest.create({ data });
  return NextResponse.json(newChange, { status: 201 });
}
