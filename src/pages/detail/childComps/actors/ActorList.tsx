import React from "react";
import ImgItem from "../common/ImgItem";
import {ActorListCon} from "./styledActors"
interface IProps {
  actors: Array<{ name: string; role: string; img: string }>;
}

export default function ActorList({ actors }: IProps) {
  return (
    <ActorListCon>
      <header>演员表</header>
      <div className="content">{actors.map((item, i) => (
        <ImgItem image={item.img} describe={[item.name, item.role]} key={i} />
      ))}</div>
      
    </ActorListCon>
  );
}
