import React from "react"
import { useHistory, withRouter } from "react-router-dom"

const withToDetail = (WrapperComponent) => (props) => {
  {
    const history = useHistory()
    const handleClick = () => {
      // 路由跳转
      history.push(`/detail/${props.serial_number}`)
    }
    return (
      <WrapperComponent {...props} handleClick={handleClick}  />
    )
  }
}


export default withToDetail