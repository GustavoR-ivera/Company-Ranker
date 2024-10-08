import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./navBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";
import { AuthContext } from "../../context/authContext";
import { useContext, useState, useEffect, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import User from "../../images/User.png";

// se debe pasar el dato que determina si el usuario tiene la sesion activa o no para determinar
// si se muestra el boton de login-registro o el nombre del usuario
function NavBar() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [viewDropdown, setViewDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Nuevo estado para el menú desplegable
  const menuRef = useRef(null);
  const [rightMenuOpen, setRightMenuOpen] = useState(false); // Estado para el menú desplegable de la derecha
  const rightMenuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  const toggleRightMenu = () => {
    setRightMenuOpen(!rightMenuOpen);
  };

  const toggleDropdown = () => {
    setViewDropdown(!viewDropdown);
  };

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (rightMenuRef.current && !rightMenuRef.current.contains(event.target)) {
        setRightMenuOpen(false);
      }
      if (!event.target.closest('.seccion_reseñas')) {
        setViewDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const logout = async () => {
    //e.preventDefault();

    try {
      await axiosInstance.get("/server/auth/logout");
      localStorage.removeItem("user");
      setCurrentUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div ref={menuRef} className={`left ${menuOpen ? "open" : ""}`}>
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
        {currentUser == null ? (
          <> </>
        ) : (
          currentUser &&
          (currentUser.Role === "admin" || currentUser.Role === "moderator") && (
            <>
              <div className="seccion_reseñas">
                <Dropdown show={viewDropdown}>
                  <Dropdown.Toggle
                    className="titulo_reseñas"
                    variant="success"
                    id="dropdown-basic"
                    onClick={toggleDropdown}
                  >
                    Gestionar reseñas
                  </Dropdown.Toggle>

                  {viewDropdown && (
                    <>
                      <div className="menu_reseñas open">
                        <Dropdown.Menu>
                          <div className="menu_item">
                            <Dropdown.Item>
                              <Link to="/gestionar_resenas/resenas_productos">
                                Reseñas productos
                              </Link>
                            </Dropdown.Item>
                          </div>
                          <div className="menu_item">
                            <Dropdown.Item>
                              <Link to="/gestionar_resenas/resenas_laborales">
                                Reseñas laborales
                              </Link>
                            </Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </div>
                    </>
                  )}
                </Dropdown>
              </div>
            </>
          )
        )}

        {
          //si el usuario que inicia sesion es basico o premium podra ver esta seccion
          currentUser == null ? (
            <> </>
          ) : (
            currentUser &&
            (currentUser.Role === "basic" || currentUser.Role === "premium") && (
              <>
                <div className="seccion_reseñas">
                  <Dropdown show={viewDropdown}>
                    <Dropdown.Toggle
                      className="titulo_reseñas"
                      variant="success"
                      id="dropdown-basic"
                      onClick={toggleDropdown}
                    >
                      Reseñas
                    </Dropdown.Toggle>

                    {viewDropdown && (
                      <>
                        <div className="menu_reseñas open">
                          <Dropdown.Menu>
                            <div className="menu_item">
                              <Dropdown.Item>
                                <Link to="/resenas/mis_resenas">
                                  Mis reseñas
                                </Link>
                              </Dropdown.Item>
                            </div>
                            <div className="menu_item">
                              <Dropdown.Item>
                                <Link to="/resenas/resenas_de_productos">
                                  Reseñas de productos
                                </Link>
                              </Dropdown.Item>
                            </div>
                            <div className="menu_item">
                              <Dropdown.Item>
                                <Link to="/resenas/resenas_laborales">
                                  Reseñas laborales
                                </Link>
                              </Dropdown.Item>
                            </div>
                          </Dropdown.Menu>
                        </div>
                      </>
                    )}
                  </Dropdown>
                </div>

                <Link to="/Empresas" style={{ textDecoration: "none" }}>
                  Empresas
                </Link>
              </>
            )
          )
        }

        {currentUser == null ? (
          <>
            {/*Suscription*/}
            <Link to="/register" style={{ textDecoration: "none" }}>
              Suscripción
            </Link>
            {/*About*/}
            <Link to="/about" style={{ textDecoration: "none" }}>
              Quiénes somos
            </Link>
          </>
        ) : (
          (currentUser.Role === "basic" || currentUser.Role === "premium") && (
            <>
              {/*Suscription*/}
              <Link to="/Suscripcion" style={{ textDecoration: "none" }}>
                Suscripción
              </Link>
              {/*About*/}
              <Link to="/about" style={{ textDecoration: "none" }}>
                Quiénes somos
              </Link>
            </>
          )
        )}
      </div>

      {/*uso de condicional para mostrar diferentes opciones dependiendo de si hay una
      sesion activa*/}
      <button className="menu-button" onClick={toggleRightMenu}>
        <img src={User} alt="User Icon" className="user-icon" />
      </button>
      <div ref={rightMenuRef} className={`right ${rightMenuOpen ? "open" : ""}`}>
        {currentUser ? (
          <>
            <div className="user">
            <span>
          {currentUser.Name}
          {currentUser && currentUser.Role === "premium" && (
            <span className="premium-badge">Premium</span>
          )}
        </span>
            </div>
            <Link to="/perfil" style={{ textDecoration: "none" }}>
              Perfil
            </Link>
            <Link onClick={logout} style={{ textDecoration: "none" }}>
              Salir
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Inicia sesión</span>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span>Registrate</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;