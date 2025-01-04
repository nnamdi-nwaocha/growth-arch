import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json();
    const result = await fetch(`https://growth-arc-backend.onrender.com/auth/confirm-email?token=${body.token}`,)
    if (result.ok) {
        return NextResponse.json({ message: 'Email confirmed' })
    } else {
        return NextResponse.error()
    }

}

