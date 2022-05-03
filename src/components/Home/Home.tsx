import React from "react";
import { MainContainer } from "../../utils";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <MainContainer style={{ border: "2px solid white" }}>
      <Spline scene="https://prod.spline.design/IrwsdsLYHRuhUWuo/scene.spline" />
    </MainContainer>
  );
};

export default Home;
