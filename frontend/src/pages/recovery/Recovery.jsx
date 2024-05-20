import React from "react";
import "./recovery.scss"
import { Link } from 'react-router-dom';
import log from "../../assets/imagenes/logo.png";


const Recovery = () => {
    return (
        <div className = "recovery">
            <div className="recovery recovery-container"></div>
            <div className="card">
                <div className="left">
                <header className="header">
                    <img src={log} className="header-img" />
                    <h1 className="header-text">Company Ranker</h1>
                </header>
                    <form>
                        <input type="text" placeholder="E-mail"/>
                        <button>Recuperar contraseña</button>
                    </form>
                </div>
                <div className="right recovery-right">
                    <p>
                        <p2>¿Ya tienes una cuenta?</p2>
                            <Link to = "/login">
                                <button class = "login_recovery">Ingresar</button>
                            </Link>
                    </p>
                    <p>
                        <p2>¿No tienes una cuenta?</p2>
                            <Link to = "/register">
                                <button class = "register_recovery">Registrarte</button>
                            </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recovery