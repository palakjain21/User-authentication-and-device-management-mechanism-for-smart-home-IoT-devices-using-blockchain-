import React from "react";
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

const TableComponent = ({ account }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageUrl, setPageUrl] = React.useState(false);

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
  const deleteDevice = () => {
    // event.preventDefault();
    console.log("Device deleted successfully !!!");
    alert("Device deleted successfully !!!");
  };

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
                {row.map((row) => (
                  <TableRow key={row.deviceAddress}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      style={{ minWidth: row.minWidth }}
                    >
                      {row.deviceName}
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: row.minWidth }}>
                      {row.deviceAddress}
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: row.minWidth }}>
                      {row.fogId}
                    </TableCell>
                    {/* <TableCell
                      align="center"
                      style={{ minWidth: row.minWidth }}
                    > */}
                    {/* <button className="delButton" onClick={deleteDevice}>
                        Delete
                      </button> */}
                    {String(account) ===
                    "0xa86099b3ca1c1f25332c56194113fe591ccf2f3c" ? (
                      <TableCell
                        align="center"
                        style={{ minWidth: row.minWidth }}
                      >
                        <button
                          className="delActiveButton"
                          onClick={deleteDevice}
                        >
                          Delete
                        </button>
                      </TableCell>
                    ) : (
                      <TableCell
                        align="center"
                        style={{ minWidth: row.minWidth }}
                      >
                        <button className="delButton">Delete</button>
                      </TableCell>
                    )}
                    {/* </TableCell> */}
                  </TableRow>
                ))}
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
