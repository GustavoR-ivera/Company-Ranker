import { db } from "../connect.js";
import jwt from 'jsonwebtoken'; // Necesitarás instalar esta librería

export const getUserProfile = (req, res) => {
  // Extrae el token de los encabezados de la solicitud
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Verifica el token y obtén el ID del usuario
  let userId;
  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Reemplaza 'your-secret-key' con tu clave secreta real
    userId = decoded.id;
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }

  // Realiza la consulta a la base de datos
  const q = 'SELECT * FROM Users WHERE id = ?';
  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};