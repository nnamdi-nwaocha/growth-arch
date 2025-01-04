import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { token } = await request.json();
        const result = await fetch('https://growth-arc-backend.onrender.com/auth/confirm-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        if (result.ok) {
            return NextResponse.json({ message: 'Email confirmed successfully' });
        } else {
            const errorData = await result.json();
            return NextResponse.json({ message: errorData.message || 'Email confirmation failed' }, { status: result.status });
        }
    } catch (error) {
        console.error('Email confirmation error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}