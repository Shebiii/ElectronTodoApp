import React, { useState, useEffect } from "react"
import { TextField, Button, Grid, Box } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { addToDo, deleteToDo, StriketoDo, DelAll } from "../Store/actions"
import FormList from "./UI/FormList"
import Buttons from "./UI/Buttons"

function Form() {
  const [task, setTask] = useState("")
  const [ischecked, setIsChecked] = useState("true")
  const dispatch = useDispatch()
  const data = useSelector((state) => state.list)
  useEffect(() => {
    setIsChecked("")
  }, [ischecked])
  const Increment = () => {
    if (task !== "") {
      dispatch(addToDo(task))
      setTask("")
    }
  }
  const DeleteAll = () => {
    dispatch(DelAll())
  }
  const CheckBoxHandler = (value, e) => {
    setIsChecked(!e.target.value)
    dispatch(StriketoDo(value))
  }
  const DeleteItem = (value) => {
    dispatch(deleteToDo(value))
  }
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Grid item justify="center">
            <Box component="span" sx={{ color: "#3333ff", fontSize: 22 }}>
              We Came in This World To
              <br /> Create List of people for our Funeral
            </Box>
          </Grid>
          <Grid>
            <TextField
              id="standard-basic"
              label="Add TO List"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Grid>
          {task && (
            <Grid item>
              <Buttons ButtonClickHandler={Increment} title="ADD" />
            </Grid>
          )}
        </Grid>
      </Grid>
      <FormList
        data={data}
        DeleteAllHandler={DeleteAll}
        CheckBoxHandler={CheckBoxHandler}
        DeleteItemHandler={DeleteItem}
        ischecked={ischecked}
      />
    </>
  )
}

export default Form
