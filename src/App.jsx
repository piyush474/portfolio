import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Launcher from "./Launcher.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Launcher />
    </ThemeProvider>
  );
}
