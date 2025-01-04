import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const result = await fetch(`${backendUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (result.ok) {
            return NextResponse.json({ message: 'Signup successful. Please check your email for confirmation.' });
        } else {
            const errorData = await result.json();
            console.log(errorData)
            return NextResponse.json({ message: errorData.message || 'Signup failed' }, { status: result.status });
        }
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}