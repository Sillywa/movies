import React from "react";

import {CardCon} from "./styledCards"

type IProps = {
  icon: string;
  num: number;
  title: string;
}

const CardItem = ({icon, num, title}:IProps) => (
  <CardCon>
    <div>
      <p>{title}</p>
      <p>共 <span>{num}</span> 张</p>
    </div>
    <img src={icon} alt="优惠券" />
  </CardCon>
)

export default CardItem