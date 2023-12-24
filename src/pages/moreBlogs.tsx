import { Box } from "@mui/material";
import { BlogsCard } from "./blogs";
import { AppBar } from "../components/appbar";
import { Footer } from "../components/Footer";
import "simplebar-react/dist/simplebar.min.css";
export function MoreBlogs() {
  return (
    <Box fontFamily="PeroRegular" id="home">
      <AppBar showSidebar={false} />
      <Box
        sx={{
          backgroundColor: "#0f172a",
          width: "100%",
          minHeight: "100vh",
          margin: "0",
          padding: "0",
        }}
      >
        <BlogsCard showAll={true} />
        <Footer></Footer>
      </Box>
    </Box>
  );
}
