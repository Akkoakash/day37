import {useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./App.css";
import {double,msg} from "./msg";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {AddColor}from"./AddColor";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";
import { Msg } from "./Msg.1";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

console.log(double(4));
export default function App() {
  const names = ["Harish", "Kavi", "Kumar", "Vignesh"];
  const users = [
  ];
  const INITIAL_Movie_List = [
    {id:"100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {id:"101",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {id:"102",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {id:"103",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {id:"104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {id:"105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {id:"106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {id:"107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ];
 const[movieList,setMovieList]=useState(INITIAL_Movie_List); 
const history= useHistory();
const[mode, setMode]= useState("dark");
const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return ( 
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight:"100vh"}} elevation={4} >
  <div className="App">
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button color="inherit" onClick={()=>history.push("/Movies")}>Movies</Button>
          <Button color="inherit" onClick={()=>history.push("/color-game")}>Color game</Button>
          <Button color="inherit" onClick={()=>history.push("/tic-tac-toe")}>Tic Tac Toe</Button>
          <Button color="inherit" onClick={()=>history.push("/movies/add")}>Add Movies</Button>
          <Button color="inherit" style={{marginLeft:"auto"}}
          startIcon={mode === 'dark' ? <Brightness7Icon />: <Brightness4Icon />}
          onClick={()=>setMode(mode === "light"? "dark": "light")}
          >{mode === "light"? "dark": "light"} mode</Button>
          </Toolbar>
      </AppBar>
      <div className="route-container">
      <Switch> 
      <Route exact path="/">
          <Msg/>
          </Route>
          <Route path="/films">
          <Redirect to="/movies"/>
          </Route>
          <Route path="/movies/add">
          <AddMovie movieList={movieList} setMovieList={setMovieList}/>
          </Route>
          <Route path="/movies/edit/:id"> 
          <EditMovie/>
           </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        <Route path="/movies">
         < MovieList />
        </Route>
        <Route path="/color-game">
         <AddColor/>
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe/>
        </Route>
        <Route path="**"> <NotFound/></Route>
         </Switch>
         </div>
     </div>
     </Paper>
     </ThemeProvider>
  );
}


