import { db } from "../connect.js";

export const getCustomerReviewsByCompany = (req, res) => {
    //traer las reseñas de asociadas a una empresa
      const companyId = req.params.id;
      const q = 'SELECT * FROM Customer_Review WHERE Company_idCompany = ? order by Created_At desc limit 10';
      
        db.query(q, [companyId], (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
        });
    };

export const getJobReviewsByCompany = (req, res) => {
    //traer las reseñas de asociadas a una empresa
        const companyId = req.params.id;
        const q = 'SELECT * FROM Job_review WHERE Company_idCompany = ? order by Created_At desc limit 10';
        
            db.query(q, [companyId], (err,data) =>{
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
            
            });
    };