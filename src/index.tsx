import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./core/app/App";
import { store } from "./core/store/store";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
