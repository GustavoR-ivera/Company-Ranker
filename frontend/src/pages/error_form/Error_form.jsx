import { useContext, useState } from "react";
import "./error_form.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";
import GoBack from "../../components/goBack/GoBack.jsx";
import logo from "../../images/logo.png";
import axios from "axios";

const Error_Form = () => {
  

  const [inputs, setInputs] = useState({
    email: "",
    error_comment: "",
    userId: 4,
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (inputs.email === "" || inputs.error_comment === "") {
      setErr("Por favor, rellena todos los campos");
      return;
    }
    try {
      await axiosInstance.post("/server/errors", inputs);
      navigate("/home");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="error_form">
      <div className="card">
        <div className="right">
          <GoBack />
          <Link to="/">
            <img src={logo} alt="CompanyRanker" draggable="false" />
          </Link>
          <h1>Solucion de Problemas</h1>
          <form>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              required={true}
              onChange={handleChange}
            />
            <textarea
              cols="15"
              rows="3"
              placeholder="Comentario"
              name="error_comment"
              required={true}
              onChange={handleChange}
            ></textarea>
            <span>{err}</span>
            <button onClick={handleForm}>Enviar Comentario</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Error_Form;
