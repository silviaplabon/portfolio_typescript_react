import Typography from "@mui/material/Typography";

import { Box, Button, Grid } from "@mui/material";
import { DegreeList } from "../common/common";

export function EducationCard() {
  return (
    <Box padding="10px">
      <Grid container spacing={5} color="white">
        {DegreeList?.map((degree) => (
          <Grid item xs={12} lg={6}>
            <Typography fontFamily="PeroBold">{degree.title}</Typography>
            <Typography fontFamily="PeroRegular">{degree.institution}</Typography>
            <Button
              variant="outlined"
              sx={{
                marginRight: "0.2rem",
                marginTop: "0.7rem",
                border: "none!important",
                color: "white!important",
                backgroundColor: "#ff014f!important",
                height: "40px",
                fontFamily:"PeroBold",
                "& .MuiButton-label": {
                  fontWeight: "500",
                },
              }}
              
            >
              {degree.duration}
            </Button>
            <Typography marginTop="10px" fontFamily="PeroBold">{degree.result}</Typography>
            <Typography marginTop="10px" sx={{ fontSize: "12px" }} fontFamily="PeroRegular">
              {degree.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
