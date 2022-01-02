import axios from "axios";



export const search_api = axios.create({

    baseURL:`https://api.themoviedb.org/3`
  
  });
  