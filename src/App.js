import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Routes from './routes'
function App() {
  return (
    <>
      <Navbar />
      <Routes/>
      <Footer />
    </>
  );
}

export default App;
