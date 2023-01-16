import "./App.css";
import React from "react";
import Header from "./Components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { amber, grey, deepOrange } from "@mui/material/colors";

export default function App() {
  return <Header />;
}
