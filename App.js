import React from "react";
import ReactDOM from "react-dom/client";

const heading =
[
    React.createElement("div",{id:"DIV1"},"Hello World from DIV1!!",), //these are the objects, it will be converted into html after rendering
    React.createElement("div",{id:"DIV2"},"Hello World from DIV2!!")
]

// JSX style - JSX is not html in side JS but it is HTML or XML like syntax
const jsxheading = <h1 id="jsx-heading">Hello world in JSX</h1> 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);