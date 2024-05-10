import { db } from "../connect.js";
import {FRONTEND_URL} from "../config.js"


export const getPendingCustomerReviews = (req, res) => {
    //obtener todas las reseñas sin validacion
    const q = "SELECT idCustomer_Review, Company_Name, Product_Name, Review_C FROM Customer_Review WHERE Available = 0";

    db.query(q, (err, data) => {
      if (err){
        return res.status(500).send("Algo salió mal obteniendo las reseñas de producto pendientes");
      }
      else{
        return res.json(data);
      }
})
};

export const acceptCustomerReview = (req, res) => {
  const id = req.params.idReview;
  const comments = req.params.comments;
  //establecer fecha de aceptacion yy/mm/dd hh:mm:ss
  const d = Date.now();
  const date = new Date(d); 
  const accepted_at = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  //consulta bd
  const q = 'UPDATE Customer_Review SET Available = 1, Moderator_Comments = ?, Accepted_at = ? WHERE idCustomer_Review = ?'
  db.query(q, [comments, accepted_at, id], (err, data) => {
    if (err){
      return res.status(500).send("Algo salió mal editando la reseña");
    }
    else{
      return res.status(200).send("reseña aceptada");
    }
  })
};

export const rejectCustomerReview = (req, res) => {
  const id = req.params.idReview;
  const comments = req.params.comments;
  //establecer fecha de rechazo yy/mm/dd hh:mm:ss
  const d = Date.now();
  const date = new Date(d); 
  const rejected_at = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  //consulta bd
  const q = 'UPDATE Customer_Review SET Available = -1, Moderator_Comments = ?, Rejected_at = ? WHERE idCustomer_Review = ?'
  db.query(q, [comments, rejected_at, id], (err, data) => {
    if (err){
      return res.status(500).send("Algo salió mal editando la reseña");
    }
    else{
      return res.status(200).send("reseña rechazada");
    }
  })
};

export const getPendingJobReviews = (req, res) => {
    //obtener todas las reseñas sin validacion
  const q = "SELECT idJob_review, Company_Name, Occupation, Review_J FROM Job_review WHERE Available = 0";

  db.query(q, (err, data) => {
    if (err){
      return res.status(500).send("Algo salió mal obteniendo las reseñas laborales pendientes");
    }
    else{
      return res.json(data);
    }
  })
};

export const acceptJobReview = (req, res) => {
  const id = req.params.idReview;
  const comments = req.params.comments;
  //establecer fecha de aceptacion yy/mm/dd hh:mm:ss
  const d = Date.now();
  const date = new Date(d); 
  const accepted_at = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  //consulta bd
  const q = 'UPDATE Job_review SET Available = 1, Moderator_Comments = ?, Accepted_at = ? WHERE idJob_review = ?'
  db.query(q, [comments, accepted_at, id], (err, data) => {
    if (err){
      return res.status(500).send("Algo salió mal editando la reseña");
    }
    else{
      return res.status(200).send("reseña aceptada");
    }
  })
};

export const rejectJobReview = (req, res) => {
  const id = req.params.idReview;
  const comments = req.params.comments;
  //establecer fecha de rechazo yy/mm/dd hh:mm:ss
  const d = Date.now();
  const date = new Date(d); 
  const rejected_at = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  +" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  //consulta bd
  const q = 'UPDATE Job_review SET Available = -1, Moderator_Comments = ?, Rejected_at = ? WHERE idJob_review = ?'
  db.query(q, [comments, rejected_at, id], (err, data) => {
    if (err){
      return res.status(500).send("Algo salió mal editando la reseña");
    }
    else{
      return res.status(200).send("reseña rechazada");
    }
  })
};