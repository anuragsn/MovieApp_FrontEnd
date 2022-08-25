import * as t from "../constant/movies";
import axios from "axios";

export const getData = async () => {
    let data;
    const token = JSON.parse(localStorage.getItem('user')|| '{}');
    
    await axios
      .get("http://localhost:3001/AllMovies",{ headers: {"Authorization" : `Bearer ${token.access_token}`} })
      .then((res) => {
         data = res.data;
      })
      .catch((err) => {
        const errMsg = err.message;
        console.log(errMsg)
      });
      return {
        type: t.GETMOVIES,
        payload: data,
      };
};

