//Importamos el módulo de express
import express from "express";
//Importamos las rutas de empleados
import employeesRoutes from "./routes/employees.routes.js";
//Importamos las rutas de index
import indexRoutes from "./routes/index.routes.js";

//Creamos la aplicsacion de expres y la guardamos en app
const app = express();

//USamos el middleware ára poder manejar objetos json enviados por el cliente
app.use(express.json());

//Usamos la aplicación de express para indicar las rutas que usaremos, o el routing usado
app.use("/api", employeesRoutes);
app.use("/api", indexRoutes);

//Si la ruta solicitada no existe en la api, devuelve un mensaje indicando que nno se encontró
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

//Exportamos el archivo app para usarlo en el index
export default app