export const addToDo = (data) => {
  return {
    type: "ADD",
    payload: {
      id: Math.random(),
      data: data,
      isSelected: Boolean("false"),
    },
  }
}
export const deleteToDo = (id) => {
  return {
    type: "DEL",
    payload: { id },
  }
}
export const StriketoDo = (id) => {
  return {
    type: "Strike",
    payload: { id },
  }
}
export const DelAll = (id) => {
  return {
    type: "DelAll",
  }
}
