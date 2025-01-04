import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json({ message: 'Token is required' }, { status: 400 });
        }

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await fetch(`${backendUrl}/auth/confirm-email?token=${encodeURIComponent(token)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const text = await response.text();
        let data;
        try {
            data = JSON.parse(text);
        } catch {
            data = { message: text || 'Unknown error occurred' };
        }

        if (response.ok) {
            return NextResponse.json({ message: 'Email confirmed successfully' });
        } else {
            console.error('Email confirmation failed:', data);
            return NextResponse.json({ message: data.message || 'Email confirmation failed' }, { status: response.status });
        }
    } catch (error) {
        console.error('Email confirmation error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}