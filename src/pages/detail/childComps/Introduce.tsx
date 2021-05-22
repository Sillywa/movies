import React from 'react'
import {IntroContainer} from "./styledIntro"
import Panel from "@c/panel/Panel"
interface IProps {
  detail: string;
}

export default function Introduce({detail}:IProps) {
  return (
    <IntroContainer>
     <Panel title="剧情简介">
     <p>{detail}</p>
     </Panel>
      
    </IntroContainer>
  )
}
