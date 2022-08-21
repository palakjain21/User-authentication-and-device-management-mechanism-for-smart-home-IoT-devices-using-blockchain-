import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TableComponent from "../components/table/AdminTable";
import "./pages.css";

function Admins() {
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
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admins;
