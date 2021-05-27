import React from "react";

import star_normal from "@a/imgs/star.svg"
import star_active from "@a/imgs/star_active.svg"

import { StarContainer } from "./styledChild"

type IProps = {
  star: number
}

const Star = ({star}: IProps) => (
  <StarContainer>
    {(new Array(5)).fill(0).map((_, i) => (
       <img src={i+1 <= Math.round(star)/2 ? star_active : star_normal} key={i} alt={i+"0"}></img>
    ))}
  </StarContainer>
)

export default Star