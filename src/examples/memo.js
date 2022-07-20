import React, { useEffect, useMemo, useState } from "react";

const Memo = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "red" : "black",
    }),
    [colored]
  );

  function complexCompute(num) {
    console.log("complexCompute");
    let i = 0;

    while (i < 1000000000) i++;

    return num * 2;
  }

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Счетчик: {computed}</h1>
      <button
        onClick={() => setNumber((prev) => prev + 1)}
        className="btn btn-success"
      >
        Increment
      </button>
      <button
        onClick={() => setNumber((prev) => prev - 1)}
        className="btn btn-danger"
      >
        Decrement
      </button>

      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-warning"
      >
        Change
      </button>
    </div>
  );
};

export default Memo;