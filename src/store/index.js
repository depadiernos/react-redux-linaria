import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import todos from "./reducers/todos-reducer"

const store = createStore(todos, composeWithDevTools(applyMiddleware()))

export default store
