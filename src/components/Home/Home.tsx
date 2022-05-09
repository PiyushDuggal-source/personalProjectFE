import React from "react";
import { MainContainer } from "../../utils";
import PostCard from "../Card/PostCard";
// import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <MainContainer>
      <PostCard
        data={{
          userName: "jissss",
          title: "",
          img: "",
          body: "",
          likes: "",
        }}
      />
      {/* <Spline scene="https://prod.spline.design/IrwsdsLYHRuhUWuo/scene.splin" /> */}
    </MainContainer>
  );
};

export default Home;
