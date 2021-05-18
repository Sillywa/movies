import React from "react";
import MovieItem from "./MovieItem";

import { MovieListContainer } from "./styledMovies";

interface IProps {
  data: Array<any>;
  handleScroll?: Function;
}
// 父元素将 ref 向下传递获取子元素，使用 forwardRef 获取父元素传递过来的 ref
const MovieList = React.forwardRef((props: IProps, ref:any) => (
  <MovieListContainer onScroll={props.handleScroll}>
    {props.data.map((item) => (
      <MovieItem {...item} key={item.serial_number} />
    ))}
    <p className="loading" ref={ref}>加载中...</p>
  </MovieListContainer>
));

export default MovieList;
