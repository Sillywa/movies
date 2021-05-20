import React from 'react'
import Star from "@/pages/movies/ChildComps/Star"

import {InfoContainer} from "./styledInfo"

interface IProps {
  image:string;
  movie_name: string;
  times: number;
  date: Array<string>;
  evaluate: string;
  star:number;
  director: string;
  writer: string;
  type: Array<string>;
  actors: Array<string>;
}

export default function Info({movie_name, times, date, evaluate, star, director, writer, type, actors, image}:IProps) {
  return (
    <InfoContainer image={image.replace(/\\/g, "")}>
      <div className="abstract">
        <header>{movie_name}</header>
        <p><span>{times}</span>分钟</p>
        <p>{date[0]}</p>
        <p>{evaluate}</p>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="title">{movie_name}</div>
        <div className="star-content">
          <span className="name">评分</span>
          <Star star={star} /> 
          <span>{star}</span>
        </div>
        <div>
          <span className="name">导演</span>
          <span>{director}</span>
        </div>
        <div>
          <span className="name">编剧</span>
          <span>{writer}</span>
        </div>
        <div>
          <span className="name">类型</span>
          <span>{type.join("/")}</span>
        </div>
        <div>
          <span className="name">演员</span>
          <span>{actors.join("/")}</span>
        </div>
      </div>
    
    </InfoContainer>
  )
}
