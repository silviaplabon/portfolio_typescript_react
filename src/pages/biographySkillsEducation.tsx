import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BiographyCard } from "../components/biography";
import { EducationCard } from "../components/educationCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { stepNumberAtom } from "../App";
import { useAtom } from "jotai";
import { SkillsCard } from "../components/skillsCard";

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
              {stepNumber === 1 && <SkillsCard></SkillsCard>}
              {stepNumber === 3 && <BiographyCard></BiographyCard>}
              {stepNumber === 2 && <EducationCard></EducationCard>}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
