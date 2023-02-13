//Importamos el modulo dotenv instalado para poder crear y usar variables de entorno
import { config } from "dotenv";

//Llamamos la función config guardada de dotenv
config();

//Ahora podemos leer variables de entorno

//Exportamos las constantes
export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;