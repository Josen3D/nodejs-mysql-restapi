//Importamos el modulo mysql2, para poder usar createPool, que nos permite crear un conjunto de conexiones
import {createPool} from 'mysql2/promise';

//Importamos las constantes de config
import { 
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
 } from "./config.js";

//Creamos la conexión, y la exportamos
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});
