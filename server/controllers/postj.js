import {db} from "../connect"

//Revicion del tema de los post ya que lo cerramos a solo amigos o deben ser general revisar?
export const getPostsj =(req,res)=>{
    const q = 'SELECT p.*, u.id AS userId, name, profilePic FROM Job_review p JOIN users AS u ON (u.id = p.userId)';

    db.query(q, (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};