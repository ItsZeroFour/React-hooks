import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log(`value changed: ${value}`);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

const useOwnHook = () => {
  // const [name, setName] = useState("Name");
  // const [lastname, setLastname] = useState("Lastname");

  const input = useInput("");

  // const changeHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const lastnameHandler = (event) => {
  //   setLastname(event.target.value);
  // };

  useLogger(input.value);

  return (
    <div>
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input.bind} />

      <button className="btn btn-danger" onClick={() => input.clear()}>
        Clear
      </button>
      {/* <input type="text" value={lastname} onChange={lastnameHandler} /> */}
      <hr />
      <h1>
        {/* {name} {lastname} */}
        {input.value}
      </h1>
    </div>
  );
};

export default useOwnHook;
