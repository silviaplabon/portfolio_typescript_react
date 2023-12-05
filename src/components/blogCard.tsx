import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Blog } from "../common/types";
import { makeStyles } from "@mui/styles";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Box } from "@mui/material";

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
    color: "#ff014f",
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
    <Card sx={{ padding: "0.6rem" }}>
      <CardContent>
        <Typography mb={1} fontFamily="PeroBold">
          {blog.published_date}
        </Typography>
        <Typography
          mb={0}
          className={classes.card_title}
          sx={{ fontWeight: "bold" }}
          fontFamily="PeroBold"
        >
          {blog.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={2}
          fontFamily="PeroRegular"
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
          <Typography
            sx={{ color: "black" }}
            fontFamily="PeroBold"
            onClick={() => redirectToBlog(blog.link)}
          >
            Read More
          </Typography>
          <BsFillArrowRightCircleFill
            onClick={() => redirectToBlog(blog.link)}
            className={classes.read_more_arrow_icon}
          ></BsFillArrowRightCircleFill>
        </Box>
        <CardMedia
          className={classes.card_media}
          component="img"
          height="210"
          sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
          src={blog.image}
          alt="blog image"
        />
      </CardContent>
    </Card>
  );
}
