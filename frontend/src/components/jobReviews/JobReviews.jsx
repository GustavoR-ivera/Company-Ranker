import JobReview from "../jobReview/JobReview";
import "./jobReviews.scss";

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

const JobReviews = () => {
  //Temporary

  const jobReviews = [
    {
      id: 1,
      company: "Rappi",
      jobTitle: "Frontend Developer",
      //date: "2022-01-01",
      description: ["Good work environment", "Good salary"],
      workEnvironment: <h2>{generateStars(4)}</h2>,
      growthOpportunities: <h2>{generateStars(3)}</h2>,
      salary: "$5.000.000",
    },
    {
      id: 2,
      company: "Rappij",
      jobTitle: "Backend Developer",
      //date: "2022-01-01",
      description: ["Good work environme hbhnt", "Good salargjhy"],
      workEnvironment: <h2>{generateStars(5)}</h2>,
      growthOpportunities: <h2>{generateStars(4)}</h2>,
      salary: "$7.000.000",
    },
  ];

  return (
    <div className="jobReviews">
      {jobReviews.map((jobReview) => (
        <JobReview jobReview={jobReview} key={jobReview.id} />
      ))}
    </div>
  );
};

export default JobReviews;
