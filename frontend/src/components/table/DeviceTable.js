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

const TableComponent = ({}) => {
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
      id: "delete",
      label: "Delete Device",
      minWidth: 170,
      align: "center",
    },
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
                <TableRow
                  //   key={i}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  sx={{ height: "max-content" }}
                >
                  {/* <TableCell component="th" scope="row" className="white">
                        {row.time_log.split("G")[0]}
                      </TableCell>
                      <TableCell align="center" className="white">
                        {row.food}
                      </TableCell>
                      <TableCell align="center" className="white">
                        {row.unit}
                      </TableCell>
                      <TableCell align="center" className="white">
                        {row.amount_g.toFixed(2)}
                      </TableCell> */}
                </TableRow>
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
