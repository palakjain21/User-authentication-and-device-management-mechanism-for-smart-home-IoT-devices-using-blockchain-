import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TableComponent from "../components/table/DeviceTable";
import "./pages.css";
import { addDevices } from "../Web3Client";

function AddDevices({ account }) {
  const [deviceName, setDeviceName] = React.useState("");
  const [deviceAddress, setDeviceAddress] = React.useState("");
  const [fogAddress, setFogAddress] = React.useState("");

  const updateDeviceName = (event) => {
    setDeviceName(event.target.value);
  };
  const updateDeviceAddress = (event) => {
    setDeviceAddress(event.target.value);
  };

  const updateFogAddress = (event) => {
    setFogAddress(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(deviceName, deviceAddress, fogAddress);
    // alert("Device added successfully!!!");
    addDevices(deviceAddress, fogAddress);
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

                <button className="button" type="submit" onClick={onSubmit}>
                  Add Device
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDevices;
