import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Biography } from "../common/common";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  biographyCol: {
    borderBottom: "1px solid white",
  },
});
export function BiographyCard() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={5} color="white">
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold">Name</Typography>
          <Typography fontFamily="PeroRegular">{Biography.name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold">Age</Typography>
          <Typography fontFamily="PeroRegular">{Biography.age}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold">Email</Typography>
          <Typography fontFamily="PeroRegular">{Biography.email}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold">Birthday</Typography>
          <Typography fontFamily="PeroRegular">{Biography.birthday}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={isMobile ? classes.biographyCol : ""}
        >
          <Typography fontFamily="PeroBold">Phone</Typography>
          <Typography fontFamily="PeroRegular">{Biography.phone}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          //   className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold">Address</Typography>
          <Typography fontFamily="PeroRegular">{Biography.address}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
