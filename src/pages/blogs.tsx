import { Box, Button, Grid, Typography } from "@mui/material";
import { BlogCard } from "../components/blogCard";
import { blogs } from "../common/common";
import { useNavigate } from "react-router-dom";

interface BlogsCardProps {
  showAll: boolean;
}
export function BlogsCard({ showAll }: BlogsCardProps) {
  const navigate = useNavigate();
  const blogsList = showAll ? blogs : blogs.slice(0, 4);
  return (
    <Box display="flex" flexDirection="column" sx={{}} id="blogs">
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          p={1}
          mt={6}
          mb={3}
          sx={{ color: "#78bcc4!important" }}
          fontSize="25px"
          fontFamily="PeroBold"
        >
          Latest Blog
        </Typography>
        {/* <Typography
          variant="h6"
          align="center"
          mb={3}
          sx={{ color: "white" }}
          fontFamily="PeroBold"
        >
          My Articles and advice
        </Typography> */}
        <Grid container spacing={5}>
          {blogsList?.map((blog) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <BlogCard blog={blog} key={blog.id}></BlogCard>
            </Grid>
          ))}
        </Grid>
        {!showAll && (
          <Box display="flex" justifyContent="center" mt={2} mb={1}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 50,
                width: "140px!important",
                marginLeft: "0rem",
                color: "white!important",
                border: "1px solid black",
                backgroundColor: "#ff014f!important",

                height: "40px",
                "& .MuiButton-label": {
                  fontWeight: "500",
                },
                fontFamily: "PeroBold",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/blogs");
              }}
            >
              View More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
