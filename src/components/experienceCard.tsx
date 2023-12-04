import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { Box, Button, CardContent, useMediaQuery } from "@mui/material";
import { Experience } from "../common/types";

const useStyles = makeStyles({
  card_title: {
    height: "50px",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "2!important",
    "-webkit-box-orient": "vertical",
  },
});

interface ExperienceCardProps {
  experience: Experience;
}
export function ExperienceCard({ experience }: ExperienceCardProps) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      sx={{ marginTop: "20px" }}
      display="flex"
      flexDirection="row-reverse"
      justifyContent="space-between"
      alignItems={!matches ? "flex-end" : "center"}
      width="100%"
      color="white"
    >
      <Card
        sx={{
          padding: "0.6rem",
          width: matches ? "100%" : "80%",
          backgroundColor: "#162032",
        }}
      >
        <CardContent>
          <Typography
            mb={1}
            fontFamily="PeroBold"
            sx={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
          >
            {experience.position}
          </Typography>
          <Typography
            mb={1}
            fontFamily="PeroRegular"
            sx={{ fontWeight: "500", fontSize: "12px", color: "white" }}
          >
            {experience.company}
          </Typography>

          <Typography
            mb={0}
            className={classes.card_title}
            sx={{ color: "white", fontSize: "12px" }}
            fontFamily="PeroBold"
          >
            {experience.employmentTime}
          </Typography>
          <Typography mb={2} sx={{ color: "white" }} fontFamily="PeroRegular">
            {experience.description}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            flexDirection="row"
          >
            {experience.skills?.map((skill) => (
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 50,
                  marginRight: "0.2rem",
                  marginTop: "0.7rem",
                  color: "white!important",
                  border: "1px solid black",
                  backgroundColor: "#0f172a!important",
                  height: "40px",
                  "& .MuiButton-label": {
                    fontWeight: "500",
                  },
                  fontFamily: "PeroBold",
                }}
              >
                {skill}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
