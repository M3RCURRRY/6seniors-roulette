import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Wrapper.module.css";
import { AccessibleForward } from "@mui/icons-material";

class Wrapper extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Link to="/">
              <IconButton
                color="default"
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <AccessibleForward />
              </IconButton>
            </Link>
            <Typography variant="h6" noWrap color="#202020">
              6Seniors Roulette
            </Typography>
          </Toolbar>
        </AppBar>
        <Outlet />
      </div>
    );
  }
}

export default Wrapper;
