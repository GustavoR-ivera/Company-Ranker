import "./suscription.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import axios from "axios";

function Suscription() {
  const { currentUser } = useContext(AuthContext);

  const susId = currentUser.Subscription_idSubscription.toString();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  const sub = async () =>
    await axiosInstance.get(
      "/server/payments/getSubscription/" + susId.toString
    );
  console.log(sub());

  // if(sub.data == 0){

  return (
    <div>
      <div style={{ display: "flex" }}>
        {/*Componente Precios*/}
        <div className="Suscripcion">
          <div className="banner1">
            <h1>Una comunidad surgida a partir de tus experiencias</h1>
          </div>
          <div className="banner2">
            <h3>¿Quieres ver mas?</h3>
            <p>Consigue tu cuenta premium y accede a mas reseñas</p>
          </div>
          <a
            href={
              process.env.REACT_APP_SERVER_URL +
              "/server/payments/create-order/" +
              susId
            }
          >
            <button>Accede</button>
          </a>
        </div>
      </div>
    </div>
  );

  // }if (sub.data == 1){

  //   return (
  //     <div>

  //       <div style={{ display: "flex" }}>

  //         {/*Componente Precios*/}
  //         <div className="Suscripcion">
  //           <div className="banner1">
  //             <h1>Felicidades ya tienes una Suscripcion Premium</h1>

  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  //   }
}

export default Suscription;
