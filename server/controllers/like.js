import { db } from "../connect.js";

export function getLikesfromUser(req, res) {
    const q = "SELECT * FROM Likes WHERE userId = ?"
    db.query(q, [req.params.userId], (err, data) => {
       if(data) return res.status(200).send(data)

       else return res.status(404).send("No se encontraron likes para el usuario" + req.params.userId)
    });
}


export function addCostumerLike(req, res) {

    db.query("SELECT * FROM Likes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Dislikes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un like para este usuario y costumer")
    })

    const q = "INSERT INTO Likes (userId, reviewType ,costumerId ) VALUES (?, 'Costumer', ? )"  
            db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
                if(data) return res.status(200).send("Like agregado")
                else return res.status(404).send(err)
            }); 
}


export function addJobLike(req, res) {

    db.query("SELECT * FROM Likes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Dislikes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un like para este usuario y costumer")
    })

    const q = "INSERT INTO Likes (userId, reviewType , jobId ) VALUES (?, 'Job', ? )"  
            db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
                if(data) return res.status(200).send("Like agregado")
                else return res.status(404).send(err)
            });
}



export function addCostumerDislike(req, res) {

    db.query("SELECT * FROM Dislikes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Likes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un dislike para este usuario y costumer")
    })

    const q = "INSERT INTO Dislikes (userId, reviewType ,costumerId ) VALUES (?, 'Costumer', ? )"  
            db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
                if(data) return res.status(200).send("Dislike agregado")
                else return res.status(404).send(err)
            }); 
}


export function addJobDislike(req, res) {

    db.query("SELECT * FROM Dislikes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Likes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un Dislike para este usuario y costumer")
    })

    const q = "INSERT INTO Dislikes (userId, reviewType , jobId ) VALUES (?, 'Job', ? )"  
            db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
                if(data) return res.status(200).send("Dislike agregado")
                else return res.status(404).send(err)
            });
}

