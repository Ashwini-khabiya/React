import React from "react";
import ReactDOM from "react-dom/client";

const JSXHeading = (
  <React.Fragment>
    <h1 className="heading" tabIndex="1">
      This is my JSX heading 🛩️
    </h1>
    <h1>This is React Fragment!</h1>
  </React.Fragment>
);

const JSXHeading2 = (
    <>
      <h1 className="heading" tabIndex="1">
        This is my JSX heading 2 🛩️
      </h1>
      <h1>This is Empty tag!</h1>
    </>
  );

const HeadingComponent1 = () => (
  <h1>This is my Heading functional Component 1</h1>
);

const HeadingComponent1_1 = function () {
  return <h1>This is my Heading functional Component 1.1</h1>;
};

const HeadingComponent2 = () => {
  return <h1>This is my Heading functional Component 2</h1>;
};

//Component Composition: calling one component from another
// Inject Javascript code inside JSX using {}

const cnt = 10;

const HeadingComponent3 = () => (
  <div id="container">
    {cnt + 100}

    <HeadingComponent1 />
    <HeadingComponent1_1></HeadingComponent1_1>
    {HeadingComponent2()}

    {JSXHeading}
    <h1>This is my Heading functional Component 3</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />);
