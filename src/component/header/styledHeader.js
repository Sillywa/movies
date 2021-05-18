import styled from "styled-components"

const HeaderContainer = styled.div`
  color: ${({color="#fff"}) => color};
  background-color: ${({bkColor="#d81e06"})=>bkColor};
  height: 45px;
  h1 {
    margin : 0;
    font-size: 1.8rem;
    padding: 10px 0;
    text-align:center;
    font-weight: normal;
  }
`

export {
  HeaderContainer
}