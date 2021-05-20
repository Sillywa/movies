import styled from "styled-components"

const InfoContainer = styled.div`
  
  .abstract {
    padding:15px;
    color: #fff;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: transparent ${({image}) => `url(${image})`} center center no-repeat;
      background-size: cover;
      filter:blur(5px);
      z-index: -1;
    }
    .img {
      position: absolute;
      top: 50%;
      right: 15px;
      img {
        width: 90px;
        border-radius: 5px;
        
      }
    }
    header {
      font-size: 2rem;
      padding: 10px 0;
    }
    p {
      padding: 5px 0;
    }
    p:last-of-type {
      color: #ffb400;
    }
  }
  .content {
    padding: 15px;
    &>div {
      padding: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        padding-right: 10px;
      }
    }
    .title {
      font-weight: bold;
      font-size: 1.4rem;
      padding: 15px 0;
      color: #000;
    }
    .name {
      color: #888787;
    }
  }
  .star-content {
    display: flex;
    align-items: center;
    div {
      padding-right:5px;
    }
   
  }
`

export {
  InfoContainer
}