import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const addMovie = () => {const newMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
    trailer: trailer,
  };
  fetch(`${API}/movies/`,{
    method:"POST",
    body:JSON.stringify(newMovie),
    headers:{
      "Content-Type":"application/json",
    },
  }).then(() => history.push("/movies"));
};
  
  return (
    <div className="add-movie-form">
      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
      <TextField type="text" label="Poster" onChange={(event) => setPoster(event.target.value)} />
      <TextField type="text" label="Rating" onChange={(event) => setRating(event.target.value)} />
      <TextField type="text" label="Summary" onChange={(event) => setSummary(event.target.value)} />
      <TextField type="text" label="Trailer" onChange={(event) => setTrailer(event.target.value)} />
      <button onClick={() => addMovie()}variant="contained"
      >Add movie
      </button>
    </div>
  );
}
