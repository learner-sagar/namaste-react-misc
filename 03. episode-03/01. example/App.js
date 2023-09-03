import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// root.render(heading);

// const jsxHeading = <h1>Namaste React in JSX 🚀</h1>;
// root.render(jsxHeading);

const HeadingComponent = () => (
  <h1>Namaste React using Functional Component 🚀</h1>
);

root.render(<HeadingComponent />);
