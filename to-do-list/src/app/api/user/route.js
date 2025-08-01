// app/api/users/route.js
import { connectDB } from '/lib/mongoose'
import { User } from '/Model/User'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectDB()
  const users = await User.find()
  return NextResponse.json(users)
}

export async function POST(request) {
  await connectDB()
  const data = await request.json()
  const user = await User.create(data)
  return NextResponse.json(user)
}
