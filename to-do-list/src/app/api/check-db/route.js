// app/api/check-db/route.js
import { connectDB } from '/lib/mongoose'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const db = await connectDB()
    const connectionState = db.connection.readyState  // 1 = connected

    if (connectionState === 1) {
      return NextResponse.json({ status: 'connected' })
    } else {
      return NextResponse.json({ status: 'not connected', state: connectionState })
    }
  } catch (error) {
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 })
  }
}
