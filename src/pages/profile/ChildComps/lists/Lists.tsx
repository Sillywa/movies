import React from "react"
import ListItem from "./ListItem"

import message from "@a/imgs/info.svg"
import profile from "@a/imgs/profile.svg"
import address from "@a/imgs/address.svg"
import service from "@a/imgs/service.svg"
import bank from "@a/imgs/bank.svg"

const Lists = () => (
  <div>
    <ListItem icon={message} title="消息中心" />
    <ListItem icon={profile} title="常用观影人" />
    <ListItem icon={address} title="收货地址" />
    <ListItem icon={service} title="在线客服" />
    <ListItem icon={bank} title="银行卡" />
  </div>
)

export default Lists