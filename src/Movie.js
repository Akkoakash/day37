import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Movie({ name, poster, rating, summary, deleteButton, id, editButton }) {
  const styles = {
    color: rating > 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const history = useHistory();
 // const summaryStyles = {
   // display: show ? "block" : "none",
 // };
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">{name}
            <IconButton color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary">
                  {show? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </IconButton >
           
            <IconButton
            color="primary"
            onClick={()=>history.push(`/movies/${id}`)}
            aria-label="Toggle summary">
                <InfoIcon/>
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">{rating}</p>
        </div>
      
        {show ? <p className="movie-summary">{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton} {editButton }
      </CardActions>
    </Card>
  );
}