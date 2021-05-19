import React from "react";
import {PanelCon} from "./styledChild"

interface IProps {
  title: string,
  children:React.ReactElement|Array<React.ReactElement> 
}



const Panel = ({title, children}:IProps) => (
  <PanelCon>
    <header>{title}</header>
    <div>
      {children}
    </div>
  </PanelCon>
)

export default Panel