import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VERSION2 from "./controllers/theme2";
import Buildyourcontetn from "./controllers/buildyourcontent";

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<VERSION2 />} />
        <Route path="/version2" element={<VERSION2 />} />
        <Route path="/buildyourcontent" element={<Buildyourcontetn />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
