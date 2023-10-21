import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {SkillArea } from "../common/types";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
  card_media: {
    borderRadius: "0.675rem",
    
  },
  card_subtitle: {
    height: "60px",
    overflow: "hidden",
    color:'white!important',
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
  read_more_arrow_icon: {
    marginLeft: "2rem",
    color: "orange",
    fontSize: "20px",
  },
});

interface ExpertiseCardProps {
  data: SkillArea
}
export function ExpertiseCard({ data}: ExpertiseCardProps) {
  const classes = useStyles();

  return (
      <CardContent >
      <CardMedia
          className={classes.card_media}
          component="img"
          height="180"
          src={data.image}
          alt="blog image"
        />
       <Typography   className={classes.card_title} mt={2} sx={{fontWeight:'bold',color:'white'}}>
          {data.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          className={classes.card_subtitle}
        >
          {data.subtitle?.split(" ")?.slice(0, 30).join(" ") + "..."}
        </Typography>
       
      </CardContent>
  );
}
