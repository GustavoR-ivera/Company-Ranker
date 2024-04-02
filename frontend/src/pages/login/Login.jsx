import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
import GoBack from "../../components/goBack/GoBack.jsx";

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
      <div className="card">
        <div className="right">
        <GoBack />
          <h1>Company Ranker</h1>
          <form>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Iniciar sesión</button>
          </form>
          <a href="recovery">¿Has olvidado tu contraseña?</a>
          <p>
            ¿No tienes una cuenta?
            <a href="register">Registrarte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
