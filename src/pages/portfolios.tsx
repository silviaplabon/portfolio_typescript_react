import { Box, Button, Grid, Typography } from "@mui/material";
import { projectsList } from "../common/common";
import { ProjectCard } from "../components/projectCard";
import { useEffect, useState } from "react";

export function Portfolios() {
  const [projects, setProjects] = useState(projectsList);

  useEffect(() => {
    const filteredProjects = projectsList.filter((project) =>
      project.typeOfContent.includes("all"),
    );

    setProjects(filteredProjects);
  }, []);
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const handleProjects = (title: string, stepNo: number) => {
    setSelectedTab(stepNo);
    const filteredProjects = projectsList.filter((project) =>
      project.typeOfContent.includes(title),
    );

    setProjects(filteredProjects);
  };

  return (
    <Box display="flex" flexDirection="column" id="portfolios">
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          p={1}
          mt={6}
          mb={3}
          fontSize="25px"
          fontFamily="PeroBold"
        >
          My Creative Portfolio Section
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              border: "none!important",
              color: "white!important",
              height: "40px",
            }}
            onClick={() => handleProjects("all", 1)}
          >
            <Typography
              sx={{
                borderBottom:
                  selectedTab == 1 ? "2px solid white!important" : "none",
              }}
              fontFamily="PeroBold"
            >
              {" "}
              ALL
            </Typography>
          </Button>
          <Button
            variant="text"
            sx={{
              border: "none!important",
              color: "white!important",
              height: "40px",
              borderBottom: selectedTab == 2 ? "1px solid white" : "none",
            }}
            onClick={() => handleProjects("website", 2)}
          >
            <Typography
              sx={{
                borderBottom:
                  selectedTab == 2 ? "2px solid white!important" : "none",
              }}
              fontFamily="PeroBold"
            >
              WEBSITE
            </Typography>
          </Button>
          <Button
            variant="text"
            sx={{
              border: "none!important",
              color: "white!important",
              height: "40px",
              borderBottom: selectedTab == 3 ? "1px solid white" : "none",
            }}
            onClick={() => handleProjects("app", 3)}
          >
            <Typography
              sx={{
                borderBottom:
                  selectedTab == 3 ? "2px solid white!important" : "none",
              }}
              fontFamily="PeroBold"
            >
              APP
            </Typography>
          </Button>
        </Box>
        <Grid container spacing={5} sx={{ marginTop: "60px" }}>
          {projects?.map((project) => (
            <Grid item xs={12} lg={4} xl={3}>
              <ProjectCard project={project}></ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
