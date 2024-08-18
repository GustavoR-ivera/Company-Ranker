import { useState,useContext } from "react";
import { Helmet } from 'react-helmet';
import "./accountConfirmation.scss";
import axios from "axios";
import { AuthContext, AuthCodes } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import GoBack from "../../components/goBack/GoBack.jsx";

const AccountConfirmation = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  //console.log(err);
  
  const handleClick = async (e) => {
    e.preventDefault();
    const form = e.target.form;
    if (
      AuthCodes.includes(parseInt(form.Code.value))
    ) {
      navigate("/login")
  
    }else{
      setErr("Codigo de confirmacion incorrecto")
      return;
    }

    
  };

  return (
    <div className="register">
      <Helmet>
        <title>Company Ranker - Registro</title>
      </Helmet>
      <div className="card">
        <div className="header">
          
          <h1>Company Ranker</h1>
        </div>

        <p>Ingresa el codigo de confirmacion enviado a tu correo para activar tu cuenta</p>
        <form>
        <input name="Code" type="text" placeholder="Codigo de confirmacion" />
        <p className="error_general">{err}</p>
        <button onClick={handleClick}>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default AccountConfirmation;
