import './Loader.styles.css';
import React from 'react';

const Loader = () => {

  let divs:any = [];
  for (let index = 1; index <= 9; index++) {
    divs[index - 1] = <div className={`sk-cube sk-cube${index}`}> </div>;
  }


  return (
    <div className="sk-cube-grid">
      {divs}
    </div>
  );
};

export default Loader;