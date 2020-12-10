import React, { useState } from "react";

function Square({ status, setStatus, count, setCount }) {
  const [value, setValue] = useState("");

  function handleSquare() {
    if (value == "") {
      if (status == "X") {
        setValue("X");
        setStatus("O");
        setCount(count + 1);
      } else if (status == "O") {
        setValue("O");
        setStatus("X");
        setCount(count + 1);
      }
    }
  }

  return (
    <div>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => handleSquare()}
      >
        {value}
      </button>
    </div>
  );
}

export default Square;
