import React from "react";
import ImgItem from "../common/ImgItem";
import {SimilarCon} from "./styledSimilar"
interface IProps {
  data: Array<{ img: string; name: string }>;
}

export default function SimilarList({ data }: IProps) {
  return (
    <SimilarCon>
      <header>相似推荐</header>
      <div className="content">
        {data.map((item, i) => (
          <ImgItem image={item.img} describe={[item.name]} key={i} />
        ))}
      </div>  
      
    </SimilarCon>
  );
}
