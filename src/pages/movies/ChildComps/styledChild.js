import styled from "styled-components";

const StarContainer = styled.div`
  display: inline-block;
  img {
    width:12px;
    height: 12px;
    margin: 0 1px;
  }
`;

const MovieItemCon = styled.div`
  width: 33%;
  padding: 5px 8px;
  
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  &>img {
    width: 100%;
    border-radius: 5px;
  }
  &>div {
    margin-top: 5px;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .star {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const MovieListCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 56px;
  background-color: #fff;
  padding: 5px 0;
  .loading {
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
`



export { StarContainer, MovieItemCon, MovieListCon };
