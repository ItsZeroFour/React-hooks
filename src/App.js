import React from "react";
// import State from "./examples/state";
// import Effect from "./examples/effect";
// import Ref from "./examples/ref";
// import Memo from "./examples/memo";
// import Callback from "./examples/callback";

// import Context from "./examples/context";
// import Main from "./Main";
// import Alert from "./alert/Alert";
// import { AlertProvider } from "./alert/AlertContext";

import UseOwnHook from "./hooks/useOwnHook";

function App() {
  return (
    // <AlertProvider value={alert}>
      <div className="App pt-3">
        {/* <State /> */}
        {/* <Effect /> */}
        {/* <Ref /> */}
        {/* <Memo /> */}
        {/* <Callback /> */}

        {/* <Alert />
        <Main toggle={() => {}} /> */}

        <UseOwnHook />
      </div>
    // </AlertProvider>
  );
}

export default App;
