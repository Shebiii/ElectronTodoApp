import React, { useState, useEffect } from "react"
import { TextField, Button, Divider, Grid, Box } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons//Delete"
import { addToDo, deleteToDo, StriketoDo, DelAll } from "../Store/actions"
import { AddAlert } from "@material-ui/icons"

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
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box component="span" sx={{ color: "#3333ff", fontSize: 22 }}>
            We Came in This World To
            <br /> Create List of people for our Funeral
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Add TO List"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Grid>
        {task && (
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={Increment}>
              ADD
            </Button>
          </Grid>
        )}

        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Divider />
          {data.length > 0 && (
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box component="span" sx={{ color: "#3333ff", fontSize: 22 }}>
                  list
                </Box>
              </Grid>
              {data.length > 1 && (
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={DeleteAll}
                  >
                    Delete ALl
                  </Button>
                </Grid>
              )}
            </Grid>
          )}
          {data &&
            data.map((item) => (
              <List key={item.id}>
                <ListItem>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      tabIndex={-1}
                      value={ischecked}
                      onClick={(e) => {
                        setIsChecked(!e.target.value)
                        dispatch(StriketoDo(item.id))
                      }}
                    />
                  </ListItemIcon>
                  {item.isSelected ? (
                    <ListItemText>
                      <ListItemText>{item.data}</ListItemText>
                    </ListItemText>
                  ) : (
                    <del>{item.data}</del>
                  )}
                  <ListItemSecondaryAction
                    onClick={() => dispatch(deleteToDo(item.id))}
                  >
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            ))}
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </>
  )
}

export default Form
