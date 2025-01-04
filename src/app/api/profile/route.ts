import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const response = await fetch('https://growth-arc-backend.onrender.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': request.headers.get('cookie') || ''
            },
            credentials: 'include'
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            return NextResponse.json({ message: errorData.message || 'Failed to fetch users' }, { status: response.status });
        } else {
            const data = await response.json();
            return NextResponse.json(data);
        }
    } catch (error) {
        console.error('Fetch users error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}