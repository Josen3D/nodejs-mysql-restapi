//Importamos el módulo Router
import { Router } from "express";
//Importamos los controladores de empleados
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

//Creamos un enrutador
const router = Router();

//Creamos los métodos http para manejar las solicitudes
router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

//Exportamos el router
export default router;
