//Importamos la funcion pool que crea la conexion a la BD
import { pool } from "../db.js";

//Creamos una constante que hará la promesa de la solicitud, obteniendo esa solicitud y enviando la respuesta

export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 1+1 AS Result");
  res.json('Pong');
};
