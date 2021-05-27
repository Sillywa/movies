import React from "react";
import { TabItemContainer } from "./StyledTab";

type Item = {
  tabKey: string;
  icon: string;
  activeIcon: string;
  title: string;
  activeKey?: string;
  activeColor?: string;
  handleClick?: Function;
  [propertyName: string]: any;
}
const TabBarItem = (props: Item) => {
  const isActive: boolean = props.activeKey === props.tabKey;
  const { tabKey, handleClick, activeIcon, icon, title, activeColor } = props;
  return (
    <TabItemContainer
      onClick={handleClick && handleClick(tabKey)}
      className={isActive ? "active" : ""}
      activeColor={activeColor}
    >
      <img src={isActive ? activeIcon : icon} alt="" />
      <p>{title}</p>
    </TabItemContainer>
  );
};

export default TabBarItem;
