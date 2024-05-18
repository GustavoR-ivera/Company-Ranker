import "./suscription.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import axios from "axios";

function Suscription() {
  const { currentUser } = useContext(AuthContext);

  const susId = currentUser.Subscription_idSubscription.toString();
  const susRole = currentUser.Role.toString();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  console.log(susId);
  console.log(susRole);

  
  console.log(susRole);
  if (susRole == "basic") {
    return noSub_View(susId);
  };
  if(susRole == "premium") {
    return Sub_View();
  }
}

  // pendiente para validar suscripcion actual del usuario
  // const sub = async () =>
  //   await axiosInstance.get(
  //     "/server/payments/getSubscription/" + susId.toString
  //   );
  // console.log(sub());

  // if(sub.data == 0){
function noSub_View(susId){
      return (
        <div class="price-table-wrapper">
      <div class="pricing-table">
        <h2 class="pricing-table__header">- BASICO -</h2>
        <h3 class="pricing-table__price">GRATIS</h3>
        <a class="pricing-table__actual">Plan Actual</a>
        <ul class="pricing-table__list">
          <li>Visualisaciones Limitadas</li>
          <li>3 Reseñas por Perfil</li>
          <li>ᵃ</li>
          <li>ᵃ</li>
        </ul>
      </div>
      <div class="pricing-table featured-table">
        <h2 class="pricing-table__header">- PREMIUM -</h2>
        <h3 class="pricing-table__price">$5000COP</h3>
        <a target="_blank" class="pricing-table__button" href={
                process.env.REACT_APP_SERVER_URL +
                "/server/payments/create-order/" +
                susId}>
          Unete!
        </a>
        <ul class="pricing-table__list">
          <li>Visuaizaciones Ilimitadas</li>
          <li>ᵃ</li>
          <li>ᵃ</li>
          <li>ᵃ</li>
        </ul>
      </div>

      </div>
   )
  
  };   

   function Sub_View(){

    return(
    <div className="sub-view">
    <div class="price-table-wrapper">
    <h1>Felicidades Ya Tienes el plan permium</h1>
    <h1>Disfruta de todas las ventajas que te ofrece</h1>
      <div class="pricing-table featured-table">
        <h2 class="pricing-table__header">- PREMIUM -</h2>
        <h3 class="pricing-table__price"> </h3>
        <a target="_blank" class="pricing-table__button" >
          Ya lo tienes
        </a>
        <ul class="pricing-table__list">
          <li>Visuaizaciones Ilimitadas</li>
          <li>ᵃ</li>
          <li>ᵃ</li>
          <li>ᵃ</li>
        </ul>
      </div>

      </div>
      </div>
   )}


export default Suscription;
