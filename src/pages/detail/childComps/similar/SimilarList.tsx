import React from "react";
import ImgItem from "../common/ImgItem";
import { SimilarCon } from "./styledSimilar";
import Panel from "@c/panel/Panel";
type IProps = {
  similars: Array<{ img: string; name: string }>;
}

export default function SimilarList({ similars }: IProps) {
  return (
    <SimilarCon>
      <Panel title="相似推荐">
        <div className="content">
          {similars.map((item, i) => (
            <ImgItem image={item.img} describe={[item.name]} key={i} />
          ))}
        </div>
      </Panel>
    </SimilarCon>
  );
}
