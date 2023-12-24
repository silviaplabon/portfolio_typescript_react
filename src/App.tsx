import "./App.css";

import { ThemeProvider } from "@mui/material";
import { atom } from "jotai";
import { createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

// eslint-disable-next-line react-refresh/only-export-components
export const stepNumberAtom = atom(1);

const theme = createTheme({
  palette: {
    secondary: {
      main: "#1f2833",
    },
    primary: {
      main: "#0f172a",
    },
  },
});

function App() {
  console.log(theme, "@@@@@@@@@@@@");
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} fallbackElement={<div>Error</div>} />
    </ThemeProvider>
  );
}

export default App;
