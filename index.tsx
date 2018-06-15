import * as React from "react";
import * as ReactDOM from "react-dom";
import Detail from "./components/Detail";
import "./index.scss";

const App = () => (
  <div>
    Hello React
    <Detail />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
