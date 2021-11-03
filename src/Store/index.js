const initialState = {
  list: [],
}
const todoReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      list: [...state.list, action.payload],
    }
  }
  if (action.type === "DEL") {
    const newList = state.list.filter((item) => item.id !== action.payload.id)
    return {
      ...state,
      list: newList,
    }
  }
  if (action.type === "Strike") {
    const items = state.list.find((item) => item.id === action.payload.id)
    items.isSelected = !items.isSelected
    console.log("object", state.list)
  }
  if (action.type === "DelAll") {
    return {
      list: [],
    }
  }
  return state
}
export default todoReducer
