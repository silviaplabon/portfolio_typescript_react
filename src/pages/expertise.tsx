import { Box, Grid, Typography } from "@mui/material";
import { skillsArea } from "../common/common";
import { ExpertiseCard } from "../components/expertiseCard";

export function Expertise() {
  return (
    <Box display="flex" flexDirection="column" sx={{

          // backgroundImage: `url('https://plus.unsplash.com/premium_photo-1673480195911-3075a87738b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`, 
    
          // https://images.unsplash.com/photo-1669630814501-9b0dd220a763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80
          backgroundImage:`url('https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      backgroundRepeat:'repeat!important'
    }} id="expertises">
      <Box sx={{  width:'85%',margin:'auto'}}>
      <Typography variant="h4" align="center"  mt={6} mb={3} sx={{fontFamily:'sans-serif',background: "rgba(0,0,0,.2)!important;",color:'white'}}>
       My Expertise
      </Typography>
      <Typography variant="h6" align="center" mb={1} sx={{color:'white'}}>
        What I Do
      </Typography>
      <Grid container >
        {skillsArea?.map((area,index) => (
          <Grid item xs={12} sm={6} lg={3}>
            <ExpertiseCard data={area} key={index}></ExpertiseCard>
          </Grid>
        ))}
      </Grid>

      </Box>
    </Box>
  );
}
