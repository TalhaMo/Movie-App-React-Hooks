import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList';
import MovieRating from "./components/MovieRating";
import MovieNavbar from "./components/MovieNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [movies, setMovies]=useState([
    {id: uuidv4(),
    name:'La casa de papel' ,
    image:'https://mcetv.fr/wp-content/uploads/2019/09/La-Casa-de-Papel-saison-4-tout-ce-qui-faut-savoir-sur-la-s%C3%A9rie-Netflix-grande.jpg',
    date:2020,
    rate:5,
  },
  {id:uuidv4(),
    name:'Vikings',
    image:'https://www.ecranlarge.com/uploads/image/001/156/vikings-photo-katheryn-winnick-1156631.jpg',
    date:2019,
    rate:4,
  },
  {id:uuidv4(),
    name:'The irishman',
    image:'https://media3.s-nbcnews.com/i/newscms/2019_31/2954501/190731-the-irishman-netflix-robert-de-niro-al-pacino-se-449p_e9ff8e8a91a9292ba9ab86ccdb2ec9e4.jpg',
    date:2019,
    rate:3,
  },
  {id:uuidv4(),
    name:'Titanic',
    image:'https://images-na.ssl-images-amazon.com/images/I/51mTtUGvUCL.jpg',
    date:2000,
    rate:5,
  },
  {id:uuidv4(),
    name:'The assistant',
    image:'https://allthingsmoviesuk.files.wordpress.com/2020/08/the-assistant-1587982217.jpg',
    date:2019,
    rate:5,
  },
  {id:uuidv4(),
    name:'Bad Boys For Life',
    image:'https://i.ytimg.com/vi/P9-EBg4QGEY/hqdefault.jpg',
    date:2020,
    rate:5,
  }
  ])

const addMovie=(movie)=>{
  const newMovies=[...movies, movie];
  setMovies(newMovies)
}
const [useRating, setRating] = useState(0);
  const Rating = Rate => setRating(Rate);
const [Search, setSearch] = useState("");
  const search = (movie) => {
    setSearch(movie);
  };


  return (
    <div className="App">
      <h2>Movie App React Hooks</h2>
      <MovieNavbar addMovie={addMovie} search={search}/>
      <h4>Click here to display movies</h4>
    <MovieRating Rating={Rating} />
    <div className='movieList'>
    <MovieList movies={movies.filter(
    (movie) =>
    movie.name.toLowerCase().indexOf(Search.toLowerCase().trim()) !== -1 &&
      movie.rate <= useRating
  )}/>
    </div>
    </div>
  );
}

export default App;
