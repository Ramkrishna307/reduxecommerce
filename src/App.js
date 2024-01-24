import React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import MovieDetails from "./Component/MoveDetails";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import "./Common/colors.scss"
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" Component={ Home } />
          <Route path="/movie/:imdbID" Component={MovieDetails} />
        </Routes>
        </div>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
