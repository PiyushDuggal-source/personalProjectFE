import axios from "axios";
type PostData = {
  userName: string;
  title: string;
  body: string;
};
export const createPost = async (postData: PostData) => {
  return axios.post("http://localhost:4000/api/create", postData);
};
