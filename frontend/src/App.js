import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddDevices from "./pages/AddDevices";
import "./App.css";
import Admins from "./pages/Admins";
import ManageUsers from "./pages/ManageUsers";
import ManageDevices from "./pages/ManageDevices";
// import getWeb3 from "./web3";
import Web3 from "web3";
import AddAdmin from "./pages/AddAdmin";
// import { addDevice, init } from "./Web3Client";
function App() {
  const [web3, setWeb3] = React.useState(null);
  useEffect(() => {
    // const test= async()=>{
    //   const data=await addDevice('0x5fbdb2315678afecb367f032d93f642f64180aa3','0x5fbdb2315678afecb367f032d93f642f64180aa3');
    //   console.log(data,"TEST");
    // }
    // test();
    // init()
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admins />} />

        <Route path="/addDevices" element={<AddDevices />} />
        <Route path="/addAdmins" element={<AddAdmin />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/manageDevices" element={<ManageDevices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
