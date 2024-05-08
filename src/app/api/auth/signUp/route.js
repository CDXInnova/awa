import { NextResponse } from "next/server";
import { connection } from '../../../../libs/mysql.js';
//import crypto from 'crypto';
//import { connectWallet } from '@/utils/smart.js'; // Importamos la función para conectar la wallet

export async function POST(req) {
    if (req.method !== 'POST') {
        return new NextResponse('Method not allowed', { status: 405 });
    }

    try {
        const {
            email,
            password,
            name,
            apellidos,
            username,
            patrocinador
        } = await req.json();

        if (!email || !password || password.length < 6 || !name || !apellidos || !username || !patrocinador) {
            return new NextResponse(JSON.stringify({
                message: "All fields are required and password must be at least 6 characters long"
            }), { status: 400 });
        }

        // Encriptar la contraseña con sha1
        const hashedPassword = crypto.createHash('sha1').update(password).digest('hex');

        // Aquí puedes conectar la wallet favorita antes de continuar
        // Asegúrate de manejar esto de manera adecuada en tu entorno de desarrollo
        const wallet = ''; // Puedes establecer un valor predeterminado o manejar esto según tus necesidades

        // Obtener la fecha actual para la fecha de inscripción
        const fechaInscripcion = new Date().toISOString().slice(0, 10);

        // Consulta SQL para insertar un nuevo usuario
        const sql = `
            INSERT INTO register_user (nombres, apellidos, username, contrasena, patrocinador, fecha_inscripcion, wallet_favorita)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        // Ejecutar la consulta SQL
        connection.query(sql, [name, apellidos, username, hashedPassword, patrocinador, fechaInscripcion, wallet], (err, results) => {
            if (err) {
                console.error('Error:', err);
                return new NextResponse(JSON.stringify({
                    message: 'Internal Server Error',
                    error: err.message
                }), { status: 500 });
            }
            // Si la inserción es exitosa, devolvemos una respuesta satisfactoria
            return new NextResponse(JSON.stringify({
                message: "User registered successfully"
            }), { status: 201 });
        });

    } catch (error) {
        console.error('Error:', error);
        return new NextResponse(JSON.stringify({
            message: 'Internal Server Error',
            error: error.message
        }), { status: 500 });
    }
}
