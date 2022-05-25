import { useState } from "react";
import styled from "styled-components";
import { Box, Grid, Img, MainContainer } from "../../utils";

const ProfilePosts = () => {
  return (
    <MainContainer style={{ margin: "10px" }}>
      <Grid gap="1rem">
        <ProfilePostCard>
          <Img src=""></Img>
        </ProfilePostCard>
      </Grid>
    </MainContainer>
  );
};

const ProfilePostCard = styled(Box)`
  display: flex;
`;

export default ProfilePosts;
