import { db } from "../connect.js";


export const getCompanys = (req, res) => {

      
      const q = 'SELECT * FROM Company WHERE Available=1 LIMIT 10 OFFSET 1';

  
      db.query(q, (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
        
      }); 
    };
