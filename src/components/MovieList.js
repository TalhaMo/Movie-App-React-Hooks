import React from 'react';
import {Card, CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import StarRatingComponent from "react-star-rating-component";
import './MovieList.css';

const MovieList = (props) => {
  return (
    <div>
    {props.movies.map((movie,index)=>          
      <Card className='card' key={index} >
        <CardImg top width="50%" src={movie.image} className='img' alt="Card image cap" />
        <CardBody>
          <CardTitle className='title' key={movie.id}>{movie.name}</CardTitle>
          <CardSubtitle>{movie.date}</CardSubtitle>
         
          <StarRatingComponent value={movie.rate} starCount={5} />
        </CardBody>
      </Card>
      )}
    </div>
  );
};

export default MovieList; 

