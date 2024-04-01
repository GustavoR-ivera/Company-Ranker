import { useState } from "react/cjs/react.production.min";
import "./register.scss"
import { Link } from 'react-router-dom';
import axios from "axios";


const Register = () => {

    const [inputs, setInputs] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword: ""
        
    })

    const [err, setErr] = useState(null)

    const handleChanges = e =>{
        setInputs(prev => ({...prev, [e.target.name]:e.target.value }))
    }


    console.log(inputs)

    const handleClick = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8080/server/auth/registrer", inputs)
        }catch(err){
            setErr(true)

        }
    }

    console.log(err)
    return (
        <div className = "register">
            <div className="card">
                <div className="up">
                    <h1>Company Ranker</h1>
                    <p>Registrate para empezar a compartir tus experiencias</p>
                    <form>
                        <input type="text" placeholder="Nombres" name="name" onChange ={handleChanges}/>
                        <input type="text" placeholder="Apellidos" name="lasName" onChange ={handleChanges}/>
                        <input type="email" placeholder="E-mail" name="email" onChange ={handleChanges}/>
                        <p>Tu contraseña debe incluir letras, numeros y caracteres especiales</p>
                        <input type="password" placeholder="Contraseña" name="password" onChange ={handleChanges}/>
                        <input type="password" placeholder="Confirmar contraseña" name="confirmPasword" onChange ={handleChanges}/>
                        <p>Al dar click en registrarte estás aceptando nuestros terminos y condiciones y nuestras politicas de privacidad y nuestras politicas de cookies </p>
                        <button onClick={handleClick}>Regístrate</button>
                        <p>
                            ¿Ya tienes una cuenta?
                            <a1>
                                <a href="login">Ingresar</a>
                            </a1>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;