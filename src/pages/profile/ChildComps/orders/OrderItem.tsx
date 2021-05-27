import React from "react";

import { OrderItemCon } from "./styledOrders"

type IProps = {
  icon: string;
  title: string;
}

const OrderItem = ({icon, title}:IProps) => (
  <OrderItemCon>
    <img src={icon} alt="" />
    <p>{title}</p>
  </OrderItemCon>
)

export default OrderItem