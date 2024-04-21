import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./home.scss";
import NewReview from "../../components/newReview/NewReview";

function Home() {
  //validar que currentUser exista antes de acceder a sus atributos
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="banner1">
        <h1>Welcome, {currentUser == null ? "user" : currentUser.Name}</h1>
      </div>
      <NewReview />
    </div>
  );
}

export default Home;
