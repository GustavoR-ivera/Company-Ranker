
import "./principalPage.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import LeftBar from "../../components/leftBar/LeftBar.jsx";
import RightBar from "../../components/rightBar/RightBar.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";

function PrincipalPage() {
  const {currentUser} = useContext(AuthContext);

  return (
    <div>
      {/*enviamos user como parametro a navbar*/}
      <NavBar/>

      <div style={{display:"flex"}}>
        <LeftBar />
        {/*componente principal page*/}
        <div className="principalPage">
          <h1>welcome, sign up for more</h1>
        </div>
          
        <RightBar/>
      </div>
    </div>
    );
  }

export default PrincipalPage;