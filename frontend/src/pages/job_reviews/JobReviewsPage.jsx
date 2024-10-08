import axios from "axios";
import { useEffect, useState } from "react";
import JobReviews from "../../components/jobReviews/JobReviews";
import "./jobReviewsPage.scss";

function JobReviewsPage() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas laborales
  const getJobReviews = async () => {
    try {
      const res = await axiosInstance.get("/server/postsj/");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //definicion de variable que guarda la lista de reseñas laborales obtenidas
  const [listJobReviews_original, setListJobReviews_original] = useState([]);
  const [listJobReviews_filtrada, setListJobReviews_filtrada] = useState([]);

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
      setListJobReviews_filtrada(l);
      return;
    }
    //tratamiento a la entrada del usuario
    const data_capturada = searchInput.search_input.trim().toLowerCase();
    //filtrar lista de reseñas original con la entrada del usuario como nombre de producto
    const filteredReviews = listJobReviews_original.filter((review) =>
      review.Occupation.trim().toLowerCase().includes(data_capturada)
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
    setListJobReviews_filtrada(filteredReviews);
  };

  // const handleFilter = (event) => {
  //   const selectedOption = Number(event.target.value);
  //   console.log(selectedOption);
  //   const filteredReviews_1 = listJobReviews_original.filter(
  //     (review) => review.Work_Env_Score === selectedOption
  //   );
  //   const filteredReviews_2 = listJobReviews_original.filter(
  //     (review) => review.Growth_Opp_Score === selectedOption
  //   );
  //   const filteredReviews_3 = listJobReviews_original.filter(
  //     (review) => review.Salary_Score === selectedOption
  //   );

  //   setListJobReviews_filtrada(
  //     filteredReviews_1 + filteredReviews_2 + filteredReviews_3
  //   );
  // };

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getJobReviews();
      setListJobReviews_original(reviews);
    };

    fetchReviews();
  }, []);

  console.log(listJobReviews_original);

  return (
    <div className="job-reviews">
      <div className="header">
        <h2>Aqui puedes ver todas las reseñas laborales</h2>
        <div className="search_input">
          <input
            type="text"
            name="search_input"
            value={searchInput.search_input}
            placeholder="filtra por cargo laboral"
            onChange={handleChange}
          />
          <button onClick={handleClickSearch}>Buscar</button>
        </div>
        <div className="filter">
          <div className="filter-info">
            <span>Filtra por valoraciòn</span>
          </div>
          <div className="options">
            <select name="filter" id="filter">
              <option value="5">Excelente</option>
              <option value="4">Buena</option>
              <option value="3">Regular</option>
              <option value="2">Mala</option>
              <option value="1">Pèsima</option>
            </select>
          </div>
        </div>
        {console.log(searchInput.search_input)}
      </div>

      {searchInput.search_input.trim() === "" ? (
        listJobReviews_original == null ? (
          <> </>
        ) : listJobReviews_original.length > 0 ? (
          <div className="container">
            <JobReviews jobReviews={listJobReviews_original} />
          </div>
        ) : (
          <div className="no-reviews">
            <h3>En este momento no hay reseñas laborales para visualizar.</h3>
          </div>
        )
      ) : listJobReviews_filtrada == null ? (
        <> </>
      ) : listJobReviews_filtrada.length > 0 ? (
        <div className="container">
          <JobReviews jobReviews={listJobReviews_filtrada} />
        </div>
      ) : (
        <div className="no-reviews">
          <h3>No hay reseñas laborales para visualizar.</h3>
        </div>
      )}
    </div>
  );
}

export default JobReviewsPage;
