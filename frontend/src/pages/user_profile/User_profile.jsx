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
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await axiosInstance.post("/change-password", {
        oldPassword,
        newPassword,
      });
      if (response.data.success) {
        alert("Contraseña cambiada con éxito");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
<div className="profile-container">
      <h1>Perfil</h1>
      <div className="my-info">
        <h3>Información personal</h3>
        <p>Aquí es donde se muestra tu información personal</p>
        <form>

          <label>
            Nombre
            <input type="text" value={currentUser.Name} readOnly />
          </label>
          <label>
            Apellidos
            <input type="text" value={currentUser.Last_Name} readOnly />
          </label>
          <label>
          Tipo de usuario: <input type="text" value={currentUser.Role === 'basic'
       ? '(Usuario estandar)'
          : currentUser.Role === 'admin'
       ? 'Usuario administrador'
         : '(Otro tipo de usuario)'} readOnly />
          </label>
          <label>
            Correo electrónico
            <input type="text" value={currentUser.Email} readOnly/>
          </label>
          <label>
            Número telefónico
            <input type="text" value={currentUser.P_Number} readOnly/>
          </label>
          <label>
            Suscripción
            <input type="text" value={currentUser.Subscription_idSubscription} readOnly />
          </label>
          <h3>Cambiar contraseña</h3>
<label>
  Contraseña antigua
  <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
</label>
<label>
  Nueva contraseña
  <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
</label>
<label>
  Confirmar nueva contraseña
  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
</label>
<button type="submit">Cambiar contraseña</button>
        </form>
      </div>
    </div>
  );

}

export default UserProfile;
