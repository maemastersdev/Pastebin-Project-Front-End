import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MostRecentPastes } from "./components/MostRecentPastes";
import { AddNewPaste } from "./components/AddNewPaste";
import { PastePage } from "./components/PastePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/pastes" element={<MostRecentPastes />} />
          <Route path="/pastes/:id" element={<PastePage />} />

          <Route path="/pastes/newpaste" element={<AddNewPaste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
