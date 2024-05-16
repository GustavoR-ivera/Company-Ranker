import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./user_profile.scss";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";

// se debe pasar el dato que determina si el usuario tiene la sesion activa o no para determinar
// si se muestra el boton de login-registro o el nombre del usuario
function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [viewDropdown, setViewDropdown] = useState(false);
  

  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  return (
    <div className="user-profile">
      <h3>
        <p>Nombre: <input type="text" value={currentUser.Name} readOnly />
        </p>
        <p>Apellidos: <input type="text" value={currentUser.Last_Name} readOnly />
        </p>
        <p>Tipo de usuario: <input type="text" value={currentUser.Role === 'basic'
       ? '(Usuario estandar)'
          : currentUser.Role === 'admin'
       ? 'Usuario administrador'
         : '(Otro tipo de usuario)'} readOnly />
         </p>
      
      <p>Correo electrónico: <input type="text" value={currentUser.Email} readOnly /></p>
      <p>Número telefónico: <input type="text" value={currentUser.P_Number} readOnly /></p>
      <p>Suscripción: <input type="text" value={currentUser.Subscription_idSubscription} readOnly /></p>
      </h3>
      <button className="edit-password-btn">Modificar contraseña</button>
    </div>
  );

}

export default UserProfile;
