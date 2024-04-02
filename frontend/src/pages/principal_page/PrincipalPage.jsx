import "./principalPage.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import LeftBar from "../../components/leftBar/LeftBar.jsx";
import RightBar from "../../components/rightBar/RightBar.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";

function PrincipalPage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <NavBar />

      <div style={{ display: "flex" }}>
        <LeftBar />
        {/*componente principal page*/}
        <div className="principalPage">
          <h1>Una comunidad surgida a partir de experiencias</h1>
        </div>

        <RightBar />
      </div>
    </div>
  );
}

export default PrincipalPage;
