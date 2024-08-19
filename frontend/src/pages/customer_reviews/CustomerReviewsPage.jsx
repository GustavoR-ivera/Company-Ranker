import "./customerReviewsPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductReviews from "../../components/productReviews/ProductReviews";

function CustomerReviewsPage() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas de productos
  const getCustomerReviews = async () => {
    try {
      const res = await axiosInstance.get("/server/postsc/");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  //definicion de variable que guarda la lista de reseñas de producto obtenidas
  const [listProductReviews_original, setListProductReviews_original] =
    useState([]);
  const [listProductReviews_filtrada, setListProductReviews_filtrada] =
    useState([]);

  const [searchInput, setSearchInput] = useState({
    search_input: "",
  });

  const handleChange = (e) => {
    setSearchInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //console.log(searchInput.search_input);
    console.log("valor capturado: ", e.target.value);
  };

  const handleClickSearch = () => {
    if (searchInput.search_input.trim() === "") {
      const l = [];
      setListProductReviews_filtrada(l);
      return;
    }
    //tratamiento a la entrada del usuario
    const product_name = searchInput.search_input.trim().toLowerCase();
    //filtrar lista de reseñas original con la entrada del usuario como nombre de producto
    const filteredReviews = listProductReviews_original.filter((review) =>
      review.Product_Name.trim().toLowerCase().includes(product_name)
    );
    // //si la lista de reseñas filtradas es vacia no actualizar la respectiva variable
    // if (filteredReviews.length == 0) {
    //   console.log(
    //     "no se encontraron reseñas con el nombre de producto ingresado"
    //   );
    //   //setListProductReviews_filtrada(null);
    //   return;
    // }
    console.log("lista reseñas filtradas: ", filteredReviews);
    //actualizar variable con las reseñas filtradas
    setListProductReviews_filtrada(filteredReviews);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getCustomerReviews();
      setListProductReviews_original(reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="customer-reviews-page">
      <div className="header">
        <h2>Aqui puedes ver todas las reseñas de productos</h2>
      </div>
      <div className="search_input">
        <div className="input">
          <input
            type="text"
            name="search_input"
            value={searchInput.search_input}
            placeholder="filtra por nombre de producto"
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <button onClick={handleClickSearch}>buscar</button>
        </div>
      </div>
      {console.log(searchInput.search_input)}

      {searchInput.search_input.trim() === "" ? (
        listProductReviews_original == null ? (
          <> </>
        ) : listProductReviews_original.length > 0 ? (
          <div className="container">
            <ProductReviews productReviews={listProductReviews_original} />
          </div>
        ) : (
          <div className="no-reviews">
            <h3>En este momento no hay reseñas de producto para visualizar.</h3>
          </div>
        )
      ) : listProductReviews_filtrada == null ? (
        <> </>
      ) : listProductReviews_filtrada.length > 0 ? (
        <div className="container">
          <ProductReviews productReviews={listProductReviews_filtrada} />
        </div>
      ) : (
        <div className="no-reviews">
          <h3>No hay reseñas de producto para visualizar.</h3>
        </div>
      )}
    </div>
  );
}

export default CustomerReviewsPage;
