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

  // pendiente para validar suscripcion actual del usuario
  // const sub = async () =>
  //   await axiosInstance.get(
  //     "/server/payments/getSubscription/" + susId.toString
  //   );
  // console.log(sub());

  // if(sub.data == 0){

  return (
    <div className="suscripcion">
      <div className="banner1">
        <h1>Consulta nuestros planes mensuales</h1>
      </div>
      <div className="banner2">
        <h3>¿Quieres ver mas?</h3>
        <p>Consigue tu cuenta premium y accede a mas reseñas</p>
      </div>

      <div className="redirect">
        <a
          href={
            process.env.REACT_APP_SERVER_URL +
            "/server/payments/create-order/" +
            susId
          }
        >
          Suscribirse
        </a>
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
