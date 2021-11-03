import React from "react"
import { Divider, Grid, Box } from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons//Delete"
import Buttons from "./Buttons"
function FormList(props) {
  const {
    data,
    DeleteAllHandler,
    CheckBoxHandler,
    DeleteItemHandler,
    ischecked,
  } = props
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Divider />
        {data.length > 0 && (
          <Grid container justifyContent="center">
            <Grid item>
              <Box component="span" sx={{ color: "#3333ff", fontSize: 42 }}>
                list
              </Box>
            </Grid>
            {data.length > 1 && (
              <Grid item xs={12}>
                <Buttons
                  ButtonClickHandler={DeleteAllHandler}
                  title="Delete ALl"
                />
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
                    onClick={(e) => CheckBoxHandler(item.id, e)}
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
                  onClick={() => DeleteItemHandler(item.id)}
                >
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          ))}
      </Grid>
    </Grid>
  )
}

export default FormList
