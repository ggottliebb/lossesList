import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DatabaseProvider } from "./db";
import Auth from './auth'
import './index.css'
import App from './App'
const rootElement = document.getElementById("root");

ReactDOM.render(
  <DatabaseProvider >
      <Auth />
  </DatabaseProvider>,
  rootElement
);
