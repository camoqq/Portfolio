import React, { useState } from "react";
import Proj from "./Proj";

const ProjectFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flipped state
  };
  return <Proj />;
  // <div
  //   className={`card ${isFlipped ? "flipped" : ""}`}
  //   onClick={handleClick}
  // >
  //   <div className="card-inner">
  //     <div className="card-front">
  //       {/* Front content goes here */}

  //       <p>Front</p>
  //     </div>
  //     <div className="card-back">
  //       {/* Back content goes here */}
  //       <p>Back</p>
  //     </div>
  //   </div>
  // </div>;
};

export default ProjectFlip;
