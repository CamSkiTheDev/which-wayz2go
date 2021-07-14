import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GoogleFontLoader from "react-google-font-loader";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
* {
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Styles />
    <GoogleFontLoader
      fonts={[
        { font: "Roboto", weights: [300, 400, 500, 600, 700, 800, 900] },
        { font: "Open Sans", weights: [300, 400, 500, 600, 700, 800, 900] },
      ]}
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
