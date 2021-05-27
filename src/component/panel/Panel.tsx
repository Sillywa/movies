import React from "react";
import {PanelCon} from "./styledPanel"

type IProps = {
  title: string,
  border?: string;
}

const Panel:React.FC<IProps> = ({title, children, border}) => (
  <PanelCon border={border} className="panel">
    <header className="panel-header">{title}</header>
    <div className="panel-content">
      {children}
    </div>
  </PanelCon>
)

export default Panel