import "./jobReview.scss";
import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import axios from "axios";
import { AuthContext } from "../../context/authContext";


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


  var [Liked, setLiked] = useState(false);
  var [Disliked, setDisliked] = useState(false);

  var [likes, setLikes]= useState(jobReview.Likes);
  var [dislikes, setDislikes]= useState(jobReview.Dislikes);


  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const getLike = async () =>{
    try{
      const res = await axiosInstance.get(`/server/likes/${currentUser.idUser}`)
      for (let i = 0; i < res.data.length; i++){
        if(res.data[i].jobId == jobReview.idJob_review){
          
          setLiked(true)
          console.log(res.data)
        }
      }
      
    } catch (err){
      console.log(err)
    }
  }


 
  const getDislike = async () =>{
    try{
      const res = await axiosInstance.get(`/server/Likes/dislikes/${currentUser.idUser}`)
      for (let i = 0; i < res.data.length; i++){
        if(res.data[i].idReview == productReview.idJob_review){
          setDisliked(true)
        }
      } 
      
      
    } catch (err){
      console.log(err)
    }


  }


  function handleLikes(){
    

    if (Liked == false){
      axiosInstance.post(`/server/likes/likeJ`, {userId: currentUser.idUser, jobId: jobReview.idJob_review})
      console.log("aaaaa")
      setLiked(true);
      setLikes( likes + 1);
      
      if (Disliked){
        axiosInstance.delete(`/server/likes/dislikeJ`, {userId: currentUser.idUser, jobId: jobReview.idJob_review})
        setDislikes(dislikes - 1);
        setDisliked(false);
      }

    }else{
       axiosInstance.delete(`/server/likes/likeJ`, {userId: currentUser.idUser, jobId: jobReview.idJob_review})
      setLiked(false )
      setLikes(likes - 1); 
    }
  }

  function handleDislikes(){

    if (Disliked == false){
      
      setDisliked(true);
      
      axiosInstance.post(`/server/likes/dislikeJ`, {userId: currentUser.idUser, jobId: jobReview.idJob_review})
    
      setDislikes(dislikes + 1);
      if (Liked){
        axiosInstance.delete(`/server/likes/likeJ`, {userId: currentUser.idUser, jobId: jobReview.idJob_review})
        setLikes(likes - 1);
        setLiked(false);
      }

    }else{
      axiosInstance.delete(`/server/likes/dislikeJ`, {userId: currentUser.idUser, jobId: jobReview.idJob_review})
      setDisliked(false)
      setDislikes(dislikes - 1);
    }
    
  }

  function premium(){
    if(currentUser.Role == "premium"){
      return (
        <div className="buttons">
        <div className="numLikes">{ likes}</div>
        <button className="agree-button" onClick={handleLikes}>De acuerdo</button>
        <button className="disagree-button" onClick={handleDislikes}>En desacuerdo</button>
        <div className="numDislikes">{dislikes}</div>
      </div>

      );
    }
  }
 

  return (
    <div className="job-review-card">
      <div className="user-info">
        <div className="getlikes">
          {getLike}
        </div>
        <div className="getdislikes">{getDislike}</div> 
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
      {premium()}
      
      
    </div>
  );
};
export default JobReview;
