import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import SignUp from "./components/SignUp/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
