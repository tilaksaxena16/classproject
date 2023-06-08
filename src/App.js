import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from "./crud/create";
import { Read } from "./crud/Read";

const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export { App };
