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
  const userId = req.params.id;
  //traer las reseñas laborales asociadas a un usuario especifico
  const q = 'SELECT * FROM Job_review WHERE User_idUser = ? limit 10';
  
      db.query(q, [userId], (err,data) =>{
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
    "INSERT INTO Job_review (`Created_At`, `Company_Name`, `Occupation` , `Review_J`, `Work_Env_Score`, `Growth_Opp_Score`,`Salary_Score`, `Available`, `User_idUser`, `Company_idCompany`) VALUES (?)";
  const values = [
    created_at,
    req.body.company_name,
    req.body.occupation_name,
    req.body.review_j,
    req.body.work_environment,
    req.body.growth_opp,
    req.body.salary,
    0,
    req.body.idUser,
    1,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("La reseña ha sido agregada.");
  });
};

  