## Talk is Cheap, show me the code

Theory Assignment:
Is JSX mandatory for React?
Is ES6 mandatory for React?
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
How can I write comments in JSX?
What is <React.Fragment></React.Fragment> and <></>?
What is Reconciliation in React?
What is React Fiber?
Why do we need keys in React?
Can we use index as keys in React?
What is props in React? Ways to.
What is Config Driven UI?

Coding Assignment:
Build a Food Ordering App
Think of a cool name for your app
Build an AppLayout
Build a Header Component with Logo & Nav Items & Cart
Build a Body Component
Build RestaurantList Component
Build RestaurantCard Component
Use static data initially
Make your card dynamic(pass in props)
Props - passing arguments to a function - Use Destructuring & Spread operator
Render your cards with dynamic data of restaurants
Use Array.map to render all the restaurants

PS. Do everything that I did in the class, in the same sequence. Don't skip small things.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)

## Detailed Mention of Topics and its Timestamps according to Namaste React Web Series

00:14:00 – Mock design, Various sections of a web page and its coding
00:23:00 – CSS coding
00:29:00 – Created a Header element using React
00:36:00 – CSS for body component & restaurant card
00:38:33 – Inline style of writing CSS in JSX
00:42:00 – JSX feature
00:45:00 – Adding an image to restaurant card
00:49:00 – Coding inside App.js, adding details to restaurant card
00:54:00 – Multiple Restaurant Cards
00:59:25 – Making a Restaurant card with dynamic data, PROPS, Passing a prop to a component
01:07:30 – Destructure the props
01:14:00 – Install Chrome extension – JSON Viewer
01:15:40 – Config Driven UI, Data layer & UI layer
01:26:00 – Bug found in the API
01:33:27 – Array + join(.) usage
01:35:00 – Further modifying the CSS
01:36:00 – Making the image dynamic too, cloudinary image, String concatenation
01:44:14 – Restaurant card becomes Dynamic
01:47:00 – Optimizimg the code, Optional Chaining
01:50:00 – usage of map() function
01:56:00 – React feature
01:58:00 – Unique Key Property
02:08:05 – Lists & Keys, react.js org
02:12:00 – Session Recap

React: JSX, ES6, and Essential Concepts Explained
Here's a breakdown of your questions about React:

1. Is JSX mandatory for React?

No, JSX is not mandatory for React. You can write your components using plain JavaScript functions and objects, but JSX provides a more concise and readable syntax for building UI components.

2. Is ES6 mandatory for React?

While not strictly mandatory, using ES6 features like arrow functions, classes, and modules is highly recommended. They make your React code more concise and modern. You can use transpilers like Babel to convert ES6 code to ES5 for older browsers.

3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}:

These are different ways to render a component in JSX:

{TitleComponent}: This is a shorthand for self-closing components without children. It's equivalent to <TitleComponent />.
{<TitleComponent/>}: This is the explicit way of writing a self-closing component with trailing slash. It's also equivalent to <TitleComponent />.
{<TitleComponent></TitleComponent>}: This is for components with children. The opening and closing tags define where the children elements will be rendered within the component. 4. Comments in JSX:

There are two ways to write comments in JSX:

Using // comments: This is the standard way to comment on a single line in JSX.
Using {/_ ... _/} comments: This allows multi-line comments within JSX elements. 5. <React.Fragment> and <>:

These are two ways to group children elements without adding an extra DOM node. Both create a single wrapper element for rendering child elements without affecting the DOM structure.

6. Reconciliation in React:

Reconciliation is the process React uses to determine the minimal changes needed in the DOM to update the UI when the component state or props change. This helps in efficient rendering and avoids unnecessary DOM manipulations.

7. React Fiber:

React Fiber is a new reconciliation algorithm introduced in React 16 that improves performance by breaking down large UI updates into smaller chunks and prioritizing them based on urgency. This allows for smoother rendering and animation, especially for complex UIs.

8. Keys in React:

Keys are unique identifiers used for optimizing virtual DOM diffing and component updates. They help React identify which elements have changed, been added, or removed, leading to more efficient updates and preventing unnecessary re-rendering.

9. Using index as keys:

While using indexes as keys is technically possible, it's not recommended. Indexes can change when elements are added or removed, potentially causing unexpected behavior and performance issues. It's generally better to use stable, unique identifiers like IDs or primary keys as keys.

10. Props in React:

Props are short for "properties" and are used to pass data from parent components to their child components. They allow you to customize and configure child components based on the parent's state or logic. There are different ways to pass props, including:

Inline props: Directly within the opening JSX tag.
Spread operator: To spread an object containing props.
Children props: Used for passing child elements as props. 11. Config Driven UI:

Config Driven UI is a development approach where the UI is defined and configured using external data sources like JSON files or CMS systems. This allows for easier UI updates and maintenance without touching the code itself. React libraries like Storybook and Styled Components can be used for implementing Config Driven UI.
