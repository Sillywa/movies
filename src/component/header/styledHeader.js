import styled from "styled-components"

const HeaderContainer = styled.div`
  color: ${({color="#fff"}) => color};
  background-color: ${({bkColor="#d81e06"})=>bkColor};
  height: 45px;
  display: flex;
  align-items: center;
  img {
    width: 26px;
    height: 26px;
  }
  h1 {
    margin : 0;
    font-size: 1.4rem;
    padding: 10px 0;
    text-align:center;
    font-weight: normal;
    flex: 1;
  }
`

export {
  HeaderContainer
}