import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const getUserReviews = (req, res) => {
  //traer las reseñas de productos asociadas a un usuario especifico
    const userId = req.params.id;
    //traer las reseñas laborales asociadas a un usuario especifico
    const q = 'SELECT * FROM Customer_Review WHERE User_idUser = ? order by Created_At desc';
    
        db.query(q, [userId], (err,data) =>{
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
          
        });
  };

//listar todas reseñas de productos 
export const getPosts = (req, res) => {
  //const userId = req.query.userId;
  //const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("No estas logeado!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token no valido!");

//     console.log(userId);
    
    const q = 'SELECT * FROM Customer_Review WHERE Available=1 order by Created_At desc';
    //values = [userId, userInfo.idCompany];

    db.query(q, (err,data) =>{
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    }); 
  };

export const addPost = (req, res) => {

    //establecer fecha de creacion yy/mm/dd hh:mm:ss
    const d = Date.now();
    const date = new Date(d); 
    const created_at = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
    +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    const q =
      "INSERT INTO Customer_Review (`Created_At`, `Company_Name`, `Product_Name` , `Review_C`, `Quality_Score`, `Price_Score`,`Service_Score`, `Available`, `User_idUser`, `Company_idCompany`) VALUES (?)";
    const values = [
      created_at,
      req.body.company_name,
      req.body.product_name,
      req.body.review_c,
      req.body.quality_score,
      req.body.price_score,
      req.body.service_score,
      0,
      req.body.idUser,
      1,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("La reseña ha sido agregada.");
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
