import styled from "styled-components";
export const ActorListCon = styled.div`
  border-top: 1px solid #eee;
  header {
    font-size: 1.4rem;
    color: #000;
    padding-bottom: 10px;
  }
  .content {
    &>div {
      display: inline-block;
    }
    overflow-x: scroll;
    white-space: nowrap;
  }
`;
