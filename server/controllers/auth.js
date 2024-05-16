import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import App from "../../frontend/src/App.js"

export  const register = (req, res) => {
  //chequear si el email ya existe
  const q = "SELECT idUser, Name, Email FROM User where Email = ?";

  db.query(q, [req.body.Email],  async (err, data) => {
    if (err)
      return res.status(500).send("Algo salió mal al crear tu usuario_1");
    if (data.length) return res.status(409).send("El email ya está registrado");
    //json(data[0].Email);
    //Crear nuevo usuario
    //hash password

    //encriptacion contreseña
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.Password, salt);
       

  const sub =await insertSubscription();
  console.log(sub);
    const q =
      "INSERT INTO User (`Email`, `Password`, `Name`, `Last_Name`, `Subscription_idSubscription`, `Available`, `Role` ) VALUES (?)";
    const values = [
      req.body.Email,
      hashedPassword,
      req.body.Name,
      req.body.Last_Name,
      sub,    // suscripcion por defecto para indicar gratuidad
      1,      //available por defecto = 1 
      "basic", //rol por defecto = basic
    ];

    console.log(values);

    db.query(q, [values], (err, data) => {
      if (err){
        console.log(err);
        return res.status(500).send("Algo salió mal al crear tu usuario_2");}
      //devolver el id de usuario creado
      return res.status(200).send("Usuario creado");
    });
  });

  //create new user
};
async function insertSubscription() {
  try {
    const result = await new Promise((resolve, reject) => {
      db.query("INSERT Subscription (`Status_Subscription`) VALUES (0)", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    let sub = result.insertId;
    console.log(sub);
    return sub;
    // Aquí puedes trabajar con el valor de sub
  } catch (err) {
    console.log("error en la insercion");
    console.log(err);
  }
}



    // db.query("SELECT MAX(idSubscription) FROM Subscription", (err, data) => {
    //   if (err) {
    //     console.log("error en la consulta");
    //     console.log(err);
    //     return err;
    //   }

    //   const Suscription = data[0]["MAX(idSubscription)"];
    //   console.log(Suscription);
    //   return Suscription ;
    // });
//   });
// }

export const login = (req, res) => {
  const q = "SELECT * FROM User where Email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).send("Algó salió mal al iniciar sesión");
    if (data.length === 0)
      return res
        .status(404)
        .send("El correo no se encuentra en la base de datos");
    //Revisar posicion data 0
    console.log(data);
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].Password
    );
    //console.log(checkPassword);

    if (!checkPassword) return res.status(400).send("Contraseña incorrecta");

    //definir token 
    const token = jwt.sign({ id: data[0].idUser }, "secretkey");

    //campos que no se muestran
    const { Suscription_idSuscription, Password, Available, ...others } =
      data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => { 
  res
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("Logged out");
};
