import styled from "styled-components"

const AvatorCon = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  color: #fff;
  background-color:#ef4341;
  p {
    flex: 1;
    padding: 0 10px;
    font-size: 1.6rem;
  }
  img {
    width: 20px;
    height:20px;
  }
  img:first-of-type {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`
const PanelCon = styled.div`
  background-color: #fff;
  margin: 0 10px;
  margin-top: 10px;
  border-radius: 8px;
  header {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px;
  }
`


export {
  AvatorCon,
  PanelCon
}

