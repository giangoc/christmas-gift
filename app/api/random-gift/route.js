 // app/api/random-gift/route.js
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Get all unopened gifts
    const { data: unopenedGifts, error: fetchError } = await supabase
      .from('gifts')
      .select('*')
      .eq('is_opened', false)

    if (fetchError) {
      console.error('Fetch error:', fetchError)
      return NextResponse.json(
        { error: 'Failed to fetch gifts' },
        { status: 500 }
      )
    }

    if (!unopenedGifts || unopenedGifts.length === 0) {
      return NextResponse.json(
        { error: 'No gifts available', noGifts: true },
        { status: 404 }
      )
    }

    // Select random gift
    const randomIndex = Math.floor(Math.random() * unopenedGifts.length)
    const selectedGift = unopenedGifts[randomIndex]

    // Mark gift as opened
    const { error: updateError } = await supabase
      .from('gifts')
      .update({ is_opened: true })
      .eq('id', selectedGift.id)

    if (updateError) {
      console.error('Update error:', updateError)
      return NextResponse.json(
        { error: 'Failed to update gift status' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      gift: {
        gift_code: selectedGift.gift_code,
        message: selectedGift.message,
      },
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Reset a gift (for testing purposes)
export async function POST(request) {
  try {
    const { giftCode } = await request.json()

    const { error } = await supabase
      .from('gifts')
      .update({ is_opened: false })
      .eq('gift_code', giftCode)

    if (error) {
      return NextResponse.json(
        { error: 'Failed to reset gift' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
