import styled from "styled-components";

const TabBarContainer = styled.div`
  display: flex;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height:56px;
`

const TabItemContainer = styled.div`
  flex: 1;
  text-align:center;
  font-size: 1.2rem;
  &.active {
    color: ${({activeColor="#d81e06"}) => activeColor};
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 5px;
  }
  p {
    margin: 2px 0;
    margin-bottom: 4px;
  }

`;

export { TabItemContainer, TabBarContainer };
