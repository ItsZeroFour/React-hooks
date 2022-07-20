import { useState } from "react";

function computeInitialCounter() {
  console.log("Some calc");
  return Math.trunc(Math.random() * 20);
}

function useState_() {
  // 0 - это с какого числа будет начинатся отсчет
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  // Передаем стрелочную функцию, что бы функция постоянно не вызывалась
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  function increment() {
    // Увеличиваем counter на 1
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevCounter) => {
      return prevCounter + 1;
    });

    // setCounter((prev) => prev + 1);
  }

  function decrement() {
    // Увеличиваем counter на 1
    setCounter(counter - 1);
  }

  //! Error
  // if (true) {
  //   const error = useState(0);
  // }

  // Меняем название, не создавая новый объект
  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "New Name",
      };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrement
      </button>
      <button onClick={updateTitle} className="btn btn-primary">
        Change Name
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default useState_;
