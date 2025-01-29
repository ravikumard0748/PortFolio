import "./project.css";
import flowersprojimg from "./assets/images/flowersprojimg.jpeg";
import skindiseaseprojimg from "./assets/images/skindiseaseprojimg.jpg";
import titanic from "./assets/images/titanicimg.png";
import plantdiseaseprojimg from "./assets/images/plantdiseaseprojimg.jpeg";

import React from 'react'

const Project = () => {
  return (
    <div class="projectdiv" id="1">
    <h1>Projects</h1>
    <div class="proj1">
      <img src={flowersprojimg} alt="flowersimg" />
      <h3>Flowers dataset classification</h3>
      <p>
        The flower dataset classification using a decision tree is a machine
        learning project that aims to classify different species of flowers
        based on specific features. A popular dataset for this task is the
        Iris dataset, which contains 150 samples of flowers from three
        species: Iris-setosa, Iris-versicolor, and Iris-virginica. Each
        sample includes four features: sepal length, sepal width, petal
        length, and petal width. The goal is to predict the species of a
        flower based on these features. 
      </p>
    </div>
    <div class="proj2">
      <img src={skindiseaseprojimg} alt="flowersimg" />
      <h3>Skin Disease Classification</h3>
      <p>
        Skin disease classification using Convolutional Neural Networks
        (CNNs) is a method to automatically identify various skin conditions
        from images. CNNs are particularly effective because they can learn
        hierarchical features such as edges, textures, and patterns directly
        from the input images. This approach often involves preprocessing
        steps like image resizing, normalization, and augmentation to
        improve model performance.
      </p>
    </div>
    <div class="proj3">
      <img src={plantdiseaseprojimg} alt="flowersimg" />
      <h3>Plant Disease Classification</h3>
      <p>
        Skin disease classification using Convolutional Neural Networks
        (CNNs) is a method to automatically identify various skin conditions
        from images. CNNs are particularly effective because they can learn
        hierarchical features such as edges, textures, and patterns directly
        from the input images. This approach often involves preprocessing
        steps like image resizing, normalization, and augmentation to
        improve model performance.
      </p>
    </div>
    <div class="proj4">
      <img src={titanic} alt="flowersimg" />
      <h3>Titanic dataset Classification</h3>
      <p>
        Titanic dataset classification project using logistic regression is
        a supervised machine learning task aimed at predicting whether a
        passenger survived the Titanic disaster. The dataset, typically
        sourced from Kaggle, contains information about passengers, such as
        their age, gender, ticket class, family size, and embarkation port.
        The target variable, Survived, indicates whether a passenger
        survived (1) or not (0). Logistic regression, a statistical method
        for binary classification
      </p>
    </div>
    <div class="proj5">
      <img src={skindiseaseprojimg} alt="flowersimg" />
      <h3>Vegetables price prediction</h3>
      <p>
        Skin disease classification using Convolutional Neural Networks
        (CNNs) is a method to automatically identify various skin conditions
        from images. CNNs are particularly effective because they can learn
        hierarchical features such as edges, textures, and patterns directly
        from the input images. This approach often involves preprocessing
        steps like image resizing, normalization, and augmentation to
        improve model performance.
      </p>
    </div>
    <div class="proj6">
      <img src={skindiseaseprojimg} alt="flowersimg" />
      <h3>Flower type Classification</h3>
      <p>
        Skin disease classification using Convolutional Neural Networks
        (CNNs) is a method to automatically identify various skin conditions
        from images. CNNs are particularly effective because they can learn
        hierarchical features such as edges, textures, and patterns directly
        from the input images. This approach often involves preprocessing
        steps like image resizing, normalization, and augmentation to
        improve model performance.
      </p>
    </div>
  </div>
  )
}

export default Project
