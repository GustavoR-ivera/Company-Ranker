import "./newReview.scss";
import { AuthContext } from "../../context/authContext";
import { useRef, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewReview = () => {
  //acceder a currentUser del contexto
  const { currentUser } = useContext(AuthContext);

  const [bandera, setBandera] = useState(true);
  const handleSelectChange = () => {
    setBandera(!bandera);
  };

  //mensajes de error formato reseñas de producto
  const [err, setErr] = useState(null);
  //mensajes de error formato reseñas laborales
  const [err2, setErr2] = useState(null);

  //variable de captura de datos formato reseña de producto
  const [inputs, setInputs] = useState({
    company_name: "",
    product_name: "",
    review_c: "",
    quality_score: "",
    price_score: "",
    service_score: "",
    idUser: currentUser.idUser,
  });
  //variable de captura de datos formato reseña laboral
  const [inputsJR, setInputsJR] = useState({
    company_name: "",
    occupation_name: "",
    review_j: "",
    work_environment: "",
    growth_opp: "",
    salary: "",
    idUser: currentUser.idUser,
  });

  //ruta base del servidor backend
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  //actualizar el valor de los inputs cuando se presenten cambios (formato reseña de producto)

  const handleChangeCustomerReview = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //actualizar el valor de los inputs cuando se presenten cambios (formato reseña laboral)
  const handleChangeJobReview = (e) => {
    setInputsJR((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  //funcion para enviar la peticion al servidor backend
  const handleClickCustomerReview = async (e) => {
    e.preventDefault();
    //validar existencia del obj currentUser
    if (currentUser === null || currentUser.idUser === null) {
      if (window.confirm("Debes iniciar sesión para publicar una reseña")) {
        navigate("/login");
      }
    } else {
      console.log(inputs);
      console.log(currentUser);
      const form = e.target.form;
      //console.log(form);
      if (!form.checkValidity()) {
        setErr("Por favor, rellena todos los campos correctamente");
        return;
      }
      if (
        inputs.company_name.trim() === "" ||
        inputs.product_name.trim() === "" ||
        inputs.review_c.trim() === ""
      ) {
        setErr("No dejes campos vacios!");
        return;
      }
      try {
        //confirm devuelve true si el usuario da click en ok
        if (window.confirm("aceptar para crear reseña")) {
          //se realiza la peticion a la bd
          await axiosInstance.post(
            "/server/postsc/add-customer-review",
            inputs
          );
          //si el registro es exitoso se notifica que la reseña esta en validacion
          alert("La reseña ha sido registrada para validacion");
          //reset inputs
          setInputs({
            company_name: "",
            product_name: "",
            review_c: "",
            quality_score: "",
            price_score: "",
            service_score: "",
          });
          setErr(null);
          //window.location.reload();
          navigate("/home");
        }
      } catch (err) {
        console.log(err);
        alert("Se produjo un error al registrar la reseña, intenta nuevamente");
        //window.location.reload();
        navigate("/home");
        //setErr(err.response.data);
      }
    }
  };

  //referencia al formulario de reseña laboral
  const refFormJobReview = useRef(null);

  //funcion para enviar la peticion al servidor backend
  const handleClickJobReview = async (e) => {
    e.preventDefault();
    //validar existencia del obj currentUser
    if (currentUser === null || currentUser.idUser === null) {
      if (window.confirm("Debes iniciar sesión para publicar una reseña")) {
        navigate("/login");
      }
    } else {
      console.log(inputsJR);
      console.log(currentUser);
      //console.log(form);
      if (!refFormJobReview.current.checkValidity()) {
        setErr2("Por favor, rellena todos los campos correctamente");
        return;
      }
      if (
        inputsJR.company_name.trim() === "" ||
        inputsJR.occupation_name.trim() === "" ||
        inputsJR.review_j.trim() === ""
      ) {
        setErr2("No dejes campos vacios!");
        return;
      }
      try {
        //confirm devuelve true si el usuario da click en ok
        if (window.confirm("aceptar para crear reseña")) {
          //se realiza la peticion a la bd
          await axiosInstance.post("/server/postsj/add-job-review", inputsJR);
          //si el registro es exitoso se notifica que la reseña esta en validacion
          alert("La reseña ha sido registrada para validacion");
          //reset inputs
          setInputsJR({
            company_name: "",
            occupation_name: "",
            review_j: "",
            work_environment: "",
            growth_opp: "",
            salary: "",
          });
          setErr2(null);
          navigate("/home");
          //window.location.reload();
        }
      } catch (err2) {
        console.log(err2);
        //setErr(err.response.data);
        navigate("/home");
        //window.location.reload();
      }
    }
  };

  return (
    <div className="newReview">
      <div className="container">
        <div className="select">
          <p>Comparte tus experiencias escribiendo una reseña sobre un</p>
          <select
            name="type-of-review"
            id="type-of-review"
            onChange={handleSelectChange}
          >
            <option value="customer" selected>
              Producto
            </option>
            <option value="job">Trabajo</option>
          </select>
        </div>
        {bandera ? (
          <>
            <hr />
            <div className="customer-review">
              <form>
                <div className="top">
                  <div className="input">
                    <span className="input_name">Nombre empresa:</span>
                    <input
                      className="input_name"
                      type="text"
                      name="company_name"
                      onChange={handleChangeCustomerReview}
                      required={true}
                      pattern=".{1,40}"
                      value={inputs.company_name}
                    />
                    <span className="warning">(40 caracteres)</span>
                  </div>
                  <div className="input">
                    <span className="input_name">Producto:</span>
                    <input
                      className="input_name"
                      type="text"
                      name="product_name"
                      onChange={handleChangeCustomerReview}
                      required={true}
                      pattern=".{1,40}"
                      value={inputs.product_name}
                    />
                    <span className="warning">(40 caracteres)</span>
                  </div>
                  <div className="input">
                    <span className="input_name">Descripcion:</span>
                    <textarea
                      className="input_name"
                      name="review_c"
                      onChange={handleChangeCustomerReview}
                      required={true}
                      pattern=".{1,200}"
                      value={inputs.review_c}
                      rows="5"
                      cols="60"
                    ></textarea>
                    <span className="warning">(200 caracteres)</span>
                  </div>
                  <hr />
                  <div className="calificacion">
                    <span>(1 menor calificacion - 5 mayor calificacion )</span>
                  </div>

                  <div className="input">
                    <span className="input_name">Calidad</span>
                    <input
                      className="input_value"
                      name="quality_score"
                      type="number"
                      onChange={handleChangeCustomerReview}
                      value={inputs.quality_score}
                      required={true}
                      min="1"
                      max="5"
                    />
                    <span className="warning"></span>
                  </div>
                  <div className="input">
                    <span className="input_name">Precio</span>
                    <input
                      className="input_value"
                      name="price_score"
                      type="number"
                      onChange={handleChangeCustomerReview}
                      value={inputs.price_score}
                      required={true}
                      min="1"
                      max="5"
                    />
                    <span className="warning"></span>
                  </div>
                  <div className="input">
                    <span className="input_name">Atencion recibida</span>
                    <input
                      className="input_value"
                      name="service_score"
                      type="number"
                      onChange={handleChangeCustomerReview}
                      value={inputs.service_score}
                      required={true}
                      min="1"
                      max="5"
                    />
                    <span className="warning"></span>
                  </div>
                </div>
                <div className="bottom">
                  <span className="err">{err}</span>
                  <button onClick={handleClickCustomerReview}>Publicar</button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <hr />
            <div className="job-review">
              <form ref={refFormJobReview}>
                <div className="top">
                  <div className="input">
                    <span className="input_name">Nombre empresa:</span>
                    <input
                      className="input_name"
                      type="text"
                      name="company_name"
                      onChange={handleChangeJobReview}
                      value={inputsJR.company_name}
                      required={true}
                      pattern=".{1,40}"
                    />
                    <span className="warning">(40 caracteres)</span>
                  </div>
                  <div className="input">
                    <span className="input_name">Cargo:</span>
                    <input
                      className="input_name"
                      type="text"
                      name="occupation_name"
                      onChange={handleChangeJobReview}
                      value={inputsJR.occupation_name}
                      required={true}
                      pattern=".{1,200}"
                    />
                    <span className="warning">(200 caracteres)</span>
                  </div>
                  <div className="input">
                    <span className="input_name">Descripcion:</span>
                    <textarea
                      className="input_name"
                      name="review_j"
                      onChange={handleChangeJobReview}
                      value={inputsJR.review_j}
                      required={true}
                      pattern=".{1,200}"
                      rows="5"
                      cols="60"
                    ></textarea>
                    <span className="warning">(200 caracteres)</span>
                  </div>
                  <hr />
                  <div className="calificacion">
                    <span>(1 menor calificacion - 5 mayor calificacion )</span>
                  </div>

                  <div className="input">
                    <span className="input_name">Ambiente laboral</span>
                    <input
                      className="input_value"
                      type="number"
                      name="work_environment"
                      onChange={handleChangeJobReview}
                      value={inputsJR.work_environment}
                      required={true}
                      min="1"
                      max="5"
                    />
                    <span className="warning"></span>
                  </div>
                  <div className="input">
                    <span className="input_name">
                      Oportunidades de crecimiento
                    </span>
                    <input
                      className="input_value"
                      type="number"
                      name="growth_opp"
                      onChange={handleChangeJobReview}
                      value={inputsJR.growth_opp}
                      required={true}
                      min="1"
                      max="5"
                    />
                    <span className="warning"></span>
                  </div>
                  <div className="input">
                    <span className="input_name">Salario</span>
                    <input
                      className="input_value"
                      type="number"
                      name="salary"
                      onChange={handleChangeJobReview}
                      value={inputsJR.salary}
                      required={true}
                      min="1"
                      max="5"
                    />
                    <span className="warning"></span>
                  </div>
                </div>
              </form>
              <div className="bottom">
                <span className="err">{err2}</span>

                <button onClick={handleClickJobReview}>Publicar</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewReview;
