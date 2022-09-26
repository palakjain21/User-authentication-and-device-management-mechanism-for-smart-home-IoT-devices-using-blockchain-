import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ account }) {
  console.log(account, "acc no");
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h3 className="menu">Menu</h3>

        {/* <CloseIcon className="close" /> */}
      </div>
      <hr className="line" />
      <div className="options">
        <div className="optionBlock">
          <NavLink to="/" className="optionName">
            Admins
          </NavLink>
        </div>
        <div className="optionBlock">
          <NavLink to="/addAdmins" className="optionName">
            Register Admin
          </NavLink>
        </div>
        <div className="optionBlock">
          <NavLink to="/addDevices" className="optionName">
            Register Device
          </NavLink>
        </div>
        <div className="optionBlock">
          <NavLink to="/manageDevices" className="optionName">
            Manage Device
          </NavLink>
        </div>
        <div className="optionBlock">
          <NavLink to="/registerUsers" className="optionName">
            Register Users
          </NavLink>
        </div>
        <div className="optionBlock">
          <NavLink to="/manageUsers" className="optionName">
            Manage Users
          </NavLink>
        </div>
      </div>
      {/* <h4 className="accType">Account Type: Non-Admin</h4>
      <h5 className="accAdd">{account}</h5> */}
    </div>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import "./Sidebar.css";

// const drawerWidth = 240;

// export default function PermanentDrawerLeft() {
//   return (
//     <>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//         style={{ marginTop: "0px !important" }}
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// }
