import React from "react";
import {PanelCon} from "./styledPanel"

interface IProps {
  title: string,
  children:React.ReactElement|Array<React.ReactElement>,
  border?: string;
}



const Panel = ({title, children, border}:IProps) => (
  <PanelCon border={border} className="panel">
    <header className="panel-header">{title}</header>
    <div className="panel-content">
      {children}
    </div>
  </PanelCon>
)

export default Panel