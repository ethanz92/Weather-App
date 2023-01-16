import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export default function Header() {
  const date = new Date();
  let [day, dateString] = [
    Intl.DateTimeFormat("en-US", { weekday: "long" })
      .format(date)
      .toUpperCase(),
    date.toLocaleDateString(),
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <CloudRoundedIcon
            sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WEATHER
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {`${day} ${dateString}`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
