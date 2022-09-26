import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import "./table.css";
import { deleteDev, listDevices } from "../../Web3Client";

const TableComponent = ({ account }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageUrl, setPageUrl] = React.useState(false);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const list = async () => {
      const dat = await listDevices();
      console.log(dat);
      setData(dat);
    };
    list();
    console.log(data, "device data");
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "deviceName", label: "Device Name", minWidth: 170, align: "center" },
    {
      id: "deviceAddress",
      label: "Device Address",
      minWidth: 170,
      align: "center",
    },
    { id: "fogId", label: "Device Fog Map ID", minWidth: 100, align: "center" },
    {
      id: "deleteDevice",
      label: "Delete Device",
      minWidth: 170,
      align: "center",
    },
  ];

  function createData(deviceName, deviceAddress, fogId, deleteDevice) {
    return { deviceName, deviceAddress, fogId, deleteDevice };
  }

  const row = [
    createData(
      "Security Camera 1",
      "0xe16c1623c1aa7d919cd2241db3cd9e79c1ie7a2w9",
      "0xe16c1623c1aa7d919cd2241d8bwd45fs3f66ha3K7",
      "Delete"
    ),
  ];
  //    const columns = [
  //   { id: "userName", label: "User Name", minWidth: 170, align: "center" },
  //   {
  //     id: "userAddress",
  //     label: "User Address",
  //     minWidth: 170,
  //     align: "center",
  //   },
  //   { id: "device Name", label: "Device Name", minWidth: 170, align: "center" },
  //   { id: "fogId", label: "Device Fog Map ID", minWidth: 100, align: "center" },
  //   {
  //     id: "delete",
  //     label: "Delete Device",
  //     minWidth: 170,
  //     align: "center",
  //   },
  // ]
  // const deleteDevice = () => {
  //   // event.preventDefault();
  //   console.log("Device deleted successfully !!!");
  //   alert("Device deleted successfully !!!");
  // };

  // const handleDelete = (index) => {
  //   event.preventDefault();
  //   // console.log("Device deleted successfully !!!");
  //   // alert("Admin deleted successfully !!!");
  //   deleteDev(fogAddress);
  // };
  return (
    <div>
      <div className="tableData">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 400 }} className="tableContainer">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className="tableCell"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {data.map((row, i) => (
                  <TableRow component="th" scope="row" key={i}>
                    <TableCell className="tableCell" align="center">{row.name}</TableCell>
                    <TableCell className="tableCell" align="center">{row.id}</TableCell>
                    <TableCell className="tableCell" align="center">{row.fogId}</TableCell>
                    <TableCell className="tableCell" align="center"><button className="delActiveButton" onClick={handleDelete}>Delete</button></TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            // count={lastweekorderData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};
export default TableComponent;
