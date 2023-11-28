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
import { Theme } from "@mui/material/styles";
import { Footer } from "./components/Footer";
import { atom } from 'jotai'
export const stepNumberAtom = atom(1)

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}


function App() {
 
  return (
    <Box fontFamily="PeroRegular" id="home">
      <AppBar  />
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
  );
}

export default App;
