/*
 * useRef сохраняет состояние при работе с компонентом и при рэндерах,
 * Но при этом он не вызывает сам рендер
 */

import React, { useEffect, useState, useRef } from "react";

// let renderCount = 1;

const Ref = () => {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("Initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    // renderCount++
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Кол-во рeндеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input
        ref={inputRef}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button className="btn btn-warning" onClick={focus}>
        Focus
      </button>
    </div>
  );
};

export default Ref;
