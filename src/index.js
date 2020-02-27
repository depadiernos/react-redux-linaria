import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { styled } from "linaria/react"

import store from "./store"

const App = () => {
  return (
    <Provider store={store}>
      <Style>
        <h1>Hello World!</h1>
      </Style>
    </Provider>
  )
}

const Style = styled.div`
  text-align: center;
`

ReactDOM.render(<App />, document.getElementById("App"))
