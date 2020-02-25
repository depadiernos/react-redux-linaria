import React from "react"
import ReactDOM from "react-dom"
import { styled } from "linaria/react"

const App = () => {
  return (
    <Style>
      <h1>Hello World!</h1>
    </Style>
  )
}

const Style = styled.div`
  text-align: center;
`

ReactDOM.render(<App />, document.getElementById("App"))
