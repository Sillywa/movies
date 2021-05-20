import React, { Component } from "react";
import Header from "@c/header/Header";
import WantList from "./ChildComps/WantList";

import { getMovies } from "@/api";
import {WantsCon} from "./styledWants"

interface IState {
  data: Array<any>
}

export default class Wants extends Component<{}, IState> {
  readonly state:Readonly<IState> = {
    data: [],
  };
  
  getMovieList = () => {
    getMovies(1, 10).then((res) => {
      this.setState({
        data: res.data
      })
    });
  }

  render() {
    return this.state.data.length > 0 ? (
      <WantsCon className="wants">
        <Header title="想看" />
        {/* ref传递给子组件里面的DOM元素 */}
        <WantList data={this.state.data}/>
      </WantsCon>
    ) : (
      <div>Loading...</div>
    );
  }
  componentDidMount() {
    // 加载第一页
    this.getMovieList()
  }
}
