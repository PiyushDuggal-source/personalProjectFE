import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/user.service";
import { MainContainer } from "../../utils";
import PostCard from "../Card/PostCard";
import { motion } from "framer-motion";
import { BiErrorAlt } from "react-icons/bi";
import { Alert } from "@mantine/core";
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
      {error && (
        <Alert
          icon={<BiErrorAlt size={16} />}
          title="Bummer!"
          color="red"
          radius="md"
          variant="outline"
        >
          {error}
        </Alert>
      )}
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

export default Home;
