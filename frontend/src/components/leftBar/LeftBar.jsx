import "./leftBar.scss"
import industries from "../../images/industries.png";
import job from "../../images/job.png";
import news from "../../images/news.png";
import shop from "../../images/shop.png";
import trending from "../../images/trending.png";
import salary from "../../images/salary.png";
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <h3>Categories</h3>
        <hr />
        <div className="menu">
          <span>Explore</span>
          <div className="item">
            <img src={trending} alt="trending" />
            <span>Trending companies</span>
          </div>
          <div className="item">
            <img src={news} alt="news" />
            <span>News</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Commercial market</span>
          <div className="item">
            <img src={shop} alt="shop" />
            <span>Best places to shop</span>
          </div>
          <div className="item">
            <img src={industries} alt="industries" />
            <span>View industries</span>
          </div>   
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={job} alt="job" />
            <span>Contact us</span>
          </div>
          <div className="item">
            <img src={salary} alt="salary" />
            <Link to={"/about"}>
              About us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

