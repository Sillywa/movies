import React from "react";
import Star from "./Star";

import { MovieItemCon } from "./styledChild"

import withToDetail from "@/hoc/withToDetail"

type IProps = {
  image: string;
  movie_name: string;
  star: number;
  handleClick: Function;
}

const MovieItem = ({ image, movie_name, star, handleClick }: IProps) => {
  // const history = useHistory()
  // const handleClick = () => {
  //   // 路由跳转
  //   history.push(`/detail/${serial_number}`)
  // }
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

export default withToDetail(MovieItem)
