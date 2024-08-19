import axios from "axios";
import { useEffect, useState } from "react";
import CompanyReviews from "../../components/companyReviews/CompanyReviews";
import "./companiesPage.scss";

function CompaniesPage() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas laborales
  const getCompanyReviews = async () => {
    try {
      const res = await axiosInstance.get("/server/companys/");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //definicion de variable que guarda la lista empresas obtenidas
  const [listCompanyReviews, setListCompanyReviews] = useState([]);
  //variable para guardar las empresas filtradas
  const [listCompanies_filtered, setListCompanies_filtered] = useState([]);
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
      setListCompanies_filtered(l);
      return;
    }
    //tratamiento a la entrada del usuario
    const company_name = searchInput.search_input.trim().toLowerCase();
    //filtrar lista de empresas original con la entrada del usuario (nombre de empresa)
    const filteredCompanies = listCompanyReviews.filter((company) =>
      company.Name_C.trim().toLowerCase().includes(company_name)
    );

    console.log("lista empresas filtradas: ", filteredCompanies);
    //actualizar variable con las reseñas filtradas
    setListCompanies_filtered(filteredCompanies);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getCompanyReviews();
      setListCompanyReviews(reviews.reverse());
    };

    fetchReviews();
  }, []);

  console.log(listCompanyReviews);

  return (
    <div className="company-reviews">
      <div className="header">
        <h2>Aqui puedes ver todas las empresas que estan en Company Rank</h2>
      </div>
      <div className="search_input">
        <div className="input">
          <input
            type="text"
            name="search_input"
            value={searchInput.search_input}
            placeholder="filtra por nombre de empresa"
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <button className="button" onClick={handleClickSearch}>
            Buscar
          </button>
        </div>
      </div>
      {searchInput.search_input.trim() === "" ? (
        listCompanyReviews == null ? (
          <> </>
        ) : listCompanyReviews.length > 0 ? (
          <div className="container">
            <CompanyReviews CompanyReviews={listCompanyReviews} />
          </div>
        ) : (
          <div className="no-companies">
            <h3>En este momento no hay empresas para visualizar.</h3>
          </div>
        )
      ) : listCompanies_filtered == null ? (
        <> </>
      ) : listCompanies_filtered.length > 0 ? (
        <div className="container">
          <CompanyReviews CompanyReviews={listCompanies_filtered} />
        </div>
      ) : (
        <div className="no-companies">
          <h3>No hay empresas para visualizar.</h3>
        </div>
      )}
    </div>
  );
}

export default CompaniesPage;
