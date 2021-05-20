import React from "react";
import CardItem from "./CardItem"

import {CardsCon} from "./styledCards"

import card from "@a/imgs/card1.svg"
import vip from "@a/imgs/vip.svg"

const Cards = () => (
  <CardsCon>
    <CardItem num={0} icon={card} title="优惠券" />
    <CardItem num={0} icon={vip} title="权益卡" />
  </CardsCon>
)

export default Cards