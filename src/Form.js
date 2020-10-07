import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  function handlename(e) {
    setName(e.target.value);
  }
  function handlepassword(e) {
    setPassword(e.target.value);
  }

  function formsubmit() {
    console.log(name, password);
  }

  return (
    <div>
    <span>{name==="admin"&& password==="admin" &&'Hello admin'}</span>
      <input type="text" value={name} onChange={handlename} />
      <input type="password" value={password} onChange={handlepassword} />
      <button onChange={formsubmit}>Click Me</button>
    </div>
  );
}

export default Form;
