import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Peter");
  const [isError, setIsError] = useState(false);

  //const firstValue = text || "hello world";
  const secondValue = text && "hello second value";
  console.log(secondValue);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button class="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {isError ? (
        <p>there is a error</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
