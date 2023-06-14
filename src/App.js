import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from "./crud/create";
import { Read } from "./crud/Read";
import { Login } from "./components/Login";
import { Databinding } from "./components/Databinding";
import { Update } from "./crud/Update";
import { NetflixIndex } from "./Neflix/Netflix-index";

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export { App };
