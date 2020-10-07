import React from "react";

function GreatingComponent(props) {
  return (
    <div>
      Hello {props.name}
      {props.arr}
    </div>
  );
}
function Props() {
  return (
    <div>
      <GreatingComponent name="Ikram" arr={[1, 2, 3, 4]} />

    </div>
  );
}

export default Props;
