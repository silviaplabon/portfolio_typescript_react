import Typography from "@mui/material/Typography";

import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { DegreeList } from "../common/common";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export function EducationCard() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box padding="10px">
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <Grid container spacing={5} color="white">
          {DegreeList?.map((degree) => (
            <Grid
              item
              xs={12}
              lg={6}
              paddingLeft={matches ? "5px!important" : "20px"}
              paddingRight={matches ? "0px!important" : "10px"}
            >
              <TimelineItem sx={{ paddingRight: "0px" }}>
                <TimelineSeparator>
                  <TimelineDot sx={{color:'#ff014f!important'}} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ paddingRight: "0px" }}>
                  <Typography
                    fontFamily="PeroBold"
                    fontSize={matches ? "11px" : "17px"}
                    sx={{color: "#edf2f4!important"}}
                  >
                    {degree.title}
                  </Typography>
                  <Typography
                    fontFamily="PeroRegular"
                    fontSize={matches ? "11px" : "17px"}
                  >
                    {degree.institution}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      marginRight: "0.2rem",
                      marginTop: "0.7rem",
                      border: "none!important",
                      color: "white!important",
                      backgroundColor: "#ff014f!important",
                      height: "40px",
                      fontFamily: "PeroBold",
                      "& .MuiButton-label": {
                        fontWeight: "500",
                      },
                    }}
                  >
                    {degree.duration}
                  </Button>
                  <Typography marginTop="10px" fontFamily="PeroBold">
                    {degree.result}
                  </Typography>
                  <Typography
                    marginTop="10px"
                    sx={{ fontSize: "12px" }}
                    fontFamily="PeroRegular"
                  >
                    {degree.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Grid>
          ))}
        </Grid>
      </Timeline>
    </Box>
  );
}
