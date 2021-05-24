import styled from "styled-components"

const ProfileCon = styled.div`
  .profile {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 56px;
    overflow-y: scroll;
    height: 100vh;
  }
  .panel {
    margin: 10px;
    padding: 0;
  }
  header.panel-header {
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 10px;
  }
`

export {
  ProfileCon
}