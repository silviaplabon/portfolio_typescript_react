import {
  Box,
  Button,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { TypeAnimation } from "react-type-animation";
import "./index.css";
import { aboutText } from "../common/common";
import { SocialLinks } from "../components/socialLinks";
import jobLogo from "../assets/jobLogo.png";
const useStyles = makeStyles({
  positionLogo: {
    height: "40px!important",
    width: "40px!important",
  },
  card_media: {
    position: "absolute",
    width: "310px",
    height: "310px",
    zIndex: 1,
  },
  card_subtitle: {
    fontSize: "14px",
    overflow: "hidden",
    zIndex: 2,
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "14!important",
    "-webkit-box-orient": "vertical",
    color: "white!important",
  },
  card_title: {
    height: "50px",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "2!important",
    "-webkit-box-orient": "vertical",
  },
  read_more_arrow_icon: {
    marginLeft: "2rem",
    color: "orange",
    fontSize: "20px",
  },
  thumb: {
    height: "360px",
    position: "relative",
    zIndex: "1",
  },
});

export function AboutMe() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  const matchesLarge = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ position: "relative", paddingTop: "10px" }}>
      <Grid
        container
        mt-5
        sx={{ position: "relative", width: "85%", margin: "auto" }}
        id="abouts"
      >
        <Grid item xs={12} sm={12} md={5} paddingTop="0px!important">
          <Typography
            variant="h6"
            fontSize="17px"
            fontFamily="PeroSemiBold"
            sx={{ color: "#edf2f4!important" }}
          >
            Hello I'm
          </Typography>
          <Typography
            variant="h6"
            fontSize="20px"
            fontFamily="PeroRegular"
            style={{ marginLeft: matches ? "20px" : "80px" }}
          >
            SILVIA SATOAR PLABON
          </Typography>
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1000,
              "React Developer",
              1000,
              "Node JS Developer",
              1000,
              "Golang Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: matches ? "20px" : "22px",
              display: "inline-block",
              marginLeft: matches ? "20px" : "80px",
            }}
            repeat={Infinity}
          />
          <Box
            className={`${classes.thumb} `}
            display="flex"
            justifyContent="center"
          >
            <img
              src="https://i.ibb.co/8DybrSn/silvia-Image.png"
              className={` ${classes.card_media}`}
              alt="Thumb"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          paddingTop="0px!important"
          paddingLeft="25px!important"
        >
          <Typography
            variant="h4"
            fontSize="25px"
            mt={matchesLarge ? "0!important" : 10}
            mb={matches ? 1 : 5}
            fontFamily="PeroBold"
            sx={{ color: "#78bcc4!important" }}
          >
            About Me
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mb={2}
            className={classes.card_subtitle}
            fontFamily="PeroRegular"
          >
            {aboutText}
          </Typography>
          <Box display="flex" mt="5">
            <CardMedia
              className={classes.positionLogo}
              component="img"
              src={jobLogo}
              alt="blog image"
            />
            <Box>
              <Typography
                px={2}
                fontFamily="PeroBold"
                sx={{ color: "#edf2f4!important" }}
              >
                Software Engineer
              </Typography>
              <Typography
                px={2}
                sx={{ fontSize: "12px" }}
                fontFamily="PeroRegular"
              >
                Profecia Links Consulting Private LTD, Dubai
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            href="https://drive.google.com/uc?export=download&amp;id=1AIYBvCQ8PllfECtzfjcT7sGaq5ha7S8H"
            sx={{
              borderRadius: 50,
              marginTop: "20px",
              zIndex: "3",
              width: "140px!important",
              marginLeft: "0rem",
              color: "white!important",
              backgroundColor: "#ff014f!important",
              boxShadow: "0 7px 8px 0 rgba(0, 0, 0, 0.2)",
              height: "40px",
              fontFamily: "PeroBold",
              "& .MuiButton-label": {
                fontWeight: "500",
              },
            }}
            id="resumeButton"
          >
            Resume
          </Button>
        </Grid>
      </Grid>

      <SocialLinks></SocialLinks>
    </Box>
  );
}
