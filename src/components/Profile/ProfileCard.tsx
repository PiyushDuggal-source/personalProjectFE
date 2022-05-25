import React from "react";
import styled from "styled-components";
import { MdOutlineEdit } from "react-icons/md";
import { Box, Img, MainContainer } from "../../utils";
import { GiGlassHeart } from "react-icons/gi";
import { Button, Tooltip } from "@mantine/core";
import useMatchMedia from "../../hooks/useMatchMedia";
import { BsInfoCircleFill } from "react-icons/bs";

export type ProfileProp = {
  data: {
    showEdit: boolean;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    imageUrl: string;
    likes: number;
  };
};

const ProfileCard = (prop: ProfileProp) => {
  const toggle600 = useMatchMedia();
  return (
    <MainContainer style={{ display: "flex", flexDirection: "column" }}>
      <Top>
        <ProfilePic src={prop.data.imageUrl} width="150px" />{" "}
        <UserName>{prop.data.userName}</UserName>
        <Name>
          {prop.data.firstName} {prop.data.lastName}
        </Name>
      </Top>
      <Middle>
        <Likes>
          <GiGlassHeart size={20} />
          {prop.data.likes}
          <Tooltip
            style={{ margin: "0 0 0 10px" }}
            label="This is your Like Points, 1L = 12 Points"
            position={toggle600 ? "bottom" : "right"}
          >
            <BsInfoCircleFill
              size={14}
              style={{ display: "block", opacity: 0.5 }}
            />
          </Tooltip>
        </Likes>
      </Middle>
      {prop.data.showEdit ? (
        <Button
          style={{ marginTop: 10 }}
          variant="outline"
          rightIcon={<MdOutlineEdit size={14} />}
        >
          Edit Your Profile
        </Button>
      ) : (
        <></>
      )}
    </MainContainer>
  );
};

const ProfilePic = styled(Img)``;
const Top = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const UserName = styled(Box)``;
const Name = styled(Box)`
  font-size: 20px;
`;
const Middle = styled(Box)``;

const Likes = styled(Box)``;

export default ProfileCard;
