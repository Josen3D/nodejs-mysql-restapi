//Importamos la conexion a la base de datos
import { pool } from "../db.js";
//Creamos una constante que hará la promesa de la solicitud, obteniendo esa solicitud y enviando la respuesta

//Obtenemos todos los datos que se encuentren en la tabla employee
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Obtenemos un dato de la tabla employee por su id
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee Not Found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Crea un empleado y lo inserta en la base de datos
export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      //Envia como respuesta al cliente los datos del empleado creado
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Actualiza un empleado de la base de datos
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    //Realiza una consulta para actualizar un elemento de la tabla. Si el valor es nulo o no se pasó ningun valor, dejará el valor que tenía anteriormente,
    //si se colocó un valor, se actualizará con esos nuevos valores
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Employee Not Found",
      });

    res.json("Employee Updated");
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

//Elimina un elemento de la tabla employee con el id indicado
export const deleteEmployee = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee Not Found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
