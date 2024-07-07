import React from "react";
import ReactDOM from "react-dom/client";

const heading =
[
    React.createElement("div",{id:"DIV1"},"Hello World from DIV1!!",),
    React.createElement("div",{id:"DIV2"},"Hello World from DIV2!!")
]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);