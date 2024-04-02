import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

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

      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="right">
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
            <button onClick={handleLogin}>Iniciar sesión</button>
          </form>
          <a>¿Has olvidado tu contraseña?</a>
          <p>
            ¿No tienes una cuenta?
            <a1>
              <a href="register">Registrarte</a>
            </a1>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
