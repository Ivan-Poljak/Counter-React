import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Counter() {
  let [number, setNumber] = useState(0);

  return (
    <div className="main-container">
      <h2 className="title">Counter App</h2>
      <p className="number">{number}</p>
      <div className="btn-container">
        <button className="plus btn" onClick={() => setNumber(number + 1)}>
          +
        </button>
        <button className="minus btn" onClick={() => setNumber(number - 1)}>
          -
        </button>
        <button className="reset" onClick={() => setNumber(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
