import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { Tooltip } from "@mantine/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "../../utils";
import { isLiked } from "../../services/user.service";

import { LoginInfo } from "../../App";
export type PostData = {
  data: {
    _id: string;
    userName: string;
    title: string;
    img: string;
    body: string;
    likes: number;
  };
};

export default function PostCard(prop: PostData) {
  const [alreadyLiked, setAlreadyLiked] = React.useState<boolean>(false);
  const [notloggedIn, setNotLoggedIn] = React.useState(false);
  const [toolTopMsg, setToolTipMsg] = React.useState("Already Liked!");
  const login = React.useContext(LoginInfo);
  const liked = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    postId: string,
    like: number
  ) => {
    try {
      const isPostLiked = await isLiked(postId);
      const { data } = isPostLiked;
      if (!data.liked) {
        const btn = document.getElementById(postId)!;
        btn.innerText = `${like + 1}`;
      } else {
        setAlreadyLiked(true);
        setTimeout(() => setAlreadyLiked(false), 2000);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const notLogin = () => {
    setNotLoggedIn(true);
    setToolTipMsg("Login To like this Post");
  };
  return (
    <Card sx={{ width: 300, maxWidth: 345, minWidth: 280, margin: "2px 0" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {prop.data.userName[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={prop.data.userName}
      />
      <CardMedia
        component="img"
        height="194"
        image={prop.data.img}
        alt="Paella dish"
      />
      <CardContent>
        <PostTitle>{prop.data.title}</PostTitle>
        <PostBody>{prop.data.body}</PostBody>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip
          label={toolTopMsg}
          opened={alreadyLiked || notloggedIn}
          transition="slide-up"
          transitionDuration={300}
          transitionTimingFunction="ease"
        >
          <IconButton
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              login[0] ? liked(e, prop.data._id, prop.data.likes) : notLogin();
            }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
            <p id={prop.data._id}>{prop.data.likes}</p>
          </IconButton>
        </Tooltip>
        {/* <IconButton aria-label="share"><ShareIcon /></IconButton> */}
      </CardActions>
    </Card>
  );
}

const PostTitle = styled(Box)`
  font-size: 20px;
  word-wrap: break-word;
`;

const PostBody = styled(Box)`
  word-wrap: break-word;
  color: rgba(255, 255, 255, 0.7);
`;
