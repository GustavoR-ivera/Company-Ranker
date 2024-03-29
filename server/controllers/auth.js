import  {db} from "../connect.js"



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

        const q = "SELECT INTO User (Email, Password, Name, Last_Name ) VALUES (?)"
        const values = [[req.body.Email, hashedPassword, req.body.Name, req.body.Last_Name]]

        db.query(q,[values], (err, data)=> {
            if(err) return res.status(500).send(err)
            return res.status(200 ).send("Usuario creado")
        })
    })




    

    //create new user
}


export const login = (req, res) => {

}


export const logout = (req, res) => {
    
 }