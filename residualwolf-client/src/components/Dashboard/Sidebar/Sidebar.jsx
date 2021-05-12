import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ViewListIcon from "@material-ui/icons/ViewList";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CategoryIcon from "@material-ui/icons/Category";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LogoutIcon from "@material-ui/icons/Category";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link, Router } from "react-router-dom";
import './Sidebar.css';
import { propTypes } from "react-bootstrap/esm/Image";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard">
                <DashboardIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard/blogs">
                <ViewListIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard/blogs">
              <ListItemText primary="Blogs" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard/user">
                <AccountCircleIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard/user">
              <ListItemText primary="User" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard/category">
                <CategoryIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard/category">
              <ListItemText primary="Categories" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard/video">
                <VideoLibraryIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard/video">
              <ListItemText primary="Videos" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/admin/dashboard/tags">
                <LocalOfferIcon />
              </Link>
            </ListItemIcon>
            <Link to="/admin/dashboard/tags">
              <ListItemText primary="Tags" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link onClick={()=>{
                localStorage.clear();
                window.location.href = "/login"
              }}>
                <strong>
                  <i class="fas fa-sign-out-alt text-20"></i>
                </strong>
              </Link>
            </ListItemIcon>
            <Link onClick={()=>{
                localStorage.clear();
                window.location.href("/login")
              }}>
              <ListItemText primary="Logout" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
