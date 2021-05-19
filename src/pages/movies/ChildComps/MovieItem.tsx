import React from "react";
import Star from "./Star";

import { MovieItemCon } from "./styledChild"

interface IProps {
  image: string;
  movie_name: string;
  star: number;
}

const MovieItem = ({ image, movie_name, star }: IProps) => (
  <MovieItemCon>
    <img src={image} alt="" />
    <div className="content">
      <p className="title">{movie_name}</p>
      <div className="star">
        <Star star={star} /> 
        <span>{star}</span>
      </div>
    </div>
  </MovieItemCon>
);

export default MovieItem
