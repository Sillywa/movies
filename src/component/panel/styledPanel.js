import styled from "styled-components"

const PanelCon = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: ${({border="normal"}) => border==="normal" ? "0" : "8px"};
  header.panel-header {
    font-weight: bold;
    font-size: 1.4rem;
    color: #000;
    padding-bottom: 10px;
  }
`

export {
  PanelCon
}

