import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = await fetch('https://growth-arc-backend.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            credentials: 'include' // Ensure cookies are included in the request
        });

        if (!result.ok) {
            const errorData = await result.json();
            console.log(errorData);
            return NextResponse.json({ message: errorData.message || 'Login failed' }, { status: result.status });
        } else {
            const data = await result.json();
            const cookies = result.headers.get('set-cookie');
            const response = NextResponse.json({ message: 'Login successful', ...data });

            if (cookies) {
                response.headers.set('set-cookie', cookies);
            }

            return response;
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}