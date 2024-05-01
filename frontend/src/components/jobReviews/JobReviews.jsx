import JobReview from "../jobReview/JobReview";
import "./jobReviews.scss";

const JobReviews = (props) => {
  return (
    <div className="jobReviews">
      {props.jobReviews.map((jobReview) => (
        <JobReview jobReview={jobReview} key={jobReview.idJob_review} />
      ))}
    </div>
  );
};

export default JobReviews;
