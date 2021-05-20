import React from "react";
import setting from "@a/imgs/setting.svg"
import avator from "@a/imgs/avator.jpg"

import { AvatorCon } from "./styledChild"

const Avator = () => (
  <AvatorCon>
    <img src={avator} alt="头像" />
    <p>Sillywa</p>
    <img src={setting} alt="设置" />
  </AvatorCon>
)

export default Avator