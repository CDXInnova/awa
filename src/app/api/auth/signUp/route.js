import { NextApiResponse } from 'next';
import { connection } from '../../../../libs/mysql.js';
import crypto from 'crypto';

async function signup(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { email, password, name, apellidos, username, patrocinador } = req.body;

        if (!email || !password || password.length < 6 || !name || !apellidos || !username || !patrocinador) {
            const missingFields = [
                !email && 'email',
                !password && 'password',
                password.length < 6 && 'password (min 6 characters)',
                !name && 'name',
                !apellidos && 'apellidos',
                !username && 'username',
                !patrocinador && 'patrocinador',
            ].filter(Boolean).join(', ');

            return res.status(400).json({ message: `The following fields are required: ${missingFields}` });
        }

        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        const sql = `
            INSERT INTO register_user (nombres, apellidos, usuario, contrasena, patrocinador)
            VALUES (?, ?, ?, ?, ?)
        `;

        connection.query(sql, [name, apellidos, username, hashedPassword, patrocinador], (err, results) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Internal Server Error', error: err.message });
            }
            return res.status(201).json({ message: "User registered successfully" });
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export default signup;
