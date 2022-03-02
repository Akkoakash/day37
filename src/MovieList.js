import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {useState} from "react";
import {useEffect} from "react";
import { API } from "./global";

export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);

  const getMovies = ()=>{
    fetch(`${API}/movies`,{
      method: "Get",})
      .then((data)=> data.json())
    .then((mvs)=>setMovieList(mvs));
  };

  useEffect(()=> getMovies(),[]);

const deleteMovie = (id) => {
  fetch(`${API}/movies/${id}`,{
    method: "DELETE",
  }).then(()=>getMovies());
     };
  return( <div className="movie-list">
    {movieList.map(({ name, poster, rating, summary,id }, index) => (
      <Movie
        key={index}
        name={name}
        poster={poster}
        rating={rating}
        summary={summary} 
        deleteButton={
        <IconButton
        style={{marginLeft:"auto"}}
         onClick={()=>deleteMovie()}
            aria-label="delete"
                color="error">
        <DeleteIcon />
      </IconButton>
      }
      editButton={
        <IconButton 
            onClick={()=>history.push(`/movies/edit/${id}`)}
            aria-label="delete"
                color="secondary">
        <EditIcon />
      </IconButton>
      }
      id={id}
    />
    ))}
  </div>
  );
}
