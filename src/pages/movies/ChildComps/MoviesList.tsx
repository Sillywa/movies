import React, {forwardRef} from "react";
import MovieItem from "./MovieItem"
import {MovieListCon} from "./styledChild"

type IProps = {
  data: Array<any>,
  handleScroll: Function
}

const MovieList = forwardRef(({data, handleScroll}:IProps, ref:any) => (
  <MovieListCon onScroll={handleScroll}>
    {data.map((item) => (
      <MovieItem {...item} key={item.serial_number} />
    ))}
    <p className="loading" ref={ref}>加载中...</p>
  </MovieListCon>
)) 

export default MovieList