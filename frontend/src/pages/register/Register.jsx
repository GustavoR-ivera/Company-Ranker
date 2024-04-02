import { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);
  console.log(err);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/server/auth/register", inputs);
      //si el registro es exitoso se redirige a la pagina de inicio
      //apartir de este punto, con que datos de usuario funciona la pagina?
      navigate("/home");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="up">
          <h1>Company Ranker</h1>
          <p>Registrate para empezar a compartir tus experiencias</p>
          <form>
            <input
              type="text"
              placeholder="Nombres"
              name="Name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Apellidos"
              name="Last_Name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="E-mail"
              name="Email"
              onChange={handleChange}
            />
            <p>
              Tu contraseña debe incluir letras, numeros y caracteres especiales
            </p>
            <input
              type="password"
              placeholder="Contraseña"
              name="Password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              name="confirmPasword"
              //onChange={handleChanges}
            />
            <p>
              Al dar click en registrarte estás aceptando nuestros terminos y
              condiciones y nuestras politicas de privacidad y nuestras
              politicas de cookies{" "}
            </p>

            {err && <span>Algo salió mal</span>}
            <button onClick={handleClick}>Regístrate</button>
            <p>
              ¿Ya tienes una cuenta?
              <a href="login">Ingresar</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
