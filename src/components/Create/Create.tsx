import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInfo } from "../../App";

const Create = () => {
  const navigate = useNavigate();
  const login = useContext(LoginInfo);

  console.log(login);
  useEffect(() => {
    if (!login[0]) {
      navigate("/login");
    }
  }, []);
  return <>{!login[0] ? "Nothing" : "Create"}</>;
};

export default Create;
