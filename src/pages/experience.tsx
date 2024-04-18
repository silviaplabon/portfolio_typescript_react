import { Box, Grid, Typography } from "@mui/material";
import { experiences } from "../common/common";
import { ExperienceCard } from "../components/experienceCard";

export function Experience() {
  return (
    <Box display="flex" flexDirection="column" sx={{}} id="experiences">
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          p={1}
          mt={2}
          mb={1}
          fontSize="25px"
          fontFamily="PeroBold"
          sx={{ color: "#78bcc4!important" }}
        >
          My Experience
        </Typography>
        {/* <Typography
          variant="h6"
          align="center"
          mb={1}
          sx={{ color: "white" }}
          fontFamily="PeroBold"
        >
          What I Have
        </Typography> */}
        <Grid container sx={{ width: "100%", margin: "auto" }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              px={2}
              sx={{ fontSize: "25px", fontWeight: "bold" }}
              fontFamily="PeroBold"
            >
              Software Engineer
            </Typography>
            <Typography
              px={2}
              sx={{ fontSize: "12px", fontWeight: "500" }}
              fontFamily="PeroRegular"
            >
              Profecia Links Consulting Private LTD, Dubai
            </Typography>
            <Typography px={2} fontFamily="PeroRegular">
              I've harnessed the power of Node.js and Golang to create robust
              APIs. These APIs serve as the backbone for feature-rich,
              versatile, and scalable applications, empowering developers of all
              levels. Explore the limitless potential of API development with my
              expertise. Dedicated to React JS, I utilize this cutting-edge
              framework not just as a tool but as a vision for my work. I
              specialize in managing and crafting extensive React JS
              applications, driven by my passion for excellence.
            </Typography>
            <Typography px={2} fontSize="12px"></Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={7}
            xl={8}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="column"
          >
            {experiences?.map((experience) => (
              <ExperienceCard experience={experience}></ExperienceCard>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
