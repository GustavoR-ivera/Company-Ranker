import axios from "axios";
import { useEffect, useState } from "react";

function ManageProductReviews() {

  //definicion de funcion para realizar la peticion y listar las reseñas de productos pendientes
  const getPendingCustomerReviews = async() => {
    try {
      const res = await axios.get("http://localhost:8800/server/manage-reviews/manage-customer-reviews");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  const [pendingCustomerReviews, setPendingCustomerReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getPendingCustomerReviews();
      setPendingCustomerReviews(reviews);
    };
  
    fetchReviews();
  }, []);

  return (
    <div className="pending-reviews">
      <h1>Gestion de reseñas de productos</h1>
      <h3>aqui encontraras todas las reseñas de productos pendientes por validar</h3>
      {console.log(pendingCustomerReviews)}

      { pendingCustomerReviews == null ?  (<> </>) :  (
        
        pendingCustomerReviews.length > 0 ? (
          <div className="container">
              <table className="table">
                <thead className="header">
                  <tr>
                    <th>Id reseña</th>
                    <th>Empresa</th>
                    <th>Producto</th>
                    <th>Reseña</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingCustomerReviews && pendingCustomerReviews.map((review) => (
                  <tr key={review.idCustomer_Review}>
                    <td>{review.idCustomer_Review}</td>
                    <td>{review.Company_Name}</td>
                    <td>{review.Product_Name}</td>
                    <td>{review.Review_C}</td>
                    <td>
                      <a href="">Aceptar</a>
                      <a href="">Rechazar</a>
                      <a href="">Vincular empresa</a>
                    </td>
                  </tr>
                  ))}          
                </tbody>
              </table>
            </div>
        ):(
          <h3>No hay reseñas de productos pendientes</h3>
        )         
       )     
      }
    </div>
  );
}

export default ManageProductReviews;