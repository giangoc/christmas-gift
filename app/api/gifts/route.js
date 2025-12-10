 // app/api/gifts/route.js
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

function generateGiftCode() {
  const randomNum = Math.floor(1000 + Math.random() * 9000)
  return `GF-${randomNum}`
}

export async function POST(request) {
  try {
    const { message } = await request.json()

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Generate unique gift code
    let giftCode
    let isUnique = false
    let attempts = 0

    while (!isUnique && attempts < 10) {
      giftCode = generateGiftCode()
      
      const { data: existing } = await supabase
        .from('gifts')
        .select('gift_code')
        .eq('gift_code', giftCode)
        .single()

      if (!existing) {
        isUnique = true
      }
      attempts++
    }

    if (!isUnique) {
      return NextResponse.json(
        { error: 'Could not generate unique code' },
        { status: 500 }
      )
    }

    // Insert gift into database
    const { data, error } = await supabase
      .from('gifts')
      .insert([
        {
          gift_code: giftCode,
          message: message.trim(),
          is_opened: false,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to create gift' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      gift: data,
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
