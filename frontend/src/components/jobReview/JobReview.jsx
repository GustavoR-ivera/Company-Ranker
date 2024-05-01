import "./jobReview.scss";
import React, { useEffect, useState } from "react";

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

  return (
    <div className="job-review-card">
      <div className="user-info">
        <div className="left">
          <img src="" alt="" />
          <span>username</span>
        </div>
        <div className="right">
          <span>
            {jobReview.Created_At == null ? "fecha" : jobReview.Created_At}
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
    </div>
  );
};
export default JobReview;
