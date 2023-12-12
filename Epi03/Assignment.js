import React from "react"
import ReactDOM from "react-dom"

import { HeadingOne, title, Title } from "./App"

// Using react.createElement

const header = React.createElement("div", { className: "title" }, "Parent", [
  React.createElement("h1", {}, "Heading 1"),
  React.createElement("h2", {}, "Heading 2"),
  React.createElement("h3", {}, "Heading 3"),
])

// Using JSX

const header1 = (
  <div className="title">
    <h1>Heading One using JSX</h1>
    <h2>Heading Two using JSX</h2>
    <h3>Heading Three using JSX</h3>
  </div>
)

// Creating Component Using Functional Components
//  Variable Name must be CamelCase -Header3 Not header3

const Header3 = () => (
  <div className="title">
    <h1> Heading One using Functional Component</h1>
    <h2>Heading Two using Functional Component </h2>
    <h3> Heading Three using Functinal Component</h3>
  </div>
)

//Passing Attributes to Tags in jsx code

const name = "Vicky"
const regno = 1034

const Attributepass = () => (
  <div className="parent">
    <b>Hello Mr.{name} </b>
    <br />
    <h4>Attribute Passing to tag in JSX Code</h4>
    {/* Event handler attribute */}
    <button Id="btn" onClick={() => alert("Button clicked!")}>
      Just Click{" "}
    </button>
    {/* Boolean attribute (no value needed) */}
    <input type="checkbox" checked />
  </div>
)

// {TitleComponent} Vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}

const TitleComponent = ({ children }) => {
  return (
    <div>
      <h3>{children} Tilte Component </h3>
    </div>
  )
}

// Component Composition

const CompositeComponent = () => (
  <div>
    <Header3 />
    {header1}

    {Title()}
    {title}
    {<TitleComponent />}
    {<TitleComponent />}
    {<TitleComponent>Hello</TitleComponent>}
  </div>
)

// Creating the root using ReactDOM createRoot method

// const root1 = ReactDOM.createRoot(document.getElementById("root1"))
// root1.render(<CompositeComponent />)
