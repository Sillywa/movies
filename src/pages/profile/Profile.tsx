import React, { Component } from 'react'
// import Header from '../../component/header/Header'

import Avator from './ChildComps/Avator'
import Panel from './ChildComps/Panel'
import Orders from './ChildComps/orders/Orders'
import Lists from './ChildComps/lists/Lists'
import Cards from './ChildComps/cards/Cards'

import {ProfileCon} from "./styledProfile"

export default class Profile extends Component {
  render() {
    return (
      <ProfileCon className="profile">
        {/* <Header title="我的" /> */}
          <Avator />
          <Cards />
          <Panel title="我的订单">
            <Orders />
          </Panel>
          <Panel title="我的消息">
            <Lists />
          </Panel>     
      </ProfileCon>
    )
  }
}
