import styled from "styled-components";

const MovieListContainer = styled.div`
  background-color: #fff;
  padding: 0px 10px;
  overflow-y: scroll;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 56px;
  .loading {
    text-align: center;
    padding: 10px 0;
  }
`;

const MovieItemContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border: none;
  }
  .left img {
    width: 6rem;
  }
  .center {
    margin-left: 1.5rem;
    width: 60%;
    overflow: hidden;
  }
  .center p {
    padding: 5px 0;
    font-size: 1rem;
    color: #4e4d4d;
  }
  .center p.introduce {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  .center p.name {
    font-size: 1.6rem;
    color: #000;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .right p {
    color: #ffb400;
    text-align: center;

  }
  .right .want {
    display: block;
  }
  .right img {
    width: 26px;
    height: 26px;
  }
  .right .rate{
    font-size: 1.4rem;
    
  }
`;

export { MovieItemContainer, MovieListContainer };
