import { Box } from "@mui/material";
import "./App.css";
import { BlogsCard } from "./pages/blogs";
import { Contacts } from "./pages/contacts";
import { Expertise } from "./pages/expertise";
import { AboutMe } from "./pages/aboutMe";
import { AppBar } from "./components/appbar";
import { Portfolios } from "./pages/portfolios";
import "simplebar-react/dist/simplebar.min.css";
import { Experience } from "./pages/experience";
import { BiographySkillsEducation } from "./pages/biographySkillsEducation";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/Footer";
import { atom } from "jotai";
import { createTheme } from "@mui/material/styles";

export const stepNumberAtom = atom(1);

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff014f",
    },
    
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box fontFamily="PeroRegular" id="home">
        <AppBar />
        <Box
          sx={{
            backgroundColor: "#0f172a",
            width: "100%",
            minHeight: "100vh",
            margin: "0",
            padding: "0",
          }}
        >
          <Box>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <BiographySkillsEducation></BiographySkillsEducation>
            <Expertise></Expertise>
            <Portfolios></Portfolios>
            <BlogsCard></BlogsCard>
            <Contacts></Contacts>
            <Footer></Footer>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
