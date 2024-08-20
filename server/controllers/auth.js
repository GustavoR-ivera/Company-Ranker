import { db, transporter } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//import App from "../../frontend/src/App.js"

export  const register = (req, res) => {
  //chequear si el email ya existe
  const AuthCodes = [154685 ,203471, 368917, 476231, 547963, 685479, 741256, 876325, 903247]
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
      confirmationmMail(req.body.Name, req.body.Email, AuthCodes[Math.floor(Math.random() * AuthCodes.length)]);
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
    const { Password, Available, ...others } =
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


// async..await is not allowed in global scope, must use a wrapper
async function confirmationmMail(name, email, code) {
  // send mail with defined transport object


  var welcomeEmail = '<head>\
  <meta charset="UTF-8">\
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">\
  <title>Welcome </title>\
  <style>\
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;600&display=swap");\
\
    body,\
    h1,\
    h2,\
    h3,\
    h4,\
    h5,\
    h6,\
    p,\
    div {\
      margin: 0;\
      padding: 0;\
    }\
\
    body {\
      background-color: #f4f4f4;\
      /* Light mode background color */\
      color: #333;\
      /* Light mode text color */\
      font-family: "Outfit", sans-serif;\
      line-height: 30px;\
      font-size: 15px;\
      font-weight: 300;\
    }\
\
    :root {\
      --dark-color: black;\
      --light-color: white;\
    }\
\
    svg {\
      fill: var(--dark-color);\
      /* Default color for dark mode */\
    }\
\
    #bottom {\
      padding: 0px auto;\
      margin: 10px auto;\
      font-size: 14px;\
      line-height: 24px;\
      font-weight: 300;\
    }\
\
    footer {\
      margin-top: 0 !important;\
    }\
\
    .container {\
      max-width: 751px;\
      margin: 0 auto;\
    }\
\
    .header-img {\
      width: 100%;\
      height: auto;\
      display: block;\
    }\
\
    h2 {\
      font-size: 24px;\
    }\
\
    .content {\
      max-width: 651px;\
      margin: 15px auto 0 auto;\
      line-height: 30px;\
      padding: 18px;\
    }\
\
    #reason {\
      padding: 1px;\
      background-color: #E7FFF9;\
      border-radius: 10px;\
      font-weight: 400;\
    }\
\
    #reason p {\
      padding: 0px 10px;\
    }\
\
    .value {\
      font-weight: 600 !important;\
    }\
\
    @media (prefers-color-scheme: dark) {\
      body {\
        background-color: #1a1a1a;\
        /* Dark mode background color */\
        color: #ffffff;\
        /* Dark mode text color */\
      }\
\
      hr {\
        border-color: hsla(0, 0%, 100%, 0.3);\
      }\
\
      svg {\
        fill: var(--light-color);\
        /* Color for light mode */\
      }\
\
      #bottom {\
        font-weight: light;\
        color: hsla(0, 0%, 100%, 0.3) !important;\
      }\
\
      #reason {\
        background-color: #323232;\
        border-radius: 10px;\
      }\
    }\
  </style>\
</head>\
\
<body>\
  <header class="container welcome">\
    <img src="https://i.imgur.com/IJ6gqRO.png" alt="Header Image" class="header-img">\
  </header>\
  <main class="container">\
    <div class="content">\
      <p> Hola '+ name +' </p>\
      <br />\
      <p>Bienvenido a Company Ranker, estamos emocionados de tenerte aqui.</p>\
      <br />\
      <p>\
        Antes de disfrutar de las ventajas de nuestra plataforma tienes que verificar tu cuenta\
      </p>\
\
      <br />\
      <p> Este es el codigo de confirmacion para ingresar</p>\
      <br>\
      <p href="https://bitnob.page.link/email" style="background: #3B38AB; text-decoration: none; color: #111; height: 50px; \padding: 15px 18px; border-radius: 6px; font-weight: 600; text-align: center;">'+code+'</p>\
      <br />\
      <br />\
      <p>\
        \
        </svg>\
      </p>\
      <br />\
      <p> El equipo de Company Ranker</p>\
      <br />\
\
      <hr />\
      <br />\
      <div id="bottom">\
        <p style="margin-bottom: 5px;"> Copyright &copy; 2024 Company Ranker, Todos los derechos reservados </p>\
      </div>\
      <div style="text-align: justify;width: 100%;">\
        <p style="display: inline-block; font-size: 16px; line-height: initial; width: 10%; "> <a href="https://web.facebook.com/\BitnobOfficial/" style="color: inherit;"><i class="fa-brands fa-facebook"></i></a> </p>\
        <p style="display: inline-block; font-size: 16px; line-height: initial; width: 10%;"> <a href="https://twitter.com/\Bitnob_official" style="color: inherit;"><i class="fa-brands fa-x-twitter"></i></a> </p>\
        <p style="display: inline-block; font-size: 16px; line-height: initial; width: 10%;"> <a href="https://www.instagram.com/bitnob/\" style="color: inherit;"><i class="fa-brands fa-instagram"></i></a> </p>\
      </div>\
    </div>\
  </main>\
</body>\
'

  const info = await transporter.sendMail({
    from: '"Company Ranker" <CompanyRanker@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Te damos la bienvenida a Company Ranker", // Subject line
    text: "Hello world?", // plain text body
    html: welcomeEmail, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}



