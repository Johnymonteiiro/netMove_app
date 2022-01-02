import axios from "axios";

export const tv_api = axios.create({

  baseURL:'https://api.themoviedb.org/3/tv/'

});