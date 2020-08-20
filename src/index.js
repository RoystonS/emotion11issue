import React from "react";
import ReactDOM from "react-dom";

import styled from "@emotion/styled";

// Your custom code should live here
// ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊ ⇊

const BackgroundChooser = styled.div(({ on }) => ({
  padding: 8,
  background: on ? "#d0ffd0" : "#ff2020",
  color: on ? "#000000" : "#ffffff"
}));

function App() {
  return (
    <div>
      <BackgroundChooser on>This is ON</BackgroundChooser>
      <BackgroundChooser on={false}>This is OFF</BackgroundChooser>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
