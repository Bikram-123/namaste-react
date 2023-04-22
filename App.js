const heading = React.createElement(
  "div",
  {
    id: "Outerdiv",
  },
  [
    React.createElement(
      "div",
      {
        id: "innerdiv1",
      },
      [
        React.createElement("h1", {}, "HelloWorld from h1"),
        React.createElement("h2", {}, "HelloWorld from h2"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "innerdiv2",
      },
      [
        React.createElement("h1", {}, "HelloWorld from outer div2 h1"),
        React.createElement("h2", {}, "HelloWorld from outer div2 h2"),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
