import React, { Component } from "react";

import { TabBarContainer } from "./StyledTab";

interface IState {
  activeKey: string;
}

interface IProps {
  defaultActiveKey?: string;
  onChange?: Function;
}

// 将接口赋给组件，传入组件的属性和组件自身的state必须满足接口的标准
class TabBar extends Component<IProps, IState> {
  // 设置只读的 state
  readonly state: Readonly<IState> = {
    activeKey: this.props.defaultActiveKey || "1",
  };

  handleClick = (key: string) => {
    const { onChange } = this.props;
    return () => {
      // console.log(index, this.state.activeTab);
      if (key !== this.state.activeKey) {
        this.setState({
          activeKey: key,
        });
        onChange && onChange(key);
      }
    };
  };

  renderHeader = () =>
    // 因为我们需要将父组件的 state 往下传给 this.props.children，如果直接渲染的话，没办法传递属性，因此使用如下办法
    React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        handleClick: this.handleClick,
        activeKey: this.state.activeKey,
      });
    });

  renderContent = () =>
    React.Children.map(this.props.children, (child) => {
      let element = React.cloneElement(child as React.ReactElement<any>);
      // 当前选中哪个就渲染那个的内容
      if (element.props.tabKey === this.state.activeKey) {
        // 返回子组件的子元素
        return element.props.children;
      }
    });

  render() {
    return (
      <>
        <div>{this.renderContent()}</div>
        <TabBarContainer>{this.renderHeader()}</TabBarContainer>
      </>
    );
  }
}

export default TabBar;
