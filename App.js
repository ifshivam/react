import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./Component"

//reactObj->JS->HTML(during rendering)
// const heading = [
//   React.createElement("div", { id: "DIV1" }, "Hello World from DIV1!!"), //these are the objects, it will be converted into html after rendering
//   React.createElement("div", { id: "DIV2" }, "Hello World from DIV2!!"),
// ];

// JSX style - JSX is not html in side JS but it is HTML or XML like syntax
//jsx->reactObj->JS->HTML(during rendering) -by babel

// const jsxheading = <h1 id='jsx-heading'>Hello world in JSX</h1>;
const App =()=>{
    return ( <div>
        <h1>Hello World from App.js</h1>
        <Component/>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
