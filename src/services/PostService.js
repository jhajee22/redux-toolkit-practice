import { apiClient } from "../api/apiClient";
export const getPost = async() =>{
const data = await apiClient("/posts");
return data.posts;


}

