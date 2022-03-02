import {useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useEffect, useState } from "react";
import { API } from "./global";
export function MovieDetails() {
  const { id } = useParams();
   const [movie, setMovie] = useState({});

   useEffect(()=>{
    fetch(`${API}/movies/${id}`,{
    method: "Get",})
     .then((data)=> data.json())
   .then((mv)=>setMovie(mv))
   .catch((err)=> console.log(err));
  },[]);
//console.log(id, movieList);
//const movie={};
  const history= useHistory();
  return (
    <div>
      <iframe width="853" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div classname="movie-detail-container">
        <div classname="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <button variant="cotained"
        onClick={()=>history.goBack()}
        startIcon={<ArrowBackIosIcon/>}
        >Back</button>
      </div>
    </div>
  );
}
