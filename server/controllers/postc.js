import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const getPosts = (req, res) => {
  const userId = req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("No estas logeado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token no valido!");

    console.log(userId);
    
    const q = 'SELECT * FROM Costumer_review WHERE User_idUser = ? AND Company_idCompany = ?';
    values = [userId, userInfo.idCompany];

    db.query(q, [values], (err,data) =>{
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    }); 

    
  })};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO Costumer_review(`Review_C`, `Score_R`, `Likes`, `Dislikes`, 'Available', 'User_idUser', 'Company_idCompany', 'Costumer_Reviewcol', 'Price_1_5', 'Service_1_5', 'Product_name') VALUES (?)";
    const values = [
      req.body.Review_C,
      req.body.Score_R,
      0,
      0,
      0,
      req.body.User_idUser,
      userInfo.idCompany,
      req.body.Costumer_Reviewcol,  
      req.body.Price_1_5,
      req.body.Service_1_5,
      req.body.Product_name
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("La reseña ha sido agregada.");
    });
  });
};
export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("No estas logeado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token no valido!");

    const q =
      "DELETE FROM Costumer_Review WHERE `idCostumer_Review`=? AND `User_idUser` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("La reseña ha sido eliminada.");
      return res.status(403).json("No tienes permiso para eliminar esta reseña.")
    });
  });
};
