import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/Signup";
import { loggedInInfo } from "./services/auth.services";

export const LoginInfo = createContext<(boolean | string)[]>([]);

function App() {
  const [login, setLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    const getLoginInfo = async () => {
      const isLoggedIn = await loggedInInfo();
      setLogin(isLoggedIn.data.auth);
      setUserName(isLoggedIn.data.userName);
    };
    getLoginInfo();
  }, []);
  return (
    <>
      <LoginInfo.Provider value={[login, userName]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </LoginInfo.Provider>
    </>
  );
}

export default App;
