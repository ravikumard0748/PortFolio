import React from "react";
import "./home.css";
import "./project.css";
import raviimg from "./assets/images/raviimg.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@coreui/icons/css/all.min.css";
import "./feedback.css";
const Home = () => {
  return (
    <div>
      <div class="homediv">
        <div class="navdiv">
          <nav>
            <ul class="navul">
              <li class="logli">Ravikumar D </li>
              <li>
                <a href=" # ">Home</a>
              </li>
              <li>
                <a href="#1">Projects </a>
              </li>
              <li>
                <a href="#2">Skills</a>
              </li>
              <li>
                <a href="#3">Feedback</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="imgdiv">
          <img src={raviimg} alt="raviimage" />
          <div class="aboutme">
            <p>
              "I am a passionate Machine Learning Engineer with a good
              foundation in developing and deploying intelligent systems. My
              expertise lies in leveraging machine learning algorithms,
              statistical analysis, and data-driven decision-making to solve
              complex problems and optimize processes. I specialize in areas
              like supervised and unsupervised learning, deep learning, natural
              language processing, and predictive analytics.
            </p>
          </div>
        </div>
        <div class="contdiv">
          <nav>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              <i class="fa-brands fa-linkedin"></i> linkedin
            </a>
            <a href=" https://github.com/ravikumard0748">
              <i class="fa-brands fa-square-github"></i> Github
            </a>
            <a href="https://leetcode.com/u/ravikumard/">
              <i class="fa-brands fa-github"></i> Leetcode
            </a>
            <a href="https://drive.google.com/file/d/1yXHkRcLTfUu6JZ4BVbWoJPaUGRNzy6vS/view?usp=drivesdk">
              <i class="fa-solid fa-download"></i> Resume
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
