import { Box, useTheme } from "@mui/material";
import { AppBar } from "../components/appbar";
import { AboutMe } from "./aboutMe";
import { Experience } from "./experience";
import { BiographySkillsEducation } from "./biographySkillsEducation";
import { Expertise } from "./expertise";
import { Portfolios } from "./portfolios";
import { BlogsCard } from "./blogs";
import { Contacts } from "./contacts";
import { Footer } from "../components/Footer";
import "simplebar-react/dist/simplebar.min.css";
import { CertificatesAndAcheivements } from "./certificates";
export function Home() {
  const theme = useTheme();
  return (
    <Box fontFamily="PeroRegular" id="home">
      <AppBar showSidebar={true} />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
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
          <BlogsCard showAll={false}></BlogsCard>
          <CertificatesAndAcheivements></CertificatesAndAcheivements>
          <Contacts></Contacts>
          <Footer></Footer>
        </Box>
      </Box>
    </Box>
  );
}
