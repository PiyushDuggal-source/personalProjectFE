import React from "react";

const PostCard = () => {
  return <div>PostCard</div>;
};

export default PostCard;
// import React, { useContext, useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import { styled } from "@mui/material/styles";
// import CardMedia from "@mui/material/CardMedia";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import { Button } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { Link } from "react-router-dom";
// import Collapse from "@mui/material/Collapse";
// import { CardHeader } from "@mui/material";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import moment from "moment";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import TextField from "@mui/material/TextField";
// import { useFormik } from "formik";
// import { Box } from "@mui/material";
// import {validateCommentSchema} from '../../ValidateSchema&InitialValues/validateSchemas'
// import { commentInitialValues } from "../../ValidateSchema&InitialValues/initialValues";
// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
// const PostCard = (data) => {
//   const [icon, setIcon] = useState(false);
//   const [expanded, setExpanded] = React.useState(false);
//   const [expandedComment, setExpandedComment] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const formik = useFormik({
//     initialValues: commentInitialValues,
//     validationSchema: validateCommentSchema,
//     onSubmit: (value) => {
//       console.log(value);
//     },
//   });

//   const userName = useContext(UserName);
//   return (
//     <PostCardContent>
//       <Card sx={{ maxWidth: 360 }}>
//         <CardHeader
//           avatar={
//             <Link
//               className="d-flex flex-row align-items-center"
//               style={{ textDecoration: "none", color: "black" }}
//               to={`/${
//                 data.data.author === userName
//                   ? userName
//                   : `user/${data.data.author}`
//               }`}
//             >
//               {" "}
//               <i className="fa-solid fa-user-secret me-1 fa-2x"></i>
//             </Link>
//           }
//           title={
//             <Link
//               className="d-flex flex-row align-items-center"
//               style={{ textDecoration: "none", color: "black" }}
//               to={`/${
//                 data.data.author === userName
//                   ? userName
//                   : `user/${data.data.author}`
//               }`}
//             >
//               {" "}
//               <AuthorName>{data.data.author}</AuthorName>
//             </Link>
//           }
//           subheader={
//             <PostDate>
//               {moment(data.data.date).format("MMMM Do YYYY, h:mm:ss a")}
//             </PostDate>
//           }
//         ></CardHeader>
//         <hr style={{ marginTop: -2 }} />
//         <PostMedia>
//           <CardMedia
//             component="img"
//             image={`${data.data.imgUrl[1]}`}
//             sx={{ width: 250, height: 150 }}
//             alt="green iguana"
//           />
//           <CardMedia
//             component="img"
//             image={`${data.data.imgUrl[0]}`}
//             sx={{ width: 250, height: 150 }}
//             alt="green iguana"
//           />
//         </PostMedia>
//         <CardContent>
//           <hr style={{ marginTop: -2 }} />
//           <PostTitle>{data.data.title}</PostTitle>
//           <hr style={{ marginTop: -2 }} />
//           <PostBody>{data.data.body}</PostBody>
//         </CardContent>
//         <CardActions sx={{ marginTop: -2, justifyContent: "space-between" }}>
//           <LikeSection>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <div>{data.data.likes}</div>
//           </LikeSection>
//           <IconButton onClick={() => setIcon(true)} sx={{ color: "black" }}>
//             {!icon ? <BookmarkBorderIcon /> : <BookmarkIcon />}
//           </IconButton>
//         </CardActions>
//         <CardActions sx={{ marginTop: -3 }}>
//           <CommentSection1
//             expand={expanded.toString()}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             sx={{ marginLeft: 1 }}
//           >
//             Comments
//             <ExpandMore expand={expanded} aria-label="show more">
//               <ExpandMoreIcon />
//             </ExpandMore>
//           </CommentSection1>
//         </CardActions>
//         {data.data.comments.length !== 0 ? (
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent sx={{ marginBottom: -3, marginTop: -2.5 }}>
//               {data.data.comments.map((ele, key) => {
//                 return <li key={key}>{ele}</li>;
//               })}
//             </CardContent>
//             <CardContent>
//               <Button
//                 onClick={() => setExpandedComment(!expandedComment)}
//                 sx={{ fontSize: 10, marginTop: -1 }}
//               >
//                 Comment
//               </Button>
//               <Collapse in={expandedComment} timeout="auto" unmountOnExit>
//                 <form onSubmit={formik.handleSubmit}>
//                   <TextField
//                     id="comment"
//                     name="comment"
//                     label="Comment"
//                     sx={{ marginTop: 1 }}
//                     size="small"
//                     value={formik.values.comment}
//                     onChange={formik.handleChange}
//                   ></TextField>
//                   <Button
//                     type="submit"
//                     sx={{ marginTop: 2, marginLeft: 1, fontSize: 10 }}
//                   >
//                     Post
//                   </Button>
//                 </form>
//               </Collapse>
//             </CardContent>
//           </Collapse>
//         ) : (
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent sx={{ fontSize: 14, marginTop: -2.3 }}>
//               NO comments :(, be the first one to comment{" "}
//               <Button
//                 onClick={() => setExpandedComment(!expandedComment)}
//                 sx={{ fontSize: 10 }}
//               >
//                 Comment
//               </Button>
//               <Collapse in={expandedComment} timeout="auto" unmountOnExit>
//                 <form onSubmit={formik.handleSubmit}>
//                   <TextField
//                     id="comment"
//                     name="comment"
//                     label="Comment"
//                     sx={{ marginTop: 1 }}
//                     size="small"
//                     value={formik.values.comment}
//                     onChange={formik.handleChange}
//                   ></TextField>
//                   <Button
//                     type="submit"
//                     sx={{ marginTop: 2, marginLeft: 1, fontSize: 10 }}
//                   >
//                     Post
//                   </Button>
//                 </form>
//               </Collapse>
//             </CardContent>
//           </Collapse>
//         )}
//       </Card>
//     </PostCardContent>
//   );
// };

// const PostCardContent = styled(Box)`
//   margin: 0.2rem;
// `;

// const AuthorName = styled(Box)`
//   font-size: 16px;
//   margin-bottom: -2px;
//   margin-top: 2px;
// `;

// const PostDate = styled(Box)`
//   font-size: 15px;
// `;

// const PostMedia = styled(Box)`
//   display: flex;
//   flex-direction: row;
// `;

// const PostTitle = styled(Box)`
//   margin: -5px 0 5px 0;
//   word-break: break-all;
//   font-size: 20px;
// `;

// const PostBody = styled(Box)`
//   word-break: break-all;
//   font-size: 16px;
//   color: #666;
// `;

// const LikeSection = styled(Box)`
//   display: flex;
//   margin-top: 5px;
//   justify-content: center;
//   align-items: center;
// `;

// // CardActions = styled(Box)`
// //   justify-content: space-between;
// // `;

// const CommentSection1 = styled(Box)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export default PostCard;
