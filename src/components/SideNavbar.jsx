import {
  ExitToApp,
  Home as HomeIcon,
  Person as ProfileIcon,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "./images/shravan_logo.jpg";
import sslogo from "./images/shrava.png";
import slogo from "./images/sra.png";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,

  color: "#1976d2",

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),   // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavbar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [optionSelected, setOptionSelected] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div" className="logo">
            <img src={logo} alt="logo" height="50px" />
          </Typography> */}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" aria-label="home" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="profile">
            <ProfileIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="logout"
            component={Link}
            to="/logout"
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
          <Typography variant="h6" noWrap component="div" className="logo">
            <img src={logo} alt="logo" height="40px" width="200px"/>
          </Typography>
             {/* <Typography variant="h6" noWrap component="div" className="logo">
            <img src={slogo} alt="logo" height="70px" width="200px" />
          </Typography> */}
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <SideBarItems
          open={open}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
          
        />
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>

    //   <Box sx={{ display: 'flex' }}>
    //   <CssBaseline />
    //   <AppBar position="fixed" open={open}>
    //     <Toolbar>
    //       <IconButton
    //         color="inherit"
    //         aria-label="open drawer"
    //         onClick={handleDrawerOpen}
    //         edge="start"
    //         sx={{
    //           marginRight: 5,
    //           ...(open && { display: 'none' }),
    //         }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" noWrap component="div">
    //        <img src={logo} alt="logo" height="50px" width="500px"/>

    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer variant="permanent" open={open}>
    //     <DrawerHeader>
    //       <IconButton onClick={handleDrawerClose}>
    //         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    //       </IconButton>
    //     </DrawerHeader>
    //     <Divider />
    //     {SideBarItems(open)}
    //     <Divider />
    //   </Drawer>
    //   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    //     {props.content}

    //   </Box>
    // </Box>
  );
}
function SideBarItems({ open, setOptionSelected, optionSelected }) {
  return (
    <List>
       
      {["Home", "Add Employee"].map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          sx={{
            display: "block",
            color: optionSelected == index ? "white" : "#1976d2",
            backgroundColor: optionSelected == index ? "#1976d2" : "white",
          }}
          component={Link}
          to={index === 0 ? "/" : "/addEmployee"}
          onClick={() => setOptionSelected(index)}
        >
          {/* <Typography variant="h6" noWrap component="div" className="logo">
            <img src={sslogo} alt="logo" height="100px" width="240px" />
          </Typography> */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {index % 2 === 0 ? (
                <HomeIcon
                  sx={{ color: optionSelected == index ? "white" : "#1976d2" }}
                />
              ) : (
                <LibraryAddOutlinedIcon
                  sx={{ color: optionSelected == index ? "white" : "#1976d2" }}
                />
              )}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
