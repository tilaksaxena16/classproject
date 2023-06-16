import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from "./crud/create";
import { Read } from "./crud/Read";
import { Login } from "./components/Login";
import { Databinding } from "./components/Databinding";
import { Update } from "./crud/Update";
import { NetflixIndex } from "./Neflix/Netflix-index";
import { Nasaapi } from "./Nasa-api/Nasaapi";
import { Earthapi } from "./Nasa-api/Earthapi";
import { Planetapi } from "./Nasa-api/Planetapi";
import { Jsonapi } from "./Json-placeholder/Jsonapi";
import { Jsontable } from "./Json-placeholder/Jsontable";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/data" element={<Databinding />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/netflix" element={<NetflixIndex />} />
            <Route exact path="/nasa" element={<Nasaapi />} />
            <Route exact path="/earth" element={<Earthapi />} />
            <Route exact path="/planet" element={<Planetapi />} />
            <Route exact path="/json" element={<Jsonapi />} />
            <Route exact path="/jsontable" element={<Jsontable />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export { App };
