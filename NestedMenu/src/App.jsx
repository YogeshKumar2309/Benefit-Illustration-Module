import React from "react";
import {Routes, Route} from "react-router-dom";
import Sidebar from "./componets/Sidebar.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>      
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="settings" element={<div>Settings</div>} />
        <Route path="profile" element={<div>Profile</div>} />
      </Route>
   
    </Routes>
  );
};

export default App;
