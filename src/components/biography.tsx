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
  const getAge = () => {
    const currentDate = new Date();
    const previousDateObject = new Date(Biography.birthday);

    const differenceInMilliseconds =
      currentDate.getTime() - previousDateObject.getTime();
    const differenceInYears =
      differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    return Math.ceil(differenceInYears);
  };
  return (
    <Grid container spacing={5} color="white">
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold" sx={{color: "#edf2f4!important"}}>Name</Typography>
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
          <Typography fontFamily="PeroBold" sx={{color: "#edf2f4!important"}}>Age</Typography>
          <Typography fontFamily="PeroRegular">{getAge()}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{ width: "90%" }}
          display="flex"
          justifyContent="space-between"
          className={classes.biographyCol}
        >
          <Typography fontFamily="PeroBold" sx={{color: "#edf2f4!important"}}>Email</Typography>
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
          <Typography fontFamily="PeroBold" sx={{color: "#edf2f4!important"}}>Birthday</Typography>
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
          <Typography fontFamily="PeroBold" sx={{color: "#edf2f4!important"}}>Phone</Typography>
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
          <Typography fontFamily="PeroBold" sx={{color: "#edf2f4!important"}}>Address</Typography>
          <Typography fontFamily="PeroRegular">{Biography.address}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
