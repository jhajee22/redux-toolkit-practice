import { apiClient } from "../api/apiClient";
export const getQuotes = async() =>{
const data = await apiClient("/quotes");
return data.quotes;


}

