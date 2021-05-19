import styled from "styled-components"

const ListItemCon = styled.div`
  display: flex;
  align-items: center;
  margin:0 10px;
  border-bottom: 1px solid #f7f5f5;
  p {
    flex: 1;
    padding: 10px;
  }
  img:first-of-type {
    width: 20px;
    height: 20px;
  }
  img:last-of-type {
    width: 18px;
    height:18px;
  }
`

export {
  ListItemCon
}