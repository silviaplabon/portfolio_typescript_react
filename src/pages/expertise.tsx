import { Box, Grid, Typography } from "@mui/material";
import { skillsArea } from "../common/common";
import { ExpertiseCard } from "../components/expertiseCard";

export function Expertise() {
  return (
    <Box display="flex" flexDirection="column" sx={{background: "hsla(0,0%,100%,.5)!important"}}>
      <Typography variant="h4" align="center" mt={6} mb={3} sx={{fontFamily:'sans-serif',background: "rgba(0,0,0,.2)!important;",color:"white"}}>
       My Expertise
      </Typography>
      <Typography variant="h6" align="center" mb={1} sx={{color:"white"}}>
        What I Do
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
