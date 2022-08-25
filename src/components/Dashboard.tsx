import React, { useEffect } from "react";
// import "./Card.css"
import styles from "./Dashboard.module.css"
import { useSelector,useDispatch } from "react-redux";
import { getData } from "../redux/action/getData";


const Dashboard = () => {
  const data=useSelector((state:any)=>state.moviesList)
  const dispatch=useDispatch()
  const moviesAction = async () => {
    dispatch(await getData());
  };
  
  useEffect(() => {
    moviesAction();
  }, []);

  return (
    <div>
      <h2>Favorite Movies List</h2>
      <div className={styles.root}>
          {
            data ? data?.map((movies:any)=>{
              return(
                <div className={styles.card}>
            <div className={styles.movie}>
              <img src={movies.image_url} alt="" />
            </div>
            <div className={styles.movieTitle}>
              <h3>{movies.name}</h3>
              <p>{movies.time} / {movies.type}</p>
            </div>
            <div className={styles.movieDetails}>
              <h3>Summary</h3>
              <p>{movies.description}</p>
            </div>
          </div>
              )
            }) :<p>No Movies Found</p>
          }
        </div>
    </div>
  );
};
export default Dashboard;
