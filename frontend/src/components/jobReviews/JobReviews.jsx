import JobReview from "../jobReview/JobReview";
import "./jobreviews.scss";

const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} style={{ color: 'yellow' }}>&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return stars;
  };

const JobReviews = () => {
    //Temporary

    const jobReviews = [
        {
        id:1,
        company: "Rappi",
        jobtitle: "Frontend Developer",
        //date: "2022-01-01",
        description: ["Good work environment", "Good salary"],
        workEnvironment: <h1>{generateStars(4)}</h1>,
        growthOpportunities: <h1>{generateStars(3)}</h1>,
        salary: "5.000.000 - 7.000.000 COP"
        },
        {
        id:2,
        company: "Rappi",
        jobtitle: "Backend Developer",
        //date: "2022-01-01",
        description: ["Good work environment", "Good salary"],
        workEnvironment: <h1>{generateStars(5)}</h1>,
        growthOpportunities: <h1>{generateStars(4)}</h1>,
        salary: "5.400.000 - 6.600.000 COP"
        },
    ];
    
    
    return (
        <div className="jobReviews">
          {jobReviews.map((jobreview) => (
            <JobReview key={jobreview.id} jobreview={jobreview} />
          ))}
        </div>
      );
}

export default JobReviews;