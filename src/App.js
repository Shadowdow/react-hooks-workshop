import HookBestEvent from "./pages/HookBestEvent";
import HookTheory from "./pages/HookTheory";
import AdvanceTheory from "./pages/AdvanceTheory";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/HookBestEvent/*" element={<HookBestEvent />} />
          <Route path="/HookTheory/*" element={<HookTheory />} />
          <Route path="/AdvanceTheory" element={<AdvanceTheory />} />
          {/*<Route path="*" element={<Navigate to="/home" />} />*/}
          <Route path="/" element={<Home />} />
        </Routes>
        {/*</div>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
