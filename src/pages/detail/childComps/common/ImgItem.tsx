import React from 'react'
import {ImgContainer} from "./styledImg"
interface IProps {
  image: string,
  describe: Array<string>
}

export default function ImgItem({image, describe}:IProps) {
  return (
    <ImgContainer>
      <img src={image} alt="" />
      {describe.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </ImgContainer>
  )
}
