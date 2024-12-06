import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VERSION1 from "./controllers/theme1";
import VERSION2 from "./controllers/theme2";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
     
      <Routes>
        {/* Main Pages */}
        <Route path="/version1" element={<VERSION1 />} />
        <Route path="/version2" element={<VERSION2 />} />
      </Routes>

      <div className="m-44">
        <Link target="_blank" className="m-10 bg-gray-800 p-5 font-iraraleway shadow-custom-blue text-white  hover:text-iraprimary  hover:border-b-4 rounded-2xl hover:border-red-500 transition duration-200" to="/version1">Go to Version 1</Link>
        <Link target="_blank" className="m-10 bg-gray-800 p-5 font-iraraleway shadow-custom-blue text-white hover:text-iraprimary hover:border-b-4 rounded-2xl hover:border-red-500 transition duration-200" to="/version2">Go to Version 2</Link>
      </div>
      
    </Router>
    </>
  );
}

export default App;
