import { Box, Grid, Typography } from "@mui/material";
import { skillsArea } from "../common/common";
import { ExpertiseCard } from "../components/expertiseCard";

export function Portfolios() {
  return (
    <Box display="flex" flexDirection="column" id="portfolios">
      <Typography variant="h4" align="center" p={1} mt={6} mb={3} >
    Portfolio
      </Typography>
      <Typography variant="h6" align="center" mb={1} sx={{color:"white"}}>
  My Projects
      </Typography>
      <Grid container spacing={5} p={5}>
        {skillsArea?.map((area,index) => (
          <Grid item xs={12} sm={6} lg={3}>
            <ExpertiseCard data={area} key={index}></ExpertiseCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
