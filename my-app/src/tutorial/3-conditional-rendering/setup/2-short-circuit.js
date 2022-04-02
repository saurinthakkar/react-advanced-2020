import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Petr");

  //const firstValue = text || "hello world";
  const secondValue = text && "hello second value";
  console.log(secondValue);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      {!text && <h1>2nd argument in and operator</h1>}
    </>
  );
};

export default ShortCircuit;
