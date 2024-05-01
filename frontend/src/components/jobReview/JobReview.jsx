import "./jobReview.scss";
import React from "react";

//const [productReview, setproductReview] = useState([]);

/*const fetchData = async () => {
    const response = await fetch('https://your-api-domain.com/api/rappi-feedback');
    const data = await response.json();
    return data;
};*/
//const  product_review = () => ({review})
const JobReview = ({ jobReview }) => {
  return (
    <div className="job-review-card">
      <div className="user-info">
        <div className="left">
          <img src="" alt="" />
          <span>username</span>
        </div>
        <div className="right">
          <span>fecha</span>
        </div>
      </div>
      <div className="content">
        <div className="company">Empresa: {jobReview.company}</div>
        <hr />

        <div className="job-title">
          <p>Cargo: {jobReview.jobTitle}</p>
        </div>
        <div className="description">
          <p>Descripcion: {jobReview.description}</p>
        </div>

        <hr />
        <div className="attributes">
          <div className="attribute">
            <div>Work Environment: </div>
            <div>{jobReview.workEnvironment}</div>
          </div>
          <div className="attribute">
            <div>Growth Opportunities:</div>
            <div>{jobReview.growthOpportunities}</div>
          </div>
          <div className="attribute">
            <div>Salary:</div>
            <div>{jobReview.salary}</div>
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
