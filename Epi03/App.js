import React from "react"
import ReactDOM from "react-dom"

// JSX

//JSX Element => React.createElement(Object) =>convert to HTMLElement(render)

const heading = <h2 className="head">Hello JSX World !!</h2>

const title = (
  <div className="title">
    <h2> Welcome To React .!!</h2>
    <p> This Element created using JSX</p>
  </div>
)

const Title = () => <h2>React Learning by Vicky 🚀</h2>

// React FuntionalComponent

const HeadingOne = () => (
  <div>
    <Title />
    <h3>Functional Component</h3>
  </div>
)

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Title />)

// root.render(<Tilte/>); -  this is the way to render Component
//root.render(heading); - this is element rendering
export { HeadingOne, title, Title }
