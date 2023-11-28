import {
  Box,
  Button,
  CardMedia,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import "./index.css";
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
    height: "60px",
    fontSize: "14px",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "3!important",
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

  return (
    <Box sx={{ position: "relative",paddingTop:'10px' }} >
      <Grid
        container
        mt-5
        sx={{ position: "relative", width: "85%", margin: "auto" }}
        id="abouts"
      >
        <Grid item xs={12} sm={5} paddingTop="0px!important">
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
        <Grid item xs={10} sm={6} paddingTop="0px!important">
          <Typography variant="h4" mt={matches?0:6} mb={matches?1:3} fontSize="25px" fontFamily="PeroBold">
            About Me
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mb={2}
            className={classes.card_subtitle}
            fontFamily="PeroRegular"
          >
            I have over 2 years of experience as a software developer, with a
            focus on frontend and backend development. I am proficient in React,
            JavaScript, ES6, HTML, CSS, Bootstrap, Material-UI, Redux, SASS,
            Typescript, and React-Native. I also have sharpen experience with
            backend development using Node.js and Golang. I am looking forward
            to contributing to an exciting and fast-moving company, and I feel I
            can do so with my skill, extensive knowledge, and creativity.
          </Typography>
          <Box display="flex">
            <CardMedia
              className={classes.positionLogo}
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21WH-plOQhb5Bb1O7YeGQa5GhaMzgywWfsjrXkYvxnC3kvQBGKIiMT6mkJBuspGpcBcs&usqp=CAU"
              alt="blog image"
            />
            <Box>
              <Typography px={2}   fontFamily="PeroBold">Software Engineer</Typography>
              <Typography px={2} sx={{ fontSize: "12px" }}   fontFamily="PeroRegular">
                Profecia Links Consulting Private LTD
              </Typography>
              
            </Box>
            
          </Box>
          <Button
            variant="contained"
            href="https://drive.google.com/uc?export=download&amp;id=1AIYBvCQ8PllfECtzfjcT7sGaq5ha7S8H"
            sx={{
              borderRadius: 50,
              marginTop:'20px',
              zIndex:'3',
              width: "140px!important",
              marginLeft: "0rem",
              color: "white!important",
              backgroundColor: "#162032!important",
              boxShadow: "0 7px 8px 0 rgba(0, 0, 0, 0.2)",
              height: "40px",
              fontFamily:"PeroBold",
              "& .MuiButton-label": {
                fontWeight: "500",
              },
            }}
            
          >
            Resume
          </Button>
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="end"
        sx={{ position: "absolute", right: "0px", top: "100px", zIndex: 3 }}
      >
        <List
          sx={{
            width: "50px",
            maxWidth: "70px",
            bgcolor: "background.paper",
            marginRight: "10px",
          }}
        >
          <ListItem sx={{ padding: "5px" }}>
            <Link href="https://github.com/silviaplabon" target="_blank">
              <FaGithubSquare color="#ad5c51" size="40" />
            </Link>
          </ListItem>

          <ListItem sx={{ padding: "5px" }}>
            <Link
              href="https://www.linkedin.com/in/silviaplabon"
              target="_blank"
            >
              <FaLinkedin color="#0072b1" size="40" href="" />
            </Link>
          </ListItem>
          <ListItem sx={{ padding: "5px" }}>
            <Link
              href="https://www.facebook.com/profile.php?id=100012297911476"
              target="_blank"
            >
              <FaFacebookSquare color="#3b5998" size="40" href="" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
