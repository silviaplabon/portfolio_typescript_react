import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Blog } from "../common/types";
import { makeStyles } from "@mui/styles";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Box, Button } from "@mui/material";

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
  read_more_arrow_icon: {
    marginLeft: "2rem",
    color: "orange",
    fontSize: "20px",
  },
});

interface BlogCardProps {
  blog: Blog;
}
export function BlogCard({ blog }: BlogCardProps) {
  const classes = useStyles();
  const redirectToBlog = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <Card sx={{padding:"1.4rem"}}>
      <CardContent >
        <Typography mb={1}>{blog.published_date}</Typography>
        <Typography mb={1}  className={classes.card_title} sx={{fontWeight:'bold'}}>
          {blog.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          className={classes.card_subtitle}
        >
          {blog.subtitle?.split(" ")?.slice(0, 30).join(" ") + "..."}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          mb={3}
          sx={{ cursor: "pointer" }}
        >
        <Button  onClick={()=>redirectToBlog(blog.link)} sx={{paddingLeft:'0px',color:"white"}}>
          <Typography>Read More</Typography>
          </Button>
          <Button  onClick={()=>redirectToBlog(blog.link)}>
          <BsFillArrowRightCircleFill
       
            className={classes.read_more_arrow_icon}
          ></BsFillArrowRightCircleFill>
          </Button>
        </Box>
        <CardMedia
          className={classes.card_media}
          component="img"
          height="210"
          src={blog.image}
          alt="blog image"
        />
      </CardContent>
    </Card>
  );
}
