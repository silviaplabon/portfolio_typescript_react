
import { Box } from "@mui/material";
import "./App.css";
import { BlogsCard } from "./pages/blogs";
import { Contacts } from "./pages/contacts";
import { Expertise } from "./pages/expertise";
import { AboutMe } from "./pages/aboutMe";
import backgroundImage from './assets/banner.jpg'

function App() {
  return (
    <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',
      backgroundAttachment:'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#f4f0ea',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box sx={{}}>
<Box sx={{width:'85%',margin:'auto'}}>
<AboutMe></AboutMe>
      <Expertise></Expertise>
      <BlogsCard></BlogsCard>
      <Contacts></Contacts>
</Box>

    </Box>
    </Box>
  );
}

export default App;
