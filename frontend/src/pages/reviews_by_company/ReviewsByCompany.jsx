import { useParams } from "react-router-dom";
import JobReviews from "../../components/jobReviews/JobReviews";
import ProductReviews from "../../components/productReviews/ProductReviews";
import "./reviewsByCompany.scss";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function ReviewsByCompany() {
  //acceder al parametro id de la empresa
  const { id } = useParams();
  //def url base del servidor backend
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  //definicion de funcion para realizar la peticion y listar las reseñas de productos de la empresa
  const getCustomerReviews = async () => {
    try {
      const res = await axiosInstance.get(
        `/server/reviewsByCompanies/getCustomerReviewsByCompany/${id}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //definicion de funcion para realizar la peticion y listar las reseñas laborales de la empresa
  const getJobReviews = async () => {
    try {
      const res = await axiosInstance.get(
        `/server/reviewsByCompanies/getJobReviewsByCompany/${id}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  //definicion de variable que guarda la lista de reseñas laborales obtenidas
  const [listJobReviews, setJobReviews] = useState([]);
  //definicion de variable que guarda la lista de reseñas de producto obtenidas
  const [listProductReviews, setProductReviews] = useState([]);

  //lista de reseñas laborales filtrada
  const [listJobReviews_filtered, setListJobReviews_filtered] = useState([]);
  //lista de reseñas productos filtrada
  const [listProductReviews_filtered, setListProductReviews_filtered] =
    useState([]);

  //variable para guardar la entrada del usuario
  const [searchInput, setSearchInput] = useState({
    search_input: "",
  });
  //funcion para actualizar el valor de la entrada del usuario
  const handleChange = (e) => {
    setSearchInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    //console.log(searchInput.search_input);
    console.log("valor capturado: ", e.target.value);
  };

  const handleClickSearch = () => {
    //validar si el campo de busqueda es vacio
    if (searchInput.search_input.trim() === "") {
      const l = [];
      setListProductReviews_filtered(l);
      setListJobReviews_filtered(l);
      return;
    }
    //tratamiento a la entrada del usuario
    const user_input = searchInput.search_input.trim().toLowerCase();
    //filtrar lista de reseñas laborales con la entrada del usuario (cargo laboral)
    const filteredJobReviews = listJobReviews.filter((review) =>
      review.Occupation.trim().toLowerCase().includes(user_input)
    );
    setListJobReviews_filtered(filteredJobReviews);
    //filtrar lista de reseñas de productos con la entrada del usuario (producto)
    const filteredCustomerReviews = listProductReviews.filter((review) =>
      review.Product_Name.trim().toLowerCase().includes(user_input)
    );
    setListProductReviews_filtered(filteredCustomerReviews);
  };

  //invocar funciones al momento de renderizar componente
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsC = await getCustomerReviews();
      setProductReviews(reviewsC);

      const reviewsJ = await getJobReviews();
      setJobReviews(reviewsJ);
    };

    fetchReviews();
  }, []);

  return (
    <div className="company-reviews">
      <div className="header">
        <h2>Aqui estan las valoraciones de la empresa seleccionada</h2>
      </div>
      <div className="search_input">
        <div className="input">
          <input
            type="text"
            name="search_input"
            value={searchInput.search_input}
            placeholder="filtra por cargo laboral o nombre de producto"
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <button className="button" onClick={handleClickSearch}>
            Buscar
          </button>
        </div>
      </div>
      {console.log("listProductReviews: ", listProductReviews)}
      {console.log("listJobReviews: ", listJobReviews)}

      {searchInput.search_input.trim() === "" ? (
        listProductReviews.length != 0 || listJobReviews.length != 0 ? (
          listProductReviews.length != 0 ? (
            <div className="container">
              <ProductReviews productReviews={listProductReviews} />
            </div>
          ) : listJobReviews.length != 0 ? (
            <div className="container">
              <JobReviews jobReviews={listJobReviews} />
            </div>
          ) : (
            <></>
          )
        ) : (
          <h3>En este momento no hay reseñas asociadas a la empresa</h3>
        )
      ) : listProductReviews_filtered.length != 0 ||
        listJobReviews_filtered.length != 0 ? (
        listJobReviews_filtered.length != 0 ? (
          <div className="container">
            <JobReviews jobReviews={listJobReviews_filtered} />
          </div>
        ) : listProductReviews_filtered.length != 0 ? (
          <div className="container">
            <ProductReviews productReviews={listProductReviews_filtered} />
          </div>
        ) : (
          <></>
        )
      ) : (
        <h3>Sin resultados</h3>
      )}
    </div>
  );
}

export default ReviewsByCompany;
