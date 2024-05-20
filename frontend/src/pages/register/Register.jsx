import { useState } from "react";

import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoBack from "../../components/goBack/GoBack.jsx";

const Register = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
  });

  const [err, setErr] = useState(null);

  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //console.log(inputs);
  const navigate = useNavigate();

  const handleFocus = (e) => {
    setFocused(true);
  };

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      inputs.Name === "" ||
      inputs.Last_Name === "" ||
      inputs.Email === "" ||
      inputs.Password === ""
    ) {
      setErr("Por favor, rellena todos los campos");
      return;
    }
    try {
      await axiosInstance.post("http://localhost:8800/server/auth/register", inputs);
      //si el registro es exitoso se redirige a la pagina de inicio
      //apartir de este punto, con que datos de usuario funciona la pagina?
      //al redireccionar a login, actualizamos el estado de currentUser el cual podra ser usado
      //en los demas componentes
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="header">
          <GoBack />

          <h1>Company Ranker</h1>
        </div>

        <form>
          <p className="register-text">Registrate para empezar a compartir tus experiencias</p>
          <input
            type="text"
            placeholder="Nombres"
            name="Name"
            required={true}
            pattern="[A-Za-z]{1,40}"
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>El nombre debe contener entre 1-40 caracteres de longitud</span>
          <input
            type="text"
            placeholder="Apellidos"
            name="Last_Name"
            required={true}
            pattern="[A-Za-z]{1,40}"
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>
            El apellido debe contener entre 1-40 caracteres de longitud
          </span>
          <input
            type="email"
            placeholder="E-mail"
            name="Email"
            required={true}
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>Ingresa un correo válido</span>
          <input
            type="password"
            placeholder="Contraseña"
            name="Password"
            required={true}
            pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!#$%&^&*].{8,200}"
            onChange={handleChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>
            Tu contraseña debe tener mínimo 8 caracteres (incluir letras
            minúsculas y mayúsculas, números y símbolos especiales)
          </span>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="confirmPasword"
            required={true}
            pattern={inputs.Password}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span>Las contraseñas no coinciden</span>
          <p2 className = "terms-text">
            Al dar click en registrarte estás aceptando nuestros <a href="/tyc">términos y
            condiciones</a> políticas de privacidad y manejo de cookies{" "}
          </p2>
          <p className="error_general">{err}</p>
          <button onClick={handleClick}>Regístrate</button>
          <p>
            <a href="login">¿Ya tienes una cuenta?</a>
          </p>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default Register;
