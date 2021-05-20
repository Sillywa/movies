import React from 'react'
import {IntroContainer} from "./styledIntro"
interface IProps {
  detail: string;
}

export default function Introduce({detail}:IProps) {
  return (
    <IntroContainer>
      <header>剧情简介</header>
      <p>{detail}</p>
    </IntroContainer>
  )
}
