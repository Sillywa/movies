import React, { useEffect, useRef, useState } from "react";
import Header from "@c/header/Header";
import MoviesList from "./ChildComps/MoviesList";

import { MovieCon } from "./styledMovies";

import { getMovies } from "@/api";

import { debounce } from "@/utils";

type IState = {
  movies: Array<any>;
  nextPage: number;
  pageSize: number;
}

// const MemoHeader = memo(Header)

const Movies = () => {
  console.log("movies render");
  let isUnmounted = false
  const [data, setData] = useState<IState>({
    movies: [],
    nextPage: 1,
    pageSize: 18,
  });

  const loading: React.RefObject<unknown> = useRef();

  const getMoviesList = async (isUnmounted:boolean) => {
    const { nextPage, pageSize, movies } = data;
    const res = await getMovies(nextPage, pageSize)
    
    !isUnmounted && setData({
      movies: movies.concat(res.data),
      nextPage: nextPage + 1,
      pageSize: pageSize,
    });
  };

  const handleScroll = debounce(() => {
    const element = loading.current as HTMLElement;
    const bodyHeight =
      document.body.clientHeight || document.documentElement.clientHeight;
    if (element) {
      const top = element.getBoundingClientRect().top;
      if (top < bodyHeight) {
        getMoviesList(isUnmounted);
      }
    }
  }, 1000);
  
  useEffect(() => {
    
    getMoviesList(isUnmounted)
    return () => {
      isUnmounted = true
    }
  }, []);
  return (
    <MovieCon className="movies">
      <Header title="电影" />
      <MoviesList
        data={data.movies}
        ref={loading}
        handleScroll={handleScroll}
      />
    </MovieCon>
  );
};

export default Movies;
