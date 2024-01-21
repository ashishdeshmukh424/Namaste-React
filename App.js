// const heading = React.createElement("h1", {}, "Helloo World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// ================================================
// // write below code using react and use React from CDN

// // <div id="parent">
// //     <div id="child">
// //         <h1> Hi from child 1</h1>
// //         <h1> Hi from child 2</h1>
// //     </div>

// // </div>

// const parent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"}, [
//     React.createElement("h1", {id:"heading1"}, "Hi from child 1"),
//     React.createElement("h2", {id:"heading2"}, "Hi from child 2")
// ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ================================================================
// importing React and React-Dom from node modules

// import React from "react";
// import ReactDOM from "react-dom/client"
// const parent = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"}, [
//     React.createElement("h1", {id:"heading1"}, "Hi from child 1"),
//     React.createElement("h2", {id:"heading2"}, "Hi from child 2")
// ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ================================================================

import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)
// React Element
// const jsxHeading = (
//   <h1 className="head" tabIndex="5">
//     Namaste React from JSX
//   </h1>
// );

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React from Title Component
  </h1>
);
// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);

