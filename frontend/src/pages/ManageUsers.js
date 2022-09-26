import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TableComponent from "../components/table/UserTable";
import "./pages.css";

function ManageUsers({account}) {
  return (
    <div className="App">
      <div className="page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="logo">
            <h1>IOT device management</h1>
          </div>
          <div className="lowerPart">
            <TableComponent account={account}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
