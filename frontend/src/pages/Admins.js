import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TableComponent from "../components/table/AdminTable";
import "./pages.css";

function Admins({ account }) {
  console.log(account, "account no");
  // const [acc, setAcc] = useState(String(account));
  // console.log(acc);
  return (
    <div className="App">
      <div className="page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="logo">
            {/* <h1>IOT device management</h1>
            <div className="accountCheck"> */}
            {String(account) ===
            "0xa86099b3ca1c1f25332c56194113fe591ccf2f3c" ? (
              <h4 className="accTypes">Account type: Admin</h4>
            ) : (
              <h4 className="accTypes">Account type: Non-Admin</h4>
            )}

            <h4 className="accNo">{account}</h4>
            {/* </div> */}
          </div>
          <div className="lowerPart">
            <TableComponent account={account}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admins;
