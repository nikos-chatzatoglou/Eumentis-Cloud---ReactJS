import './LoadingScreen.css';
import React, { Component } from 'react';
//test
const LoadingScreen = () => {

  let divs = [];
  for (let index = 1; index <= 9; index++) {
    divs[index - 1] = <div className={`sk-cube sk-cube${index}`}> </div>;
  }


  return (
    <div className="sk-cube-grid">
      {divs}
    </div>
  );
};

export default LoadingScreen;