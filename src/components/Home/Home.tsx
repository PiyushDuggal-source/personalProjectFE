import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllPosts } from "../../services/user.service";
import { Box, MainContainer } from "../../utils";
import PostCard from "../Card/PostCard";
// import Spline from "@splinetool/react-spline";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      const getPost = async () => {
        const post = await getAllPosts();
        if (post.data.error) {
          setError("Unable to fetch the POSTS");
        } else {
          setPosts(post.data.post);
        }
      };
      getPost();
    } catch (err: any) {
      setError("Unable to fetch the POSTS");
    }
  }, []);

  return (
    <MainContainer>
      <PostDisplay>
        {posts.map((ele, key) => {
          return <PostCard key={key} data={ele} />;
        })}
      </PostDisplay>
      {/* <Spline scene="https://prod.spline.design/IrwsdsLYHRuhUWuo/scene.splin" /> */}
    </MainContainer>
  );
};

const PostDisplay = styled(Box)``;
export default Home;
