import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Counter() {
  let [number, setNumber] = useState(0);

  return (
    <div className="main-container">
      <p className="number">{number}</p>
      <div className="btn-container">
        <button className="plus" onClick={() => setNumber(number + 1)}>
          +
        </button>
        <button className="minus" onClick={() => setNumber(number - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
