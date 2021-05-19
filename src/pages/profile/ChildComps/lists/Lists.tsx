import React from "react"
import ListItem from "./ListItem"

import message from "../../../../asset/imgs/info.svg"
import profile from "../../../../asset/imgs/profile.svg"
import address from "../../../../asset/imgs/address.svg"
import service from "../../../../asset/imgs/service.svg"
import bank from "../../../../asset/imgs/bank.svg"

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