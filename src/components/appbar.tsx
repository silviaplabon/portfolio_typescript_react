import { Box, CardMedia, Link, Typography } from "@mui/material";
import logoTitle from '../assets/logoSilvia.png'

export function AppBar() {
  return (
    <Box sx={{backgroundColor:'#0f172a'}}>
    <Box width="100%" display="flex"  justifyContent="space-between"    sx={{width:'85%',margin:'auto'}} >
      <Box
        display="flex"
        alignItems="center"
      
      >
            <CardMedia
   sx={{width:'150px',height:'80px'}}
          component="img"
          src={logoTitle}
          alt="blog image"
        />
      </Box>
      <Box display="flex" justifyContent="end" p={1} >
        <Typography sx={{color:"white"}} p={3}>    <Link href="#home" sx={{textDecoration:'none',color:'white'}}>Home</Link></Typography>
        <Typography sx={{color:"white"}} p={3}> <Link href="#abouts"  sx={{textDecoration:'none',color:'white'}}>About</Link></Typography>
    
        <Typography sx={{color:'white'}} p={3} >Skills</Typography>
        <Typography sx={{color:"white"}} p={3}> <Link href="#portfolios"  sx={{textDecoration:'none',color:'white'}}>Portfolio</Link></Typography>
        <Typography sx={{color:"white"}} p={3}> <Link href="#blogs"  sx={{textDecoration:'none',color:'white'}}>Blogs</Link></Typography>
        <Typography sx={{color:"white"}} p={3}> <Link href="#contacts"  sx={{textDecoration:'none',color:'white'}}>Contact</Link></Typography>
      </Box>
    </Box>
    </Box>
  );
}
