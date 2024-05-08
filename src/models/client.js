import { findUserByUsernameAndPassword } from '../libs/mysql.js';

// Ejemplo de autenticación de usuario
const username = 'nombre_de_usuario';
const password = 'contraseña';

findUserByUsernameAndPassword(username, password, (err, user) => {
  if (err) {
    console.error('Error al autenticar al usuario:', err);
    return;
  }
  if (!user) {
    console.log('Credenciales incorrectas. El usuario no existe o la contraseña es incorrecta.');
    return;
  }
  console.log('Usuario autenticado:', user);
});
