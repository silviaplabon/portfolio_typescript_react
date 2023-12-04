import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Skills } from "../common/common";
import { BiographyCard } from "../components/biography";
import { EducationCard } from "../components/educationCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { stepNumberAtom } from "../App";
import { useAtom } from "jotai";
import { motion } from "framer-motion"

const useStyles = makeStyles(() => ({
  skillBiographyEducationButton: {
    width: "100%",
    paddingTop: "0px",
    marginTop: "20px",
    color: "black!important",
    border: "0px!important",
    borderRadius: "100px!important",
    "& .MuiButton-label": {
      fontWeight: "500",
    },
  },
  button: {
    width: "100%",
    fontSize: "17px!important",
    fontWeight: "bold!important",
    color: "white!important",
    backgroundColor: "#637d8d!important",
    borderRadius: "100px!important",
  },
  selectedButton: {
    borderRadius: "100px!important",
    border: "0px!important",
    backgroundColor: "#ff014f!important",
  },
}));

export function BiographySkillsEducation() {
  const classes = useStyles();

  const matches = useMediaQuery("(max-width:1200px)");
  const [stepNumber, setStepNumber] = useAtom(stepNumberAtom);

  return (
    <Box sx={{ marginTop: "50px" }} id="biographySkillEducation">
      <Box display="flex" flexDirection="column" sx={{ marginTop: "2rem" }}>
        <Box sx={{ width: matches ? "85%" : "65%", margin: "auto" }}>
          <Box
            className={classes.skillBiographyEducationButton}
            sx={{
              backgroundColor: !matches
                ? "#637d8d!important"
                : "#0f172a!important",
            }}
          >
            <Grid
              container
              spacing={5}
              padding="10px"
              paddingTop="0px!important"
            >
              <Grid item xs={12} sm={4} paddingTop="10px!important">
                <Button
                  variant={stepNumber === 1 ? "contained" : "text"}
                  className={
                    stepNumber === 1
                      ? `${classes.button} ${classes.selectedButton}`
                      : classes.button
                  }
                  onClick={() => setStepNumber(1)}
                >
                  <Typography fontFamily="PeroBold">SKILLS—1</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4} paddingTop="10px!important">
                <Button
                  variant={stepNumber === 2 ? "contained" : "text"}
                  className={
                    stepNumber === 2
                      ? `${classes.button} ${classes.selectedButton}`
                      : classes.button
                  }
                  onClick={() => setStepNumber(2)}
                >
                  <Typography fontFamily="PeroBold">EDUCATION—2</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4} paddingTop="10px!important">
                <Button
                  variant={stepNumber === 3 ? "contained" : "text"}
                  className={
                    stepNumber === 3
                      ? `${classes.button} ${classes.selectedButton}`
                      : classes.button
                  }
                  onClick={() => setStepNumber(3)}
                >
                  <Typography fontFamily="PeroBold">BIOGRAPHY—3</Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Card
            sx={{
              border: "1px solid white",
              padding: "10px",
              marginTop: "10px",
              backgroundColor: "#162032",
            }}
          >
            <CardContent>
              {stepNumber === 1 &&
                Skills.map((skillType) => (
                  <Box display="flex" marginTop="10px">
                    <Grid container spacing={7}>
                      <Grid
                        item
                        xs={12}
                        lg={5}
                        display="flex"
                        alignItems="center"
                      >
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
                              color: "white",
                            }}
                            fontFamily="PeroRegular"
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
                            <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >

                            <Box
                              sx={{
                                borderRadius: "10px",
                                marginRight: "0.5rem",
                                color: "white!important",
                                backgroundColor: "#0f172a!important",
                                height: "50px",
                                padding: "10px 16px",
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "20px",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              {skill.logo}
                              <Typography
                                marginLeft="10px"
                                fontFamily="PeroRegular"
                              >
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
              {stepNumber === 3 && <BiographyCard></BiographyCard>}
              {stepNumber === 2 && <EducationCard></EducationCard>}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
