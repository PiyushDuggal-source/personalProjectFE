import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Navbar from "./components/NavBar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/Signup";
import { loggedInInfo } from "./services/auth.services";

export const LoginInfo = createContext<boolean>(false);

function App() {
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    const getLoginInfo = async () => {
      const isLoggedIn = await loggedInInfo();
      setLogin(isLoggedIn.data.auth);
    };
    getLoginInfo();
  }, []);
  console.log(login);
  return (
    <>
      <LoginInfo.Provider value={login}>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </LoginInfo.Provider>
    </>
  );
}

export default App;
