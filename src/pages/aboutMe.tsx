import { Box, CardMedia, Grid, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

import './index.css'
const useStyles = makeStyles({
  positionLogo:{
height:'40px!important',
width:'40px!important'
  },
    card_media: {
      position:"absolute",
        width: '330px',
        height: '330px', 
        zIndex:1,
      },
  card_subtitle: {
    height: "60px",
    fontSize:'14px',
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "3!important",
    "-webkit-box-orient": "vertical",
    color:"white!important"
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
  thumb:{
    height:"400px",
    position:'relative',
    zIndex:'1'
  },
  

  // afterThumb: {

  // backgroundImage: `url(${bannerImage})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // width: '450px',
  // height: '450px',
  // position: 'absolute',
  // 'borderRadius': '50%',
  // marginTop:'100px',
  // bottom: '0px',
  // zIndex:-1
  // // content: "",
  // // "-webkit-transform": 'translateX(-50%)',
  // // transform: 'translateX(-50%)',
  // }

});

export function AboutMe(){
    const classes=useStyles()
    return(
        <Grid container spacing={5} mt-5 sx={{position:'relative'}} id="abouts">
          <Grid item xs={12} sm={5}>
            
        <Box className={`${classes.thumb} `} display="flex" justifyContent="center">
          {/* <Box className={classes.beforeThumb}>

          </Box> */}
          <img src="https://i.ibb.co/8DybrSn/silvia-Image.png"  className={` ${classes.card_media}`} alt="Thumb"/>
          {/* <Box className={classes.afterThumb}>
          </Box> */}
          </Box>
          </Grid>
         <Grid item xs={10} sm={6}>
         <Typography variant="h4"  mt={6} mb={3} sx={{fontFamily:'sans-serif',color:'white'}}>
       About Me
      </Typography>
      <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          className={classes.card_subtitle}
        >
     I have over 2 years of experience as a software developer, with a focus on frontend and backend development. I am proficient in React, JavaScript, ES6, HTML, CSS, Bootstrap, Material-UI, Redux, SASS, Typescript, and React-Native. I also have experience with backend development using Node.js and Golang. I am looking forward to contributing to an exciting and fast-moving company, and I feel I can do so with my skill, extensive knowledge, and creativity.
        </Typography>
        <Box display="flex">
        <CardMedia
        className={classes.positionLogo}
          component="img"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21WH-plOQhb5Bb1O7YeGQa5GhaMzgywWfsjrXkYvxnC3kvQBGKIiMT6mkJBuspGpcBcs&usqp=CAU'
          alt="blog image"
        />
        <Box>
          <Typography px={2}>Software Engineer</Typography>
          <Typography px={2}>Profecia Links Consulting Private LTD</Typography>
        </Box>
        </Box>
          </Grid>
          <Grid item xs={2} sm={1} display="flex" justifyContent="end" alignItems="center" >
          <List sx={{ width: '50px', maxWidth:'70px', bgcolor: 'background.paper',marginRight:'10px' }}>
            <ListItem sx={{padding:'5px'}}>
                <FaGithubSquare color="black" size="40"/>
            </ListItem>
            <ListItem sx={{padding:'5px'}}>
                <FaLinkedin color="black" size="40"/>
            </ListItem>
            <ListItem  sx={{padding:'5px'}}>
                <FaFacebookSquare color="black" size="40"/>
            </ListItem>
          </List>
          </Grid>
      </Grid>
    )
}