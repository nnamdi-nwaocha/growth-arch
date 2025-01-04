import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');
        if (!token) {
            return NextResponse.json({ message: 'Token is required' }, { status: 400 });
        }

        const result = await fetch(`https://growth-arc-backend.onrender.com/auth/confirm-email?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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