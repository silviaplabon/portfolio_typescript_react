import { Box, Grid, Typography } from "@mui/material";
import { skillsArea } from "../common/common";
import { ExpertiseCard } from "../components/expertiseCard";

export function Expertise() {
  return (
    <Box display="flex" flexDirection="column" sx={{}} id="expertises">
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          p={1}
          mt={6}
          mb={3}
          fontSize="25px"
          fontFamily="PeroBold"
          sx={{ color: "#78bcc4!important" }}
        >
          My Expertise
        </Typography>
        {/* <Typography
          variant="h6"
          align="center"
          mb={1}
          sx={{ color: "white" }}
          fontFamily="PeroBold"
        >
          What I Do
        </Typography> */}
        <Grid container>
          {skillsArea?.map((area, index) => (
            <Grid item xs={12} sm={6} lg={3}>
              <ExpertiseCard data={area} key={index}></ExpertiseCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
