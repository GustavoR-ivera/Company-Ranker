import { useState } from "react";
import { Helmet } from "react-helmet";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoBack from "../../components/goBack/GoBack.jsx";
import logo from "../../images/logo.png";

const Register = () => {
  const [inputs, setInputs] = useState({
    Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [err, setErr] = useState(null);
  const [focused, setFocused] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };

  const handleTermsChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  const navigate = useNavigate();

  const handleFocus = (e) => {
    setFocused(true);
  };

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const form = e.target.form;
    if (!form.checkValidity()) {
      setErr("Por favor, rellena todos los campos correctamente_1");
      return;
    }
    if (
      inputs.Name === "" ||
      inputs.Last_Name === "" ||
      inputs.Email === "" ||
      inputs.Password === "" ||
      inputs.ConfirmPassword === ""
    ) {
      setErr("Por favor, rellena todos los campos_2");
      return;
    }

    if (inputs.Password !== inputs.ConfirmPassword) {
      setErr("Las contraseñas no coinciden");
      return;
    }

    if (!acceptedTerms) {
      setErr("Debes aceptar los términos y condiciones");
      return;
    }

    try {
      await axiosInstance.post("/server/auth/register", inputs);
      navigate("/accountConfirmation");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <Helmet>
        <title>Company Ranker - Registro</title>
      </Helmet>
      <div className="card">
        <div className="header">
          <GoBack />
          <div className="img">
            <img src={logo} alt="CompanyRanker" draggable="false" />
          </div>
          <h2>Company Ranker</h2>
        </div>

        <form>
          <p className="register-text">
            Registrate para empezar a compartir tus experiencias
          </p>
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
            Tu contraseña debe tener mínimo 9 caracteres (incluir letras
            minúsculas y mayúsculas, números y símbolos especiales (!@#$%^&*))
          </span>
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="ConfirmPassword"
            required={true}
            pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!#$%&^&*].{8,200}"
            onBlur={handleFocus}
            onChange={handleChange}
            focused={focused.toString()}
          />

          <div className="form-group">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">
              Acepto los <Link to="/tyc">términos y condiciones </Link> de Company Ranker.
            </label>
          </div>

          <p className="error_general">{err}</p>
          <button onClick={handleClick} disabled={!acceptedTerms}>
            Regístrate
          </button>
          <p>
            <Link to="/login">¿Ya tienes una cuenta?</Link>
          </p>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default Register;