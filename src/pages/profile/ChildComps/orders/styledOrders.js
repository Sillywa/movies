import styled from "styled-components"

const OrderItemCon = styled.div`
  text-align: center;
  p {
    padding: 10px 0;
  }
`

const OrdersCon = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    width: 30%auto;
  }
`

export {
  OrderItemCon,
  OrdersCon
}