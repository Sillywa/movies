import { HeaderContainer } from "./styledHeader"

interface IHeader{
  title: string,
  color?: string,
  bkColor?: string,
}

const Header = (props: IHeader) => {
  const {title, color, bkColor} = props
  return (
    <HeaderContainer color={color} bkColor={bkColor}>
      <h1>{title}</h1>
    </HeaderContainer>
  )
}

export default Header