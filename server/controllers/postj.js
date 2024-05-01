import { db } from "../connect.js";


//listar todas reseñas de productos 
export const getPosts = (req, res) => {
    //const userId = req.query.userId;
    //const token = req.cookies.accessToken;
  //   if (!token) return res.status(401).json("No estas logeado!");
  
  //   jwt.verify(token, "secretkey", (err, userInfo) => {
  //     if (err) return res.status(403).json("Token no valido!");
  
  //     console.log(userId);
      
      const q = 'SELECT * FROM Job_review WHERE Available=1 limit 10';
      //values = [userId, userInfo.idCompany];
  
      db.query(q, (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
        
      }); 
    };


export const getUserReviews = (req, res) => {
  //traer las reseñas laborales asociadas a un usuario especifico
};

  