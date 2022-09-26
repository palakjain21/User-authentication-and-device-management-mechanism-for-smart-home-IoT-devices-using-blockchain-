import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TableComponent from "../components/table/DeviceTable";
import "./pages.css";

function AddUser({ account }) {
  const [deviceName, setDeviceName] = React.useState("");
  const [deviceAddress, setDeviceAddress] = React.useState("");
  const [fogAddress, setFogAddress] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");

  const updateDeviceName = (event) => {
    setDeviceName(event.target.value);
  };
  const updateDeviceAddress = (event) => {
    setDeviceAddress(event.target.value);
  };

  const updateFogAddress = (event) => {
    setFogAddress(event.target.value);
  };

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const updateUserAddress = (event) => {
    setUserAddress(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(deviceName, deviceAddress, fogAddress);
    alert("User granted");
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
            <form className="formBody">
              <label>
                <p className="label">User Name</p>
                <input
                  className="input"
                  type="text"
                  name="device name"
                  value={userName}
                  placeholder="User Name"
                  onChange={updateUserName}
                  required
                />
              </label>
              <label>
                <p className="label">User Address</p>
                <input
                  className="input"
                  type="text"
                  name="device name"
                  value={userAddress}
                  placeholder="User Address"
                  onChange={updateUserAddress}
                  required
                />
              </label>
              <label>
                <p className="label">Device Name</p>
                <input
                  className="input"
                  type="text"
                  name="device name"
                  value={deviceName}
                  placeholder="Device Name"
                  onChange={updateDeviceName}
                  required
                />
              </label>
              <label>
                <p className="label">Device Address</p>{" "}
                <div className="wrapper">
                  {" "}
                  <input
                    className="input"
                    type="text"
                    name="device address"
                    value={deviceAddress}
                    placeholder="Device address"
                    onChange={updateDeviceAddress}
                    required
                  />
                </div>
              </label>
              <label>
                <p className="label">Fog Address</p>{" "}
                <div className="wrapper">
                  {" "}
                  <input
                    className="input"
                    type="text"
                    name="fog address"
                    value={fogAddress}
                    placeholder="Fog address"
                    onChange={updateFogAddress}
                    required
                  />
                </div>
              </label>
              <div>
                {/* <button className="button" type="submit" onClick={onSubmit}>
                  Add Device
                </button> */}
                {String(account) ===
                "0xa86099b3ca1c1f25332c56194113fe591ccf2f3c" ? (
                  <button className="button" type="submit" onClick={onSubmit}>
                    Add User
                  </button>
                ) : (
                  <button
                    className="deactiveButton"
                    // type="submit"
                    // onClick={onSubmit}
                  >
                    Add User
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
