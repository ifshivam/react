import React from "react";
import ReactDOM from "react-dom/client";

//class based component -old way

// just a casual another functional component
const HeadingComponent = () => {
  return <h1>Hello world from heading of functional component</h1>;
};

//functional component -new way
const Component = () => {
  return (
    <div>
      <h1>Hello World from functional component</h1>
      <HeadingComponent />
    </div>
  );
};

export default Component;
