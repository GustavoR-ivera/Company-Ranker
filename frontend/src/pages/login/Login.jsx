import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
import GoBack from "../../components/goBack/GoBack.jsx";
import logo from "../../images/logo.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (inputs.email === "" || inputs.password === "") {
      setErr("Por favor, rellena todos los campos");
      return;
    }
    try {
      await login(inputs);
      //si el login es exitoso se redirige a la pagina de inicio
      navigate("/home");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <Helmet>
        <title>Ingresar</title>
      </Helmet>
      <div className="card">
        <div className="right">
          <GoBack />
          <Link to="/">
            <img src={logo} alt="CompanyRanker" draggable="false" />
          </Link>
          <h2>Company Ranker</h2>
          <form>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              required={true}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
              required={true}
            />
            <span>{err}</span>
            <button onClick={handleLogin}>Iniciar sesión</button>
          </form>
          <Link to="/recovery">¿Has olvidado tu contraseña?</Link>
          <p>
            ¿No tienes una cuenta?
            <Link to="/register">Registrarte</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
