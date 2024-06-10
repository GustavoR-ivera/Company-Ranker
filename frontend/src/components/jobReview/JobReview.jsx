import "./jobReview.scss";
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const JobReview = ({ jobReview }) => {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} style={{ color: "yellow" }}>
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };

  const [Work_Env_Score, setWork_Env_Score] = useState(null);
  const [Salary_Score, setSalary_Score] = useState(null);
  const [Growth_Opp_Score, setGrowth_Opp_Score] = useState(null);

  //invocar metodos al renderizar componente
  useEffect(() => {
    const stars = () => {
      const Work_Env_Score = generateStars(jobReview.Work_Env_Score);
      const Salary_Score = generateStars(jobReview.Salary_Score);
      const Growth_Opp_Score = generateStars(jobReview.Growth_Opp_Score);

      setWork_Env_Score(Work_Env_Score);
      setSalary_Score(Salary_Score);
      setGrowth_Opp_Score(Growth_Opp_Score);
    };

    stars();
  }, []);

  //def url base del servidor backend
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  //obtener informacion del usuario asociado a la reseña
  const getUser = async () => {
    try {
      const res = await axiosInstance.get(
        `/server/users/getUser/${jobReview.User_idUser}`
      );
      //console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const [user_review, setUser_review] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser_review(user);
    };

    fetchUser();
  }, []);

  return (
    <div className="job-review-card">
      <div className="user-info">
        <div className="left">
          <span>
            user:{" "}
            {user_review == null
              ? "user"
              : user_review.length > 0
              ? user_review[0].Name
              : "user"}
          </span>
        </div>
        <div className="right">
          <span>
            {jobReview.Created_At == null
              ? "fecha"
              : moment(jobReview.Created_At).fromNow()}
          </span>
        </div>
      </div>
      <div className="content">
        <div className="company">Empresa: {jobReview.Company_Name}</div>
        <hr />

        <div className="job-title">
          <p>Cargo: {jobReview.Occupation}</p>
        </div>
        <div className="description">
          <p>Descripcion: {jobReview.Review_J}</p>
        </div>

        <hr />
        <div className="attributes">
          <div className="attribute">
            <div>Ambiente laboral: </div>
            <div>{Work_Env_Score}</div>
          </div>
          <div className="attribute">
            <div>Oportunidades de crecimiento:</div>
            <div>{Growth_Opp_Score}</div>
          </div>
          <div className="attribute">
            <div>Salario:</div>
            <div>{Salary_Score}</div>
          </div>
        </div>
      </div>
      <hr />

      <div className="buttons">
        <button className="agree-button">De acuerdo</button>
        <button className="disagree-button">En desacuerdo</button>
      </div>
      {jobReview.Available === -1 ? (
        <div className="comentarios">
          <p>
            Tu reseña fue rechazada por el moderador:{" "}
            {jobReview.Moderator_Comments === "undefined"
              ? ""
              : jobReview.Moderator_Comments}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default JobReview;
