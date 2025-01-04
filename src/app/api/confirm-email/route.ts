import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token } = body;

        if (!token) {
            return NextResponse.json({ message: 'Token is required' }, { status: 400 });
        }

        const response = await fetch(`https://growth-arc-backend.onrender.com/auth/confirm-email?token=${encodeURIComponent(token)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok) {
            return NextResponse.json({ message: 'Email confirmed successfully' });
        } else {
            console.error('Email confirmation failed:', data);
            return NextResponse.json({ message: data.message || 'Email confirmation failed' }, { status: response.status });
        }
    } catch (err) {
        console.error('Email confirmation error:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
