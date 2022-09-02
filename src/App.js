/* global React ReactDOM */
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Kilindo", animal: "Cat", breed: "SRD" }),
    React.createElement(Pet, { name: "Nicole", animal: "Cat", breed: "SRD" }),
    React.createElement(Pet, {
      name: "Pandora",
      animal: "Dog",
      breed: "German Shepherd",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
