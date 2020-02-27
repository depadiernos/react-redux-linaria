import { combineReducers } from "redux"
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions/todos-actions"

const { SHOW_ALL } = VisibilityFilters

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      })
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = combineReducers({
  visibilityFilter,
  todo
})

export default todos
