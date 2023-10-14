import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    card_media: {
        borderRadius: '100%',
        width: '290px',
backgroundColor:'red',
        height: '290px', 
      },
  card_subtitle: {
    height: "60px",
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

  },

});

export function AboutMe(){
    const classes=useStyles()
    return(
        <Grid container spacing={5} mt-5 sx={{position:'relative'}}>
          <Grid item xs={12} sm={5}>
        <Box className={`${classes.thumb} `} display="flex" justifyContent="center"><img src="https://i.ibb.co/vzLWqkx/silvia1-removebg-preview.png"  className={` ${classes.card_media}`} alt="Thumb"/></Box>
          </Grid>
         <Grid item xs={12} sm={7}>
         <Typography variant="h4"  mt={6} mb={3} sx={{fontFamily:'sans-serif',color:'white'}}>
       About Me
      </Typography>
      <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          className={classes.card_subtitle}
        >
       I'm a passionate and self-motivated software developer with about 1.5 years of experience. I am looking forward to contributing to an exciting and fast-moving company, and I feel I can do so with my skill, extensive knowledge, and creativity.
        </Typography>
          </Grid>
      </Grid>
    )
}