import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { Box, Button, CardContent } from "@mui/material";
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
export function SkillCard({ experience }: ExperienceCardProps) {
  const classes = useStyles();

  return (
    <Box
      sx={{ marginTop: "20px" }}
      display="flex"
      flexDirection="row-reverse"
      justifyContent="space-between"
      alignItems="flex-end"
      width="100%"
      color="white"
    >
      <Card
        sx={{ padding: "0.6rem", width: "60%", backgroundColor: "#162032" }}
      >
        <CardContent>
          <Typography
            mb={1}
            sx={{ fontWeight: "bold", fontSize: "22px", color: "white" }}
          >
            {experience.position}
          </Typography>
          <Typography
            mb={1}
            sx={{ fontWeight: "bold", fontSize: "22px", color: "white" }}
          >
            {experience.company}
          </Typography>

          <Typography
            mb={0}
            className={classes.card_title}
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {experience.employmentTime}
          </Typography>
          <Typography mb={2} sx={{ color: "white" }}>
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
                  color: "black!important",
                  border: "1px solid black",
                  backgroundColor: "gray!important",
                  height: "40px",
                  "& .MuiButton-label": {
                    fontWeight: "500",
                  },
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
