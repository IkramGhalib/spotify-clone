import React from "react";

import "./App.css";
import Counter from "./Counter";

import Form from "./Form";
import Props from "./Props";
const arr = [
  {
    name: "ikram",
    rollno: 1,
  },
  {
    name: "Good",
    rollno: 2,
  },
];
function App() {
  return (
    <div className="App">
      <Form />
      <Counter />
      <Props />

      <ul>
        {arr.map((elem) => (
          <ul key={elem.rollno}>
            {elem.rollno}-{elem.name}
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default App;
