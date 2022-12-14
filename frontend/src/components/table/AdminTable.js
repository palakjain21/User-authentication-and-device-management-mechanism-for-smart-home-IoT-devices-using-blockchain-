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
import { listAdmin, deleteAdmin } from "../../Web3Client";

const TableComponent = ({ account }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageUrl, setPageUrl] = React.useState(false);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const list = async () => {
      const dat = await listAdmin();
      console.log(dat);
      setData(dat);
    };
    list();
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "Admin Name", label: "Admin Name", minWidth: 300, align: "center" },
    {
      id: "Admin Address",
      label: "Admin Address",
      minWidth: 300,
      align: "center",
    },
    {
      id: "Delete Admin",
      label: "Delete Admin",
      minWidth: 300,
      align: "center",
    },
  ];

  function createData(AdminName, AdminAddress, DeleteAdmin) {
    return { AdminName, AdminAddress, DeleteAdmin };
  }

  const row = [
    createData(
      "Admin 2",
      "0xe16c1623c1aa7d919cd2241db3cd9e79w5df3t9",
      "Delete"
    ),
  ];

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   // console.log("Device deleted successfully !!!");
  //   // alert("Admin deleted successfully !!!");
  //   deleteAdmin(AdminAddress);
  // };

  // { id: "fogId", label: "Device Fog Map ID", minWidth: 100, align: "center" },
  // {
  //   id: "delete",
  //   label: "Delete Device",
  //   minWidth: 170,
  //   align: "center",
  // },

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
                {/* {lastweekorderData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => ( */}
                {data.map((row, i) => (
                  <TableRow scope="row" key={i}>
                    <TableCell
                      className="tableCell"
                      // style={{ minWidth: "150px" }}
                      align="center"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      className="tableCell"
                      align="center"
                      // style={{ minWidth: "200px" }}
                      scope="row"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      <button
                        className="delActiveButton"
                        // onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
                {/* <TableRow
                  //   key={i}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  sx={{ height: "max-content" }}
                >
                  <TableCell component="th" scope="row" >
                        row.time_log.split("G")[0]
                      </TableCell>
                      <TableCell align="center" >
                        row.food
                      </TableCell>
                      <TableCell align="center" >
                        row.unit
                      </TableCell>
                      <TableCell align="center">
                        row.amount_g.toFixed(2)
                      </TableCell>
                </TableRow> */}
                {/* ))} */}
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
