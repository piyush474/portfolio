import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import UmamiAnalytics from "./components/UmamiAnalytics.jsx";
import Launcher from "./Launcher.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <UmamiAnalytics />
      <Launcher />
    </ThemeProvider>
  );
}
