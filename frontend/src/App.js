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
import AddUser from "./pages/addUser";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [web3, setWeb3] = React.useState(null);
  const [account, setAccount] = useState(null);
  useEffect(() => {
    // async function load() {
    //   const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    // }

    const init = async () => {
      let provider = window.ethereum;

      if (typeof provider !== "undefined") {
        provider
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAccount(accounts[0]);
            console.log(`Selected account is ${account}`);
          })
          .catch((err) => {
            console.log(err);
            return;
          });
        window.ethereum.on("accountsChanged", function (accounts) {
          setAccount(accounts[0]);
          console.log(`Selected account changed to ${account}`);
        });
      }
    };
    init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admins account={account} />} />

        <Route path="/addDevices" element={<AddDevices account={account}/>} />
        <Route path="/addAdmins" element={<AddAdmin account={account}/>} />
        <Route path="/manageUsers" element={<ManageUsers account={account}/>} />
        <Route path="/manageDevices" element={<ManageDevices account={account}/>} />
        <Route path="/registerUsers" element={<AddUser account={account}/>} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
