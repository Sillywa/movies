import React from "react";

import Avator from "./ChildComps/Avator";
import Panel from "@c/panel/Panel";
import Orders from "./ChildComps/orders/Orders";
import Lists from "./ChildComps/lists/Lists";
import Cards from "./ChildComps/cards/Cards";

import { ProfileCon } from "./styledProfile";

const Profile = () => {
  return (
    <ProfileCon className="profile">
      {/* <Header title="我的" /> */}
      <Avator />
      <Cards />
      <Panel title="我的订单" border="circle">
        <Orders />
      </Panel>
      <Panel title="我的消息" border="circle">
        <Lists />
      </Panel>
    </ProfileCon>
  );
};
export default  Profile