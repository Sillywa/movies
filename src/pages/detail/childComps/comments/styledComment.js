import styled from "styled-components";

export const CommentItemCon = styled.div`
padding: 10px 0;
border-top: 1px solid #eee;
  header {
    display: flex;
    align-items: center;
    padding: 5px 0;
    .name {
      color: #1890ff;
    }
    .date {
      flex: 1;
      padding-left: 10px;
    }
    .star {
     
      color:  #ffb400;
    }
  }
`;
export const CommentListCon = styled.div`
  border-top: 1px solid #eee;
  &>header {
    font-size: 1.4rem;
    color: #000;
    padding-bottom: 10px;
  }
`;
