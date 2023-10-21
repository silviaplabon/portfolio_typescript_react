import { Box, Button, Grid, Typography } from "@mui/material";
import { BlogCard } from "../components/blogCard";
import { blogs } from "../common/common";

export function BlogsCard() {
  return (
    <Box display="flex" flexDirection="column" sx={{

      backgroundImage: `url('https://images.unsplash.com/photo-1550895030-823330fc2551?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      backgrounRepeat:'repeat!important'
      }} id="blogs">
      <Box sx={{  width:'85%',margin:'auto'}}>


 <Typography variant="h4" align="center" mt={6} mb={3} p={1} sx={{fontFamily:'sans-serif',background: "rgba(0,0,0,.2)!important;",color:"white"}}>
       LATEST BLOG
      </Typography>
      <Typography variant="h6" align="center" mb={3} sx={{color:"white"}}>
        My Articles and advice
      </Typography>
      <Grid container spacing={5}>
        {blogs?.map((blog) => (
          <Grid item xs={12} sm={6} lg={3}>
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={2} mb={1}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 50,
            width: "140px!important",
            marginLeft: "0rem",
            color: "black!important",
            border: "1px solid black",
            backgroundColor: "white!important",
            height: "40px",
            "& .MuiButton-label": {
              fontWeight: "500",
            },
          }}
        >
          View Blog
        </Button>
      </Box>
      </Box>
      </Box>
  );
}
