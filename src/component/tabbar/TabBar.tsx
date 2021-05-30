import React, {useEffect, useState } from "react";

import { TabBarContainer } from "./StyledTab";

// type IProps = React.PropsWithChildren<{
//   defaultActiveKey?: string;
//   onChange?: Function;
// }>

type IProps = {
  defaultActiveKey: string;
  onChange?: Function;
}

// 将接口赋给组件，传入组件的属性和组件自身的state必须满足接口的标准

const TabBar:React.FC<IProps> = ({defaultActiveKey, onChange, children}) => {
    const [activeKey, setKey] = useState<string>()

    useEffect(() => {
      setKey(defaultActiveKey)
    }, [defaultActiveKey])
  
    const handleClick = (key: string) => {
      return () => {
        // console.log(index, this.state.activeTab);
        if (key !== activeKey) {
          setKey(key);
          onChange && onChange(key);
        }
      };
    };
  
    const renderHeader = () =>
      // 因为我们需要将父组件的 state 往下传给 this.props.children，如果直接渲染的话，没办法传递属性，因此使用如下办法
      React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          handleClick: handleClick,
          activeKey: activeKey,
        });
      });
  
    const renderContent = () =>
      React.Children.map(children, (child) => {
        let element = React.cloneElement(child as React.ReactElement<any>);
        // 当前选中哪个就渲染那个的内容
        if (element.props.tabKey === activeKey) {
          // 返回子组件的子元素
          return element.props.children;
        }
      });
  
    
      return (
        <>
          {renderContent()}
          <TabBarContainer>{renderHeader()}</TabBarContainer>
        </>
      );
}

export default TabBar;
