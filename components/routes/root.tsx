import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Carbon } from "./carbon";
import { Home } from "./home";
export function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carbon" element={<Carbon />} />
      </Routes>
    </HashRouter>
  );
}
export default Root;
