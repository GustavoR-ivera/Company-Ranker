import  {db} from "../connect.js"
import bcrypt from "bcryptjs"



export const register = (req, res) => {


    //chequear si el email ya existe
    const q = "SELECT * FROM User where Email = ?"

    db.query(q,[req.body.Email], (err, data)=> {
        if(err) return res.status(500).send(err)
        if(data.length) return res.status(409).send("El email ya existe")
        //Crear nuevo usuario
        //hash password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.Password, salt)
        
       
        const q = "INSERT INTO User (`Email`, `Password`, `Name`, `Last_Name`, `Suscription_idSuscription` ) VALUES (?)"
        const values = [req.body.Email, hashedPassword, req.body.Name, req.body.Last_Name,10]
        

        db.query(q,[values], (err, data)=> {
            if(err) return res.status(500).send(err)
            return res.status(200 ).send("Usuario creado")
        })
    })




    

    //create new user
}
function NewSuscription(){
    db.query("INSERT Suscription (`Status`) VALUES (0)", (err, result) => {
        if (err) {
            return err;
        }

        db.query("SELECT MAX(idSuscription) FROM Suscription", (err, data) => {
            if (err) {
                
                return err;
            }

            console.log(data[0]['MAX(idSuscription)'])
            return data[0]['MAX(idSuscription)']
        })
    });
}
    


export const login = (req, res) => {

}


export const logout = (req, res) => {
    
 }