import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Project } from "../common/types";
import { makeStyles } from "@mui/styles";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import {
  Box,
  IconButton,
  Modal,
  Grid,
  ImageList,
  ImageListItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const useStyles = makeStyles({
  card_media: {
    borderRadius: "0.675rem",
  },
  card_subtitle: {
    height: "60px",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "3!important",
    "-webkit-box-orient": "vertical",
  },
  card_title: {
    height: "50px",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "2!important",
    "-webkit-box-orient": "vertical",
  },
  project_description: {
    height: "95px",
    overflow: "hidden!important",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "4!important",
    "-webkit-box-orient": "vertical",
  },
  read_more_arrow_icon: {
    marginLeft: "2rem",
    color: "orange",
    fontSize: "20px",
  },
});
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const matches = useMediaQuery("(max-width:900px)");
  const matchesSmall = useMediaQuery("(max-width:600px)");

  return (
    <Card sx={{ padding: "0.6rem" }}>
      <CardContent>
        <Box
          sx={{
            height: "260px",
            borderRadius: "10px",
            width: "100%",
            backgroundColor: project.themeColor,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}> */}
          <CardMedia
            className={classes.card_media}
            component="img"
            height="230"
            sx={{
              borderRadius: "10px",
              width: "90%",
              margin: "auto",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
            src={project.imageUrl}
            alt="blog image"
          />
          {/* </motion.div> */}
        </Box>
        <Typography
          mb={1}
          marginTop="20px"
          fontFamily="PeroBold"
          sx={{ fontWeight: "bold"}}
        >
          {project.projectName}
        </Typography>
        <Typography
          mb={1}
          fontFamily="PeroRegular"
          className={classes.project_description}
        >
          {project.description}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="end">
            <Typography
              sx={{
                color: "#ff014f!important",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: matchesSmall ? "11px" : "15px",
                transition: 'color 0.3s ease-in-out', 
                ":hover": {
                  color:"black!important",
                },
              }}
              onClick={() => handleOpen()}
              fontFamily="PeroBold"
            >
              View Projects
            </Typography>
          </Box>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <CardMedia
              className={classes.card_media}
              component="img"
              sx={{
                borderRadius: "10px",
                width: "150px",
                height: "80px",
                objectFit: "contain",
              }}
              src={
                "https://luique.bslthemes.com/wp-content/uploads/2022/09/pat-2.png"
              }
              alt="blog image"
            />
          </motion.div>
        </Box>
      </CardContent>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: !matches ? "80%" : "97%",
            height: matches ? "97%" : "80%",
            bgcolor: "white",
            color: "#162032",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: 5,
          }}
        >
          <SimpleBar style={{ height: "95%", marginTop: "10px" }}>
            {" "}
            <Box sx={{ padding: !matches ? "10px 40px" : "15px " }}>
              <Box display="flex" justifyContent="end">
                <IconButton onClick={handleClose}>
                  <ImCross size="20" color="#162032" />
                </IconButton>
              </Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                fontFamily="PeroBold"
                component="h2"
                sx={{ fontWeight: "bold", fontSize: "23px" }}
              >
                {project.projectName}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontWeight: "bold" }}
                fontFamily="PeroBold"
              >
                PROJECT OVERVIEW
              </Typography>
              <Typography fontFamily="PeroRegular">
                {project.projectOverview}
              </Typography>

              <Typography
                sx={{ marginTop: "20px", fontStyle: "italic" }}
                fontFamily="PeroRegular"
              >
                {project.description}
              </Typography>
              <Card
                sx={{
                  backgroundColor: "#ffe7c7",
                  color: "#162032",
                  marginTop: "20px",
                  borderRadius: "10px!important",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* <SimpleBar style={{ maxHeight: "400px", margin: "10px" }}> */}
                <Grid container sx={{ padding: !matches ? "40px" : "20px" }}>
                  {project?.performedTasks &&
                    project?.performedTasks?.map((performedTask) => (
                      <Box
                        display="flex"
                        width="100%"
                        flexDirection="column"
                        marginBottom="20px"
                      >
                        <Button
                          variant="outlined"
                          sx={{
                            width: matches ? "100%" : "100%",
                            marginRight: "0.2rem",
                            marginTop: "0.7rem",
                            border: "none!important",
                            color: "white!important",
                            backgroundColor: "#001d37!important",
                            height: "40px",
                            "& .MuiButton-label": {
                              fontWeight: "500",
                            },
                            fontFamily: "PeroBold",
                          }}
                        >
                          {performedTask.technologies}
                        </Button>
                        {performedTask.tasks?.map((task) => (
                          <li style={{ fontFamily: "PeroRegular" }}>{task}</li>
                        ))}
                      </Box>
                    ))}
                  {/* <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontWeight: "bold" }}>Client</Typography>
                  <Typography>RETROKIT</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    PROJECT TYPE
                  </Typography>
                  <Typography>ECOMMERCE</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontWeight: "bold" }}>Address</Typography>
                  <Typography>USA</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontWeight: "bold" }}>YEAR</Typography>
                  <Typography>2021</Typography>
                </Grid> */}
                </Grid>
                {/* </SimpleBar> */}
              </Card>

              {/* <SimpleBar style={{ height: "350px", marginTop: "10px" }}> */}
              <ImageList
                sx={{ width: "100%" }}
                variant="quilted"
                cols={4}
                rowHeight={175}
              >
                {project.projectImages.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 175, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              {/* </SimpleBar> */}
            </Box>
          </SimpleBar>
        </Box>
      </Modal>
    </Card>
  );
}
