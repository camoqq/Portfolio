import React, { useState } from "react";
import listItems from "./List";

const ProjList = () => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <div className="project-container card-container" onMouseEnter={toggleFlip}>
      {listItems?.map((x) => (
        <div className={` project-card ${flipped ? "flipped" : ""}`} key={x.id}>
          <img src={x.image} alt="pics" />
          <div>
            <h2>{x.title}</h2>
            <p>{x.desc}</p>
          </div>
          <div className="navs">
            <a href={x.code}>view code</a>
            <a href={x.live}>view live</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjList;
