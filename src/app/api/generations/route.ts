import { NextResponse } from 'next/server';
import v0Generations from '@/data/v0Generations';

export async function GET() {
  return NextResponse.json(v0Generations);
}
