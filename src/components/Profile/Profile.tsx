import React, { useEffect, useState } from "react";
import { Img, MainContainer } from "../../utils";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserData, isUser } from "../../services/user.service";
import ProfileCard, { ProfileProp } from "./ProfileCard";
import { useContext } from "react";
import { LoginInfo } from "../../App";
import ProfilePosts from "./ProfilePosts";

type PostData = {
  firstName: string;
  lastName: string;
  userName: string;
  showEdit: boolean;
  gender: string;
  imageUrl: string;
  likes: number;
};

const Profile = () => {
  const { userName } = useParams();
  const [show, setShow] = useState<boolean>(true);
  const [user, setUser] = useState<PostData>({
    firstName: "",
    showEdit: false,
    gender: "",
    imageUrl: "",
    lastName: "",
    likes: 0,
    userName: "",
  });
  const [, loggedInUser] = useContext(LoginInfo);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const isuser = await isUser(userName as string);
      const userData = await getUserData(userName as string);
      const likePoint = userData.data.likePoints;
      const { data } = isuser;
      // if (!data.exists) {
      //   setShow(false);
      // }
      setUser({
        ...userData.data.userData,
        likes: likePoint,
        showEdit: (loggedInUser as string) == (userName as string),
      });
    })();
  }, []);
  return show ? (
    <MainContainer style={{ flexDirection: "column" }}>
      <ProfileCard data={user}></ProfileCard>
      <ProfilePosts></ProfilePosts>
    </MainContainer>
  ) : (
    <>
      <MainContainer>
        This profile does not exists, please check the name
      </MainContainer>
    </>
  );
};
const ProfilePic = styled(Img)``;

export default Profile;
