import React from "react";
import WantItem from "./WantItem";

import { WantListContainer } from "./styledChild";

type IProps = {
  data: Array<any>;
}
// const WantList = React.forwardRef((props: IProps, ref:any) => (
//   <WantListContainer onScroll={props.handleScroll}>
//     {props.data.map((item) => (
//       <WantItem {...item} key={item.serial_number} />
//     ))}
//     {/* <p className="loading" ref={ref}>加载中...</p> */}
//   </WantListContainer>
// ));

const WantList = (props: IProps) => (
  <WantListContainer>
    {props.data.map((item) => (
      <WantItem {...item} key={item.serial_number} />
    ))}
    {/* <p className="loading" ref={ref}>加载中...</p> */}
  </WantListContainer>
)

export default WantList;
