import { HeaderContainer } from "./styledHeader"
import { useHistory } from "react-router-dom"
import backImg from "@a/imgs/back.svg"
import { memo } from "react"

interface IHeader{
  title: string,
  back?: boolean,
  color?: string,
  bkColor?: string,
}
const Header = (props: IHeader) => {
  const {title, color, bkColor, back=false} = props
  const history = useHistory()
  const handleClick = () => {
    history.goBack()
  }
  console.log("Header render");
  return (
    <HeaderContainer color={color} bkColor={bkColor}>
      {back && <img src={backImg} alt="返回" onClick={handleClick} />} 
      <h1>{title}</h1>
    </HeaderContainer>
  )
}

export default memo(Header)