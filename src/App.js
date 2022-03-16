import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Login from "./Component/Login/Login";
import './Urls'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import Nav from "./Component/NavBar/Nav";

import Posters from "./Component/Posters/Posters";
import { ActionMovies, ComedyMovies, originals } from "./Urls";





function App() {
  return (
    <Router>

      <div className="App">


        <Nav />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/netflix" element={
          <Banner />} />
        </Routes>
        <Routes>
          <Route exact path="/netflix" element={
            <Posters url={originals} title="Orginals" />
          } />
        </Routes>
        <Routes>
          <Route exact path="/netflix" element={
            <Posters url={ActionMovies} title="ActionMovies" />
          } />
        </Routes>
        <Routes>
          <Route exact path="/netflix" element={
            <Posters url={ComedyMovies} title="ComedyMovies" />
          } />
        </Routes>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
