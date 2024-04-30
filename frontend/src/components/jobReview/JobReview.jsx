import './jobReview.scss';
import "../jobReviews/jobReviews.scss";
import like_button from "../../images/like_button.png";
import dislike_button from "../../images/dislike_button.png";
import React from 'react';


//const [productReview, setproductReview] = useState([]);

/*const fetchData = async () => {
    const response = await fetch('https://your-api-domain.com/api/rappi-feedback');
    const data = await response.json();
    return data;
};*/
//const  product_review = () => ({review})
const JobReview = ({ jobReview }) => {
    const company = jobReview.company;
    const jobTitle = jobReview.jobTitle;
    const description = jobReview.description;
    const workEnvironment = jobReview.workEnvironment;
    const growthOpportunities = jobReview.growthOpportunities;
    const salary = jobReview.salary;
    return (
        <div className="job-review-card">
            <div className="header">

                <div className="company">{jobReview.company}</div>
            </div>
            <div className="content">
                <div className="job-title">{jobReview.jobTitle}</div>
                <div className="description">{jobReview.description}</div>
            </div>
            <hr />
            <div className="attributes">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className='atribute'>Work Environment:</div>
                    <span>{jobReview.workEnvironment}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="attribute">Growth Opportunities:</div>
                    <span>{jobReview.growthOpportunities}</span>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="attribute1">Salary:</div>
                <span>{jobReview.salary}</span>
            </div>
            <div className="buttons" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="agree-button" style={{ display: "flex", alignItems: "center" }}>
                    <img src={like_button} style={{ marginRight: "5px", height: "20px", width: "20px" }} />
                    De acuerdo
                </button>
                <button className="disagree-button" style={{ display: "flex", alignItems: "center" }}>
                    <img src={dislike_button} style={{ marginRight: "5px", height: "20px", width: "20px" }} />
                    En desacuerdo
                </button>
            </div>

        </div>
    );
};
export default JobReview;