
import "./principalPage.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import LeftBar from "../../components/leftBar/LeftBar.jsx";
import RightBar from "../../components/rightBar/RightBar.jsx";

function PrincipalPage(props) {
  return (
    <div>
      {/*enviamos user como parametro a navbar*/}
      <NavBar user = {props.user}/>

      <div style={{display:"flex"}}>
        <LeftBar />
        {/*componente principal page*/}
        <div className="principalPage">
          <h1>welcome, sign up for more</h1>
        </div>
          
        <RightBar user={props.user} searches={props.searches} />
      </div>
    </div>
    );
  }

export default PrincipalPage;