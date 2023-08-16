import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import About from "./Routes/About";
//import Contact from "./Routes/Contact";
//import Home from "./Routes/Home";
//import Project from "./Routes/Project";

const Home = lazy(() => import("./Routes/Home"));
const Project = lazy(() => import("./Routes/Project"));
const About = lazy(() => import("./Routes/About"));
const Contact = lazy(() => import("./Routes/Contact"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
