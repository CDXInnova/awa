import mysql from 'mysql';

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inaway_system'
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida.');
});

// Función para buscar un usuario por nombre de usuario y contraseña
function findUserByUsernameAndPassword(username, password, callback) {
  const query = `SELECT * FROM register_user WHERE username = ? AND contrasena = ?`;
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (results.length === 0) {
      // No se encontró ningún usuario con las credenciales proporcionadas
      callback(null, null);
      return;
    }
    // Se encontró un usuario con las credenciales proporcionadas
    const user = results[0];
    callback(null, user);
  });
}

// Exportar la conexión y la función para su uso en otras partes de la aplicación
export { connection, findUserByUsernameAndPassword };
