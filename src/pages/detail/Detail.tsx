import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import Header from "@c/header/Header";
import {getDetail} from "@/api"
import { DetailContainer } from "./styledDetail";

import Info from "./childComps/Info"
import Introduce from "./childComps/Introduce"
import ActorList from "./childComps/actors/ActorList"
import SimilarList from "./childComps/similar/SimilarList"

interface IParams {
  id: string;
}

interface IArtist {
  img: string;
  name: string;
  role: string;
}

interface ISimilar {
  img: string;
  name: string;
}

interface IState {
  actors: Array<string>;
  artist_list: Array<IArtist>;
  comments:Array<Object>;
  date: Array<string>;
  detail: string;
  director: string;
  evaluate: string;
  image: string;
  labels: Array<string>;
  movie_name: string;
  similar: Array<ISimilar>;
  star: number;
  times: number;
  type:Array<string>;
  writer: string;
}



const Detail = () => {
  let { id }: IParams = useParams();
  const [data, setData] = useState<IState>({
    actors: [],
    artist_list: [],
    comments: [],
    date: [] ,
    detail: "",
    director: "",
    evaluate: "",
    image: "",
    labels: [],
    movie_name: "",
    similar: [],
    star: 0,
    times: 0,
    type: [],
    writer: ""
  });

  useEffect(() => {
    getDetail(parseInt(id)).then(res => {
      setData(res.data)
    })
  }, [])
  console.log(data);
  return (
      
      <DetailContainer>
        <Header title="电影详情" back={true}></Header>
        <Info {...data} />
        <Introduce {...data} />
        <ActorList data={data.artist_list} />
        <SimilarList data={data.similar} />
      </DetailContainer>
    
  );
};

export default Detail;
