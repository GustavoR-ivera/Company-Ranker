import "./newReview.scss";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";

const NewReview = () => {

  const {currentUser} = useContext(AuthContext);

  const [bandera, setBandera] = useState(true);
  const handleSelectChange = () => {
    setBandera(!bandera);
  }


  return (
   <div className="newReview">
    <div className="container">
        <div className="select">
            <p>Comparte tus experiencias
                escribiendo una reseña sobre un</p>
            <select name="type-of-review" id="type-of-review" onChange={handleSelectChange}>
                <option value="customer" selected>Producto</option>
                <option value="job">Trabajo</option>
            </select>
        </div>
        { bandera ? (
            <>
                <hr />
                <div className="customer-review">
                    <div className="top">
                        <div className="input">
                            <span className="input_name" >Nombre empresa:</span>
                            <input className="input_name" type="text" name="company_name"/>
                            <span className="warning">(40 caracteres)</span>
                        </div>
                        <div className="input">
                            <span className="input_name">Producto:</span>
                            <input className="input_name" type="text" name="product_name"/>
                            <span className="warning">(40 caracteres)</span>
                        </div>
                        <div className="input">
                            <span className="input_name">Descripcion:</span>
                            <textarea className="input_name" name="comments" rows="5" cols="60"></textarea>
                            <span className="warning">(200 caracteres)</span>
                        </div>
                        <hr />
                        <div className="calificacion">
                            <span  >(1 menor calificacion - 5 mayor calificacion )</span>

                        </div>


                        <div className="input">
                            <span className="input_name">Calidad</span>
                            <input className="input_value" type="number" min="1" max="5"/>
                            <span className="warning"></span>

                        </div>
                        <div className="input">
                            <span className="input_name">Precio</span>
                            <input className="input_value" type="number" min="1" max="5"/>
                            <span className="warning"></span>

                        </div>
                        <div className="input">
                            <span className="input_name">Atencion recibida</span>
                            <input className="input_value" type="number" min="1" max="5"/>
                            <span className="warning"></span>

                        </div>

                    </div>
                    <div className="bottom">
                        <button>Publicar</button>
                    </div>
                </div>
            </>
        ) : (
            <>
                <hr />
                <div className="job-review">
                    <p>
                        reseña de trabajo
                    </p>
                </div>
            </>

        )
        }

    </div>

   </div>
  );
};

export default NewReview;