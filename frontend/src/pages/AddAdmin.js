import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./pages.css";
import { addAdmin } from "../Web3Client";

function AddAdmin() {
  const [adminName, setAdminName] = React.useState("");
  const [adminAddress, setAdminAddress] = React.useState("");

  const updateAdminName = (e) => {
    setAdminName(e.target.value);
  };
  const updateAdminAddress = (e) => {
    setAdminAddress(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addAdmin(adminAddress, adminName);
  };

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
            <form>
              <label>
                <p className="label">Admin Name</p>
                <input
                  className="input"
                  type="text"
                  name="Admin name"
                  value={adminName}
                  placeholder="Admin Name"
                  onChange={updateAdminName}
                  required
                />
              </label>
              <label>
                <p className="label">Admin Address</p>{" "}
                <div className="wrapper">
                  {" "}
                  <input
                    className="input"
                    type="text"
                    name="admin address"
                    value={adminAddress}
                    placeholder="Admin Address"
                    onChange={updateAdminAddress}
                    required
                  />
                </div>
              </label>

              <div>
                {/* {String(account) ===
                "0xa86099b3ca1c1f25332c56194113fe591ccf2f3c" ? (
                  <button className="button" type="submit" onClick={onSubmit}>
                    Add Admin
                  </button>
                ) : (
                  <button
                    className="deactiveButton"
                    // type="submit"
                    // onClick={onSubmit}
                  >
                    Add Admin
                  </button>
                )} */}
                <button className="button" type="submit" onClick={onSubmit}>
                  Add Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
