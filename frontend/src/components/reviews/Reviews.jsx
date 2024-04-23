import Review from "../review/review"
import "./reviews.scss"

const Reviews = () => {

    const Reviews = {
        idCompany: 1
        company_name: "Exito"
        ocupation_name: "Almacenista"
        comments: "Buen trabajo"



    }

    return <div classname = "reviews">
        {Reviews.map(review=>(
            <Review review = {review} key = {review.id}/>
        ))}
        </div>
    
};

export default Reviews