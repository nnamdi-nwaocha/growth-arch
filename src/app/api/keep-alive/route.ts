import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Use the environment variable for backend URL
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        // Make a simple health-check or ping request to the backend
        const response = await fetch(`${backendUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Handle non-successful response
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Backend health-check failed:', errorData);
            return NextResponse.json(
                { message: errorData.message || 'Backend is unreachable' },
                { status: response.status }
            );
        }

        // Success response
        const data = await response.json();
        return NextResponse.json({ status: 'Backend is active', data });
    } catch (error) {
        console.error('Keep-alive error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
