const headingH1 = React.createElement(
  "h1",
  { key: "h1", className: "h1" },
  "I am a Heading H1"
);

const headingH2 = React.createElement(
  "h2",
  { key: "h2", className: "h2" },
  "I am a Heading H2"
);

const container = React.createElement("div", { key: "div" }, [
  headingH1,
  headingH2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
