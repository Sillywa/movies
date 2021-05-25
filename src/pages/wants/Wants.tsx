import React from "react";
import Header from "@c/header/Header";
import WantList from "./ChildComps/WantList";

import { connect } from "react-redux";

import { WantsCon } from "./styledWants";

interface IProps {
  data?: Array<any>;
}

interface IState {
  tabReducer: string;
  wantReducer: Array<Object>;
}

const Wants = (props: IProps) => {
  console.log(props.data);
  return props.data ? (
    <WantsCon className="wants">
      <Header title="想看" />
      {/* ref传递给子组件里面的DOM元素 */}
      {props.data.length > 0 ? (
        <WantList data={props.data} />
      ) : (
        <p className="no-wanted">暂无想看电影</p>
      )}
    </WantsCon>
  ) : (
    <div>loading...</div>
  );
};

const mapStateToProps = (state:IState) => {
  return {
    data: state.wantReducer,
  };
};

export default connect(mapStateToProps, null)(Wants);
