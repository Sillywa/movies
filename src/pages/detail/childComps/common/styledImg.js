import styled from "styled-components"

export const ImgContainer = styled.div`
  width: 28%;
  margin: 8px 0;
  margin-right: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  p{
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding: 3px 0;
    font-size: .8rem;
  }
  p:last-of-type {
    color: #888787;
  }
`