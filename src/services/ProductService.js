import { apiClient } from "../api/apiClient";
export const getProducts = async() =>{
const data = await apiClient("/products");
return data.products;


}