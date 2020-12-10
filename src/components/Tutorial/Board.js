import React, { useState } from "react";
import Square from "./Square";

function Board(props) {
  const [status, setStatus] = useState("X");
  const [count, setCount] = useState(1);
  const [square, setSquare] = useState(Array(9).fill(null));

  console.log(square);

  return (
    <div style={{ display: "table", margin: "20rem" }}>
      <h2>Current turn: {status}</h2>
      <div style={{ display: "flex" }}>
        <div className="board-row">
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
        </div>
        <div className="board-row">
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
        </div>
        <div className="board-row">
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
          <Square
            status={status}
            setStatus={setStatus}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
