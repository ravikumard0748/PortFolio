import React from "react";
import "./skills.css";
import pythonImg from "./assets/images/python.png";
import supervisedImg from "./assets/images/supervised.jpeg";
import unsupervisedImg from "./assets/images/unsupervised.jpeg";
import pytorchImg from "./assets/images/pytorch.png";
import scikitLearnImg from "./assets/images/scikitlearn.png";

const Skills = () => {
  return (
    <div className="skills-container" id="2">
      <h1 className="skills-title">My Skills</h1>

      <div className="skill-item left">
        <img class="skilimg"src={pythonImg} alt="Python" className="skill-image" />
        <div className="skill-content">
          <h2>Python</h2>
          <p>Python is a powerful programming language for AI and machine learning.</p>
        </div>
      </div>

      <div className="skill-item right">
        <div className="skill-content">
          <h2>Supervised Learning</h2>
          <p>Supervised learning involves training models on labeled data to make predictions.</p>
        </div>
        <img class="skilimg"src={supervisedImg} alt="Supervised Learning" className="skill-image" />
      </div>

      <div className="skill-item left">
        <img class="skilimg" src={unsupervisedImg} alt="Unsupervised Learning" className="skill-image" />
        <div className="skill-content">
          <h2>Unsupervised Learning</h2>
          <p>Unsupervised learning helps find patterns in unlabeled data without supervision.</p>
        </div>
      </div>

      <div className="skill-item right">
        <div className="skill-content">
          <h2>PyTorch</h2>
          <p>PyTorch is an open-source deep learning framework for flexible research and production.</p>
        </div>
        <img class="skilimg" src={pytorchImg} alt="PyTorch" className="skill-image" />
      </div>

      <div className="skill-item left">
        <img  class="skilimg" src={scikitLearnImg} alt="Scikit-Learn" className="skill-image" />
        <div className="skill-content">
          <h2>Scikit-Learn</h2>
          <p>Scikit-Learn is a machine learning library in Python for data analysis and modeling.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
