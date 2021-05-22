import React from "react";
import ImgItem from "../common/ImgItem";
import {SimilarCon} from "./styledSimilar"
interface IProps {
  similars: Array<{ img: string; name: string }>;
}

export default function SimilarList({ similars }: IProps) {
  return (
    <SimilarCon>
      <header>相似推荐</header>
      <div className="content">
        {similars.map((item, i) => (
          <ImgItem image={item.img} describe={[item.name]} key={i} />
        ))}
      </div>  
      
    </SimilarCon>
  );
}
