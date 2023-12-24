import { Box, CardMedia, Grid, Typography, useMediaQuery } from "@mui/material";
import { Skills } from "../common/common";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  skillBox: {
    borderRadius: "10px",
    marginRight: "0.5rem",
    color: "white!important",
    height: "50px",
    padding: "10px 16px",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export function SkillsCard() {
  const classes = useStyles();

  const matches = useMediaQuery("(max-width:1200px)");
  return (
    <>
      {Skills.map((skillType) => (
        <Box display="flex" marginTop="10px">
          <Grid container spacing={7}>
            <Grid item xs={12} lg={5} display="flex" alignItems="center">
              <CardMedia
                component="img"
                src={skillType.logo}
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: 50,
                }}
                alt="blog image"
              />

              <Box display="flex" alignItems="center">
                <Typography
                  px={2}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "white"
                  }}
                  fontFamily="PeroBold"
                >
                  {skillType.title}
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={7}
              sx={{ paddingTop: matches ? "0px!important" : "" }}
            >
              <Box
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                flexDirection="row"
              >
                {skillType.skills?.map((skill) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      className={classes.skillBox}
                      sx={{ backgroundColor: "#2d3032" }}
                    >
                      <Box sx={{ width: "30px", height: "30px" }}>
                        {skill.logo}
                      </Box>
                      <Typography marginLeft="10px" fontFamily="PeroRegular">
                        {skill.name}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}
