import { Link } from "react-router-dom";
import "./navBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../images/logo.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

// se debe pasar el dato que determina si el usuario tiene la sesion activa o no para determinar
// si se muestra el boton de login-registro o el nombre del usuario
function NavBar() {

  const {currentUser} = useContext(AuthContext);

  //validacion ruta "home" 
  let path_home = "";
  currentUser.access_token ? 
  path_home = "/home"+"/:"+currentUser.id 
  : path_home = "/"

  //validacion redireccionamiento "logo"
  let path_logo = "";
  currentUser.access_token ? 
  path_logo = "/home"+"/:"+currentUser.id 
  : path_logo = "/"

  return (
    <div className="navbar">
      <div className="left">
        {/*logo*/}
        <div className="logo">
          <Link to={path_logo} >
            <img src={logo} alt="CompanyRanker" draggable="false" />
          </Link>
            <span>Company Ranker</span>
        </div>
          
        {/*home*/}
        <Link to={path_home} style={{textDecoration:"none"}}>
          Home
        </Link>

        {/*si el usuario inicia sesion podra ver estas dos secciones*/}
        {currentUser.access_token && (
        <>
          <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
              Reviews
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
              Companies
            </Link>
          </div>
        </>
        )}

        {/*Suscription*/}
        <Link to="/" style={{textDecoration:"none"}}>
          Suscription
        </Link>
        {/*About*/}
        <Link to="/about" style={{textDecoration:"none"}}>
          About us
        </Link>    
        {/*search*/}
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search"/>
        </div>
      </div>

      {/*uso de condicional para mostrar diferentes opciones dependiendo de si hay una
      sesion activa*/}
      {currentUser.access_token ? (
        <>
          <div className="right">
            <div className="user">
              <span>{currentUser.name}</span>
            </div>
            <Link to="/" style={{textDecoration:"none"}}>
              Profile
            </Link>
          </div>
        </>
      ) : (
        <>
      <div className="right">
        <Link to="/login" style={{textDecoration:"none"}}>
          <span>Login</span>
        </Link>
        <Link to="/register" style={{textDecoration:"none"}}>
          <span>Register</span>
        </Link>
      </div>
      </>
      )}

    </div>
  );
}

export default NavBar;