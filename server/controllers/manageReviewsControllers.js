import { db } from "../connect.js";


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

export const acceptCustomerReview = (req, res) => {};
    export const rejectCustomerReview = (req, res) => {};
    export const getPendingJobReviews = (req, res) => {};
    export const acceptJobReview = (req, res) => {};
    export const rejectJobReview = (req, res) => {};