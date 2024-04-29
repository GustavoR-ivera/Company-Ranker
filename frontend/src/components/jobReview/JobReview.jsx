import './jobReview.scss';
import React from 'react';



//const [productReview, setproductReview] = useState([]);

/*const fetchData = async () => {
    const response = await fetch('https://your-api-domain.com/api/rappi-feedback');
    const data = await response.json();
    return data;
};*/
//const  product_review = () => ({review})
const JobReview = ({ jobReview }) => {
    //const company = jobReview.company;
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
                <div className='atribute'>Work Environment:</div>
                <span>{jobReview.workEnvironment}</span>
                <div className="attribute">Growth Opportunities</div>
                <span>{jobReview.growthOpportunities}</span>
            </div>
            <div className="attribute1">Salary:</div>
            <span>{jobReview.salary}</span>
            <div className="buttons">
                <button className="agree-button">De acuerdo</button>
                <button className="disagree-button">En desacuerdo</button>
            </div> 

        </div>
    );
};
export default JobReview;