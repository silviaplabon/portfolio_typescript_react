import { Box, Button, Grid, Typography } from "@mui/material";
import { BlogCard } from "../components/blogCard";
import { blogs } from "../common/common";

export function BlogsCard() {
  return (
    <Box display="flex" flexDirection="column" sx={{}} id="blogs">
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
          Latest Blog
        </Typography>
        <Typography
          variant="h6"
          align="center"
          mb={3}
          sx={{ color: "white" }}
          fontFamily="PeroBold"
        >
          My Articles and advice
        </Typography>
        <Grid container spacing={5}>
          {blogs?.map((blog) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <BlogCard blog={blog} key={blog.id}></BlogCard>
            </Grid>
          ))}
        </Grid>
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
          >
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
