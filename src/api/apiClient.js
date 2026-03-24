const BASE_URL = "https://dummyjson.com";


export const apiClient = async (endpoint)=>{
const response = await fetch(BASE_URL+endpoint);

if (!response.ok){
throw new Error("API Failed");
}

return response.json();
}

