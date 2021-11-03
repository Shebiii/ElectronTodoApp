import React from "react"
import { Button } from "@material-ui/core"
function Buttons(props) {
  const { title, ButtonClickHandler } = props
  return (
    <Button variant="contained" color="primary" onClick={ButtonClickHandler}>
      {title}
    </Button>
  )
}

export default Buttons
