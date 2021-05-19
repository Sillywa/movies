import React from "react";
import right from "../../../../asset/imgs/right.svg"

import {ListItemCon} from "./styledLists"

interface IProps {
  icon: string;
  title: string;
}

const ListItem = ({icon, title}:IProps) => (
  <ListItemCon>
    <img src={icon} alt="" />
    <p>{title}</p>
    <img src={right} alt="" />
  </ListItemCon>
)

export default ListItem