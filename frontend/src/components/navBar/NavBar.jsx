import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./navBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { Dropdown } from 'react-bootstrap';

// se debe pasar el dato que determina si el usuario tiene la sesion activa o no para determinar
// si se muestra el boton de login-registro o el nombre del usuario
function NavBar() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [viewDropdown, setViewDropdown] = useState(false);
  //validacion ruta "home"
  let path_home = "";
  if (currentUser) {
    path_home = "/home";
  } else {
    path_home = "/";
  }

  //validacion redireccionamiento "logo"
  let path_logo = "";
  if (currentUser) {
    path_logo = "/home";
  } else {
    path_logo = "/";
  }
  
  const navigate = useNavigate();

  const logout = async() => {
    //e.preventDefault();

    try {
      await axios.get("http://localhost:8800/server/auth/logout");
      localStorage.removeItem("user");
      setCurrentUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div className="navbar">
      <div className="left">
        {/*logo*/}
        <div className="logo">
          <Link to={path_logo}>
            <img src={logo} alt="CompanyRanker" draggable="false" />
          </Link>
          <span>Company Ranker</span>
        </div>

        {/*home*/}
        <Link to={path_home} style={{ textDecoration: "none" }}>
          Inicio
        </Link>

        {/*si el usuario que inicia sesion es admin o moderador podra ver estas dos secciones*/}
        {
          currentUser == null ?  (<> </>) :  (
            currentUser && (currentUser.Rol === "admin" || currentUser.Rol === "moderator") && (
              <>
                <Link to="#" style={{ textDecoration: "none" }}>
                  Gestionar Reseñas
                </Link>
  
                <Link to="#" style={{ textDecoration: "none" }}>
                  Gestionar empresas
                </Link>
              </>
            )
          )
          
        }

        {
          currentUser == null ?  (<> </>) :  (

          currentUser && (currentUser.Rol === "basic" || currentUser.Rol === "premium") && (
          <>
          <div className="left">
            <div className="seccion_reseñas"
              onMouseEnter={() => setViewDropdown(true)}
              onMouseLeave={() => setViewDropdown(false)}>

              <Dropdown show={viewDropdown} >
                <Dropdown.Toggle className="titulo_reseñas" variant="success" id="dropdown-basic">
                  Reseñas
                </Dropdown.Toggle>

              {viewDropdown && (
                <>
                <div className="menu_reseñas">

                <Dropdown.Menu >
                  <div className="menu_item">
                  <Dropdown.Item  href="/reseñas/mis_reseñas">Mis reseñas</Dropdown.Item>
                  </div>
                  <div className="menu_item">
                  <Dropdown.Item  href="/reseñas/reseñas_de_productos">Reseñas de productos</Dropdown.Item>
                  </div>
                  <div className="menu_item">
                  <Dropdown.Item  href="/reseñas/reseñas_laborales">Reseñas laborales</Dropdown.Item>
                  </div>
                </Dropdown.Menu>
                
                </div>
                </> 
              )}
              </Dropdown>

            </div>
            
              <Link to="/" style={{ textDecoration: "none" }}>
                Empresas
              </Link>
          </div>
          </>)
          )
        }


        { 
          currentUser == null ?  (
          <> 
          {/*Suscription*/}
          <Link to="/" style={{ textDecoration: "none" }}>
                Suscripción
              </Link>
              {/*About*/}
              <Link to="/about" style={{ textDecoration: "none" }}>
                Quiénes somos
              </Link>
          </>) : (
            (currentUser.Rol === "basic" || currentUser.Rol === "premium") && (
              <>
              {/*Suscription*/}
              <Link to="/" style={{ textDecoration: "none" }}>
                Suscripción
              </Link>
              {/*About*/}
              <Link to="/about" style={{ textDecoration: "none" }}>
                Quiénes somos
              </Link>
              </>
              )
          )
        }
        
        {/*search*/}
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Buscar" />
        </div>
      </div>

      {/*uso de condicional para mostrar diferentes opciones dependiendo de si hay una
      sesion activa*/}
      {
        currentUser ? (
          <>
            <div className="right">
              <div className="user">
                <span>{currentUser==null? "user" :currentUser.Name}</span>
              </div>
              <Link to="/" style={{ textDecoration: "none" }}>
                Perfil
              </Link>
              <Link onClick={logout} style={{ textDecoration: "none" }}>
                Salir
                </Link>
            </div>
          </>
        ) : (
          <>
            <div className="right">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span>Inicia sesión</span>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span>Registrate</span>
              </Link>
            </div>
          </>
        )
      }
    </div>
  );
}

export default NavBar;
