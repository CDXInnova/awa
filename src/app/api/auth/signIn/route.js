import { NextApiResponse } from 'next';
import { connection } from '../../../../libs/mysql.js';
import crypto from 'crypto';

async function login(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { usuario, contrasena } = req.body;

        if (!usuario || !contrasena) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const hashedPassword = crypto.createHash('sha256').update(contrasena).digest('hex');
        const query = `SELECT * FROM register_user WHERE usuario = ? AND contrasena = ?`;

        connection.query(query, [usuario, hashedPassword], (err, results) => {
            if (err) {
                console.error('Error:', err);
                return res.status(500).json({ message: 'Internal Server Error', error: err.message });
            } else if (results.length === 0) {
                return res.status(401).json({ message: 'Invalid credentials' });
            } else {
                const user = results[0];
                return res.status(200).json({ message: 'User authenticated', user });
            }
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export default login;
