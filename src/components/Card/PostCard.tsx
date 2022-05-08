// import React from "react";
// import { Card, Image, Text, Badge, Button, Group , useMantineTheme} from '@mantine/core';

// const PostCard = () => {
// const theme = useMantineTheme();
//   const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
//   return (
//     <Card sx={{maxWidth: 350}} shadow="sm" p="lg">
//       <Card.Section component="a" href="https://mantine.dev" target="_blank">
//         <Image
//           src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//           height={160}
//           alt="Norway"
//         />
//         <Image
//           src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//           height={160}
//           alt="Norway"
//         />
//       </Card.Section>

//       <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
//         <Text weight={500}>Norway Fjord Adventures</Text>
//         <Badge color="pink" variant="light">
//           On Sale
//         </Badge>
//       </Group>

//       <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
//         With Fjord Tours you can explore more of the magical fjord landscapes with tours and
//         activities on and around the fjords of Norway
//       </Text>

//       <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
//         Book classic tour now
//       </Button>
//     </Card>
//   );
// };

// export default PostCard;
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PostCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://avatars.dicebear.com/api/croodles/fwjdwj.svg?size=30"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
