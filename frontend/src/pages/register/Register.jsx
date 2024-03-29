import "./register.scss"
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className = "register">
            <div className="card">
                <div className="up">
                    <h1>Company Ranker</h1>
                    <p>Registrate para empezar a compartir tus experiencias</p>
                    <form>
                        <input type="text" placeholder="Nombres"/>
                        <input type="text" placeholder="Apellidos"/>
                        <input type="email" placeholder="E-mail"/>
                        <p>Tu contraseña debe incluir letras, numeros y caracteres especiales</p>
                        <input type="password" placeholder="Contraseña"/>
                        <input type="password" placeholder="Confirmar contraseña"/>
                        <p>Al dar click en registrarte estás aceptando nuestros terminos y condiciones y nuestras politicas de privacidad y nuestras politicas de cookies </p>
                        <button>Regístrate</button>
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