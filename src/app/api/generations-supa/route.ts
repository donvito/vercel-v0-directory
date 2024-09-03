import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET() {
  const { data, error } = await supabase
    .from('v0_generations')
    .select('*')
    .order('created_date', { ascending: false });

  if (error) {
    return NextResponse.error();
  }

  const remappedData = data.map((item) => ({
    title: item.title,
    generationId: item.generation_id,
    author: item.author,
    authorV0ProfileId: item.author_v0_profile_id,
  }));

  return NextResponse.json(remappedData, {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
