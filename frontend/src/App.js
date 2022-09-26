import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddDevices from "./pages/AddDevices";
import "./App.css";
import Admins from "./pages/Admins";
import ManageUsers from "./pages/ManageUsers";
import ManageDevices from "./pages/ManageDevices";
// import getWeb3 from "./web3";
import Web3 from "web3";
import AddAdmin from "./pages/AddAdmin";
import Sidebar from "./components/Sidebar/Sidebar";
import AddUser from "./pages/addUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admins />} />

        <Route path="/addDevices" element={<AddDevices />} />
        <Route path="/addAdmins" element={<AddAdmin />} />
        {/* <Route path="/manageUsers" element={<ManageUsers />} /> */}
        <Route path="/manageDevices" element={<ManageDevices />} />
        <Route path="/registerUsers" element={<AddUser />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
