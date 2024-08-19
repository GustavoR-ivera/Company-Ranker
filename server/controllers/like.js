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
                db.query("UPDATE Costumer_review set Dislikes = Dislikes - 1 WHERE idCostumer_review = ?", [req.body.costumerId]);
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un like para este usuario y costumer")
    })

    const q = "INSERT INTO Likes (userId, reviewType ,costumerId ) VALUES (?, 'Costumer', ? )"  
            db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
                if(data) {

                    db.query("UPDATE Costumer_review set Likes = Likes + 1 WHERE idCostumer_review = ?", [req.body.costumerId], (err, data) => {
                        return res.status(200).send("Like agregado")
                    })
                    
                }
                else return res.status(404).send(err)
            }); 
}


export function addJobLike(req, res) {

    db.query("SELECT * FROM Dislikes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.jobId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Dislikes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.jobId], (err, data) => {
                db.query("UPDATE Job_review set Dislikes = Dislikes - 1 WHERE idJob_review = ?", [req.body.jobId]);
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un like para este usuario y costumer")
    })

    const q = "INSERT INTO Likes (userId, reviewType , jobId ) VALUES (?, 'Job', ? )"  
            db.query(q, [req.body.userId, req.body.jobId], (err, data) => {
                if(data) {

                    db.query("UPDATE Job_review set Likes = Likes + 1 WHERE idJob_review = ?", [req.body.jobId], (err, data) => {
                        return res.status(200).send("Like agregado")
                    })
                    
                }
                else return res.status(404).send(err)
            });
}

    



export function addCostumerDislike(req, res) {

    db.query("SELECT * FROM Likes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Likes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
                db.query("UPDATE Costumer_review set Likes = Likes - 1 WHERE idCostumer_review = ?", [req.body.costumerId]);
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un dislike para este usuario y costumer")
    })

    const q = "INSERT INTO Dislikes (userId, reviewType ,costumerId ) VALUES (?, 'Costumer', ? )"  
            db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
                if(data) {
                    db.query("UPDATE Costumer_review set Dislikes = Dislikes + 1 WHERE idCostumer_review = ?", [req.body.costumerId]);
                    return res.status(200).send("Dislike agregado")
                }
                else return res.status(404).send(err)
            }); 

}


export function addJobDislike(req, res) {

    db.query("SELECT * FROM Likes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.jobId], (err, data) => {
        if(data.length == 0) {
            db.query("DELETE FROM Likes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.jobId], (err, data) => {
                db.query("UPDATE Job_review set Likes = Likes - 1 WHERE idJob_review = ?", [req.body.jobId]);
                if(err) return res.status(404).send(err)
            });}
        else return res.status(404).send("Ya existe un Dislike para este usuario y costumer")
    })

    const q = "INSERT INTO Dislikes (userId, reviewType , jobId ) VALUES (?, 'Job', ? )"  
            db.query(q, [req.body.userId, req.body.jobId], (err, data) => {


                if(data) {
                    db.query("UPDATE Job_review set Dislikes = Dislikes + 1 WHERE idJob_review = ?", [req.body.jobId]);
                    return res.status(200).send("Dislike agregado")
                }
                else return res.status(404).send(err)
            });
}


export function deleteCostumerLike(req, res) {

    

    const q = "SELECT * FROM Likes WHERE userId = ? AND costumerId = ?"
    db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) return res.status(404).send("No existe un like para este usuario y costumer")
        else{
            db.query("DELETE FROM Likes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
            if(err) return res.status(404).send(err)
            else { 
                db.query("UPDATE Costumer_review set Likes = Likes - 1 WHERE idCostumer_review = ?", [req.body.costumerId]);
                return res.status(200).send("Like eliminado")
        }
        })}

    });
}

export function deleteJobLike(req, res) {

    const q = "SELECT * FROM Likes WHERE userId = ? AND jobId = ?"
    db.query(q, [req.body.userId, req.body.jobId], (err, data) => {
        if(data.length == 0) return res.status(404).send("No existe un like para este usuario y job")
        else{
            db.query("DELETE FROM Likes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.jobId], (err, data) => {
            if(err) return res.status(404).send(err)
            else{ 
                db.query("UPDATE Job_review set Likes = Likes - 1 WHERE idJob_review = ?", [req.body.jobId]);
                return res.status(200).send("Like eliminado")
            }
        })}

    });
}

export function deleteCostumerDislike(req, res) {

    const q = "SELECT * FROM Dislikes WHERE userId = ? AND costumerId = ?"
    db.query(q, [req.body.userId, req.body.costumerId], (err, data) => {
        if(data.length == 0) return res.status(404).send("No existe un dislike para este usuario y costumer")
        else{
            db.query("DELETE FROM Dislikes WHERE userId = ? AND costumerId = ?", [req.body.userId, req.body.costumerId], (err, data) => {
            if(err) return res.status(404).send(err)
            else {
                db.query("UPDATE Costumer_review set Dislikes = Dislikes - 1 WHERE idCostumer_review = ?", [req.body.costumerId]);
                return res.status(200).send("Dislike eliminado")
            }
        })}

    });
}

export function deleteJobDislike(req, res) {

    const q = "SELECT * FROM Dislikes WHERE userId = ? AND jobId = ?"
    db.query(q, [req.body.userId, req.body.jobId], (err, data) => {
        if(data.length == 0) return res.status(404).send("No existe un dislike para este usuario y job")
        else{
            db.query("DELETE FROM Dislikes WHERE userId = ? AND jobId = ?", [req.body.userId, req.body.jobId], (err, data) => {
            if(err) return res.status(404).send(err)
            else {
                db.query("UPDATE Job_review set Dislikes = Dislikes - 1 WHERE idJob_review = ?", [req.body.jobId]);
                return res.status(200).send("Dislike eliminado")
            }
        })}

    });
}
