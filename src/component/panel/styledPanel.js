import styled from "styled-components"

const PanelCon = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: ${({border="normal"}) => border==="normal" ? "0" : "8px"};
  header {
    font-weight: bold;
  }
`

export {
  PanelCon
}

