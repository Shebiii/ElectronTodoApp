import { createStore } from "redux"
import todoReducer from "./index"

const store = createStore(todoReducer)
export default store
