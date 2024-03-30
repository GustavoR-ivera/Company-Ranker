import "./login.scss"
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className = "login">
            <div className="card">
                <div className="right">
                    <h1>Company Ranker</h1>
                    <form>
                        <input type="text" placeholder="E-mail"/>
                        <input type="password" placeholder="Contraseña"/>
                        <button>Iniciar sesión</button>
                    </form>
                    <a>
                        ¿Has olvidado tu contraseña?
                    </a>
                    <p>
                        ¿No tienes una cuenta? 
                        <a1>
                            <a href="register">Registrarte</a>
                        </a1>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login