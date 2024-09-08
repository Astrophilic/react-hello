

const root = ReactDOM.createRoot(document.getElementById("root"));
const headings = React.createElement("h1",{className:'greeting'}, "hello react");
console.log(headings);


const parent = React.createElement(
    "div", {id:"parent"},
   [ React.createElement(
        "h2", {id:"child1"},
        "this is h2"),
        React.createElement(
            "h3", {id:"child2"},
            "this is h3")]
);
console.log(parent)
const rootrender = root.render(parent);

function getGreeting (){
    return React.createElement("h1",{},"hello world bro");
}

function Greeting({ name }) {
    return React.createElement(
      'h1',
      { className: 'greeting' },
      'Hello ',
      React.createElement('i', null, name),
      '. Welcome!'
    );
  }