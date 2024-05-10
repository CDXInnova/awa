import { NextResponse } from 'next/server';
import { connection } from '../../../../libs/mysql.js';
import crypto from 'crypto';

export async function POST(req) {
    if (req.method !== 'POST') {
        return new NextResponse('Method not allowed', { status: 405 });
    }

    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return new NextResponse(JSON.stringify({
                message: "Username and password are required"
            }), { status: 400 });
        }

        const hashedPassword = crypto.createHash('sha1').update(password).digest('hex');

        const query = `SELECT * FROM register_user WHERE username = ? AND contrasena = ?`;

        return new Promise((resolve, reject) => {
            connection.query(query, [username, hashedPassword], (err, results) => {
                if (err) {
                    console.error('Error:', err);
                    resolve(new NextResponse(JSON.stringify({
                        message: 'Internal Server Error',
                        error: err.message
                    }), { status: 500 }));
                } else if (results.length === 0) {
                    resolve(new NextResponse(JSON.stringify({
                        message: 'Invalid credentials'
                    }), { status: 401 }));
                } else {
                    const user = results[0];
                    resolve(new NextResponse(JSON.stringify({
                        message: 'User authenticated',
                        user
                    }), { status: 200 }));
                }
            });
        });

    } catch (error) {
        console.error('Error:', error);
        return new NextResponse(JSON.stringify({
            message: 'Internal Server Error',
            error: error.message
        }), { status: 500 });
    }
}
