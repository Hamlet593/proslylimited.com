import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Services from "./Pages/services/Services";
import Service1 from "./Pages/services/1";
import Service2 from "./Pages/services/2";
import Service3 from "./Pages/services/3";
import Service5 from "./Pages/services/5";
import Service6 from "./Pages/services/6";
import Service7 from "./Pages/services/7";
import Service8 from "./Pages/services/8";
import Contact from "./Pages/contact/Contact";
import Error from "./Pages/error/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/mission" element={<Service1 />} />
        <Route path="/values" element={<Service3 />} />
        <Route path="/goals" element={<Service2 />} />
        <Route path="/projectmanagement" element={<Service5 />} />
        <Route path="/trainings" element={<Service6 />} />
        <Route path="/trades" element={<Service7 />} />
        <Route path="/maintenance" element={<Service8 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
