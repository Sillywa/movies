import React from "react";
import {OrdersCon} from "./styledOrders"
import OrderItem from "./OrderItem";

import movie from "@a/imgs/movie.svg"
import actor from "@a/imgs/actor.svg"
import box from "@a/imgs/box.svg"

const Orders = () => (
  <OrdersCon>
    <OrderItem icon={movie} title="电影" />
    <OrderItem icon={actor} title="演出" />
    <OrderItem icon={box} title="礼盒" />
  </OrdersCon>
)

export default Orders