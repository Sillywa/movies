import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "@c/header/Header";
import { getDetail } from "@/api";
import { DetailContainer } from "./styledDetail";

import Info from "./childComps/Info";
import Introduce from "./childComps/Introduce";
import ActorList from "./childComps/actors/ActorList";
import SimilarList from "./childComps/similar/SimilarList";
import ComList from "./childComps/comments/ComList";

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

interface IComment {
  name: string;
  date: string;
  star: string;
  content: string;
}

interface IState {
  actors: Array<string>;
  artist_list: Array<IArtist>;
  comments: Array<IComment>;
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
  type: Array<string>;
  writer: string;
  describe: string;
  introduce:string;
  serial_number: number;
}

const Detail = () => {
  let { id }: IParams = useParams();
  const [data, setData] = useState<IState>({
    actors: [],
    artist_list: [],
    comments: [],
    date: [],
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
    writer: "",
    describe: "",
    introduce:"",
    serial_number: 0
  });

  useEffect(() => {
    getDetail(parseInt(id)).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <Header title="电影详情" back={true}></Header>
      <DetailContainer>
        <Info {...data} />
        <Introduce {...data} />
        <ActorList actors={data.artist_list} />
        <SimilarList similars={data.similar} />
        <ComList comments={data.comments} />
      </DetailContainer>
    </div>
  );
};

export default Detail;
