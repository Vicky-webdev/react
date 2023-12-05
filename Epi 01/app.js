// Create a new element using React
const heading = React.createElement(
  "div",
  { id: "parent" },
  "Hello Im React Js",
  [
    React.createElement("h1", { id: "h1-heading" }, "Hello Im H1 Tag"),
    React.createElement("h2", { id: "h2-heading" }, "Hello Im H2 Tag"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Create another element
const headingOne = React.createElement(
  "h2",
  { id: "heading" },
  "Two Root Element rendering!"
);

// Use ReactDOM.createRoot correctly
const parent = ReactDOM.createRoot(document.getElementById("root"));

// parent.render(headingOne);

/*
The issue lies in the second part of the code, where you're creating a React.createElement() function to create an h2 element named headingOne. Instead of creating a new element,
you're overriding the existing heading element created in the first part of the code.
*/

const secondRoot = ReactDOM.createRoot(document.getElementById("root2")); // Create a separate root element
secondRoot.render(headingOne);
