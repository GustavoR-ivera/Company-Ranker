import "./rightBar.scss";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


function RightBar() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="rightBar">
      <div className="container">
        {/**validar si el usuario tiene sesion activa */}
        {currentUser.access_token ? (
            <>
            <div className="item">
              <div className="header">
                <AccessTimeRoundedIcon />
                <span>Lastest searches</span>
              </div>
              <ul>
                Alkosto
                Exito
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
          ):(
            <>
            <div className="item">
              <div className="header">
                <LoginRoundedIcon />
                <span>Sign up to see more</span>
              </div>
              <p>
                In company ranker you will be able to see
                the best companies and reviews, don't wait any longer
                and sign up now.
              </p>
            </div>
            <div className="item">
              <div className="header">
                <LoyaltyRoundedIcon />
                <span>Subscription</span>
              </div>
              
              <p>
                You can now subscribe to our platform 
                and get all the benefits of being a member.
              </p>
            </div>

            </>
          )
        }
        


      </div>
    </div>
  );
}

export default RightBar;