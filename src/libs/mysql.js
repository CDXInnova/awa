import mysql from 'mysql';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'acciones_m3'
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    throw new Error('Error de conexión a la base de datos');
  }
  console.log('Conexión a la base de datos MySQL establecida.');
});

export async function POST(req) {
  if (req.method !== 'POST') {
    return new NextResponse('Method not allowed', { status: 405 });
  }

  try {
    const { usuario, contrasena } = await req.json();
    if (!usuario || !contrasena) {
      return new NextResponse(JSON.stringify({
        message: "Username and password are required"
      }), { status: 400 });
    }

    const hashedPassword = crypto.createHash('sha1').update(contrasena).digest('hex');
    const query = `SELECT * FROM register_user WHERE usuario = ? AND contrasena = ?`;

    return new Promise((resolve, reject) => {
      connection.query(query, [usuario, hashedPassword], (err, results) => {
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
