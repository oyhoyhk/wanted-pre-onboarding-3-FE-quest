import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { mainStyle } from "./style";
import CustomNav from "./components/CustomNav";
import CustomSection from "./components/CustomSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
