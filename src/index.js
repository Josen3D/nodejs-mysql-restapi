//Importamos app.js para usar las configuraciones creadas de la aplicacion
import app from "./app.js";
//Importamos el archivo config creado
import {PORT} from "./config.js";

//Ponemos a escuchar al servidor
app.listen(PORT);
console.log("Server running on port", PORT);
