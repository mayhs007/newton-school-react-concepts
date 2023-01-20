import React, { useReducer } from "react"
const initialState = {
  todos: [],
  todo: "",
}
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TEXT": {
      return {
        ...state,
        todo: action.value,
      }
    }
    case "ADD":
      return {
        ...state,
        todos: state.todos.concat({ id: state.todos.length + 1, text: action.value }),
      }
    default:
      break
  }
}
export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.todos)
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your Todo"
          onChange={event =>
            dispatch({
              type: "CHANGE_TEXT",
              value: event.target.value,
            })
          }
        ></input>
        <button
          onClick={() => {
            dispatch({
              type: "ADD",
              value: state.todo,
            })
          }}
        >
          Add
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {state.todos.map(todo => (
          <label key={todo.id}>
            <input type="checkbox"></input>
            {todo.text}
          </label>
        ))}
      </div>
    </div>
  )
}
