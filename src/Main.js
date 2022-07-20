import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();

  return (
    <div>
      <h1>Hello from example with Context!</h1>
      <button
        onClick={() => show("Text from Main.js")}
        className="btn btn-warning"
      >
        Show alert
      </button>
    </div>
  );
}
