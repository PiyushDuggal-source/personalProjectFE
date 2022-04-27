import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInfo } from "../../App";

const Create = () => {
  const navigate = useNavigate();
  const login = useContext(LoginInfo);

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);
  return <>{!login ? "Nothing" : "Create"}</>;
};

export default Create;
