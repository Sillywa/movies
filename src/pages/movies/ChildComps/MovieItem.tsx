import React from "react";
import Star from "./Star";

import { MovieItemCon } from "./styledChild"

import { useHistory } from "react-router-dom"

type IProps = {
  image: string;
  movie_name: string;
  star: number;
  serial_number: number;
}

const MovieItem = ({ image, movie_name, star, serial_number }: IProps) => {
  const history = useHistory()
  const handleClick = () => {
    // 路由跳转
    history.push(`/detail/${serial_number}`)
  }
  return (
    <MovieItemCon onClick={handleClick}>
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
}

export default MovieItem
