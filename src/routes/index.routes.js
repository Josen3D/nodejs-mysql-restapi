//Importamos el módulo Router
import { Router } from "express";
//Importamos los controladores de index
import { ping } from "../controllers/index.controller.js";

//Creamos un enrutador
const router = Router();

//Creamos una llamada a la base de datos usando la conexion creada
router.get("/ping", ping);

//Exportamos el router
export default router;
