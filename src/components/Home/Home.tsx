import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllPosts } from "../../services/user.service";
import { Box, MainContainer } from "../../utils";
import PostCard from "../Card/PostCard";
import { motion } from "framer-motion";
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

  const spring = {
    type: "",
    stiffness: -300,
  };
  return (
    <MainContainer>
      <motion.div
        initial={{ scale: 0.5 }}
        transition={{ type: "spring" }}
        animate={{ scale: 1 }}
      >
        {posts.map((ele, key) => {
          return <PostCard key={key} data={ele} />;
        })}
      </motion.div>
      {/* <Spline scene="https://prod.spline.design/IrwsdsLYHRuhUWuo/scene.splin" /> */}
    </MainContainer>
  );
};

const PostDisplay = styled(Box)``;
export default Home;
