import styled from "styled-components"
const CardCon = styled.div`
  background-color: #f99696;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  span {
    padding: 0 1px;
  }
  p {
    margin: 8px 0;
  }
  p:first-of-type {
    font-size: 1.4rem;
    font-weight: bold;
  }
`


const CardsCon = styled.div`
    background-color:#ef4341;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    &>div {
      width: 45%;
    }
`

export {
  CardCon,
  CardsCon
}