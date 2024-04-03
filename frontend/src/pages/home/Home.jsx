import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./home.scss";

function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="banner1">
        <h1>Welcome, {currentUser.Name}</h1>
      </div>
    </div>
  );
}

export default Home;
