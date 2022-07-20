import React, { useState, useCallback } from "react";
import ItemsList from "../ItemsList";

const Memo = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "red" : "black",
  };

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill("").map((_, i) => `Element: ${i + indexNumber}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Счетчик: {count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="btn btn-success"
      >
        Increment
      </button>
      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-warning"
      >
        Change
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default Memo;

// import React, { useState } from "react";

// const Memo = () => {
//   const [colored, setColored] = useState(false);
//   const [count, setCount] = useState(42);

//   const styles = {
//     color: colored ? "red" : "black",
//   };

//   return (
//     <div>
//       <h1 style={styles}>Счетчик: {count}</h1>
//       <button
//         onClick={() => setCount((prev) => prev + 1)}
//         className="btn btn-success"
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => setColored((prev) => !prev)}
//         className="btn btn-warning"
//       >
//         Change
//       </button>
//     </div>
//   );
// };

// export default Memo;
