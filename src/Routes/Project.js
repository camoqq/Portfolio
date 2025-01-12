import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Proj from "../Components/Proj";
import Typewriter from "typewriter-effect";
import ProjectFlip from "../Components/ProjectFlip";

const Project = () => {
  const [title, settitle] = useState();
  useEffect(() => {
    settitle(
      <Typewriter onInit={(text) => text.typeString("PROJECTS").start()} />
    );
  }, []);

  return (
    <div>
      <h1 className="projTitle">{title}</h1>
      {/* <Proj /> */}
      <ProjectFlip />
      <Footer />
    </div>
  );
};

export default Project;
