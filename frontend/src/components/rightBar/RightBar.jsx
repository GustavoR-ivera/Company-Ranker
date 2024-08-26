import "./rightBar.scss";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

function RightBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightBar">
      <div className="container">
        {/**validar si el usuario tiene sesion activa */}
        {currentUser ? (
          <>
            <div className="item">
              <div className="header">
                <a
                  href="https://manualtecnicocompanyrank.blogspot.com/"
                  target="_blank"
                >
                  Manual Tecnico
                </a>
                <a
                  href="https://drive.google.com/file/d/1whnHhO5hDOvw34wpN0WTC5vS9owQJGPC/view?usp=drive_link"
                  target="_blank"
                >
                  Manual de Ususario
                </a>
              </div>
              <ul>
                {/**
                 * implementar esto con una consulta a la bd usando
                 * currentUser
                 * {props.searches && 
                props.searches.map((search) => (
                  <li>{search}</li>
                ))} */}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="item">
              <div className="header">
                <LoginRoundedIcon />
                <span>Registrate para ver más</span>
              </div>
              <p>
                Consulta información de diversas empresas colombianas y sus
                principales valoraciones, ¡ no esperes más y registrate !
              </p>
            </div>
            <div className="item">
              <div className="header">
                <LoyaltyRoundedIcon />
                <span>Suscripción</span>
              </div>
              <p>
                Suscríbete a nuestra plataforma y obtén todos los beneficios de
                ser miembro.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RightBar;
