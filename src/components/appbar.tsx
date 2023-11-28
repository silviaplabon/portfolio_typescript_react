import { Box, CardMedia, Link, Typography, useMediaQuery } from "@mui/material";
import logoTitle from "../assets/logoSilvia.png";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { useState } from "react";
import { TemporaryDrawer } from "./sidebar";
import { useAtom } from "jotai";
import { stepNumberAtom } from "../App";


export function AppBar() {
  const matches = useMediaQuery("(max-width:1201px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [,setStepNumber] = useAtom(stepNumberAtom)
  return (
    <Box sx={{ backgroundColor: "#0f172a",width:'100%'}}>
      <TemporaryDrawer isOpen={isOpen} setIsOpen={setIsOpen}></TemporaryDrawer>

      <Box
        width="100%"
        display="flex"
    
        justifyContent="space-between"
        sx={{ width: "100%", margin: "auto" }}
      >
        <Box display="flex" alignItems="center">
          <CardMedia
            sx={{ width: "150px", height: "80px" }}
            component="img"
            src={logoTitle}
            alt="blog image"
          />
        </Box>
        {!matches ? (
          <Box display="flex" justifyContent="end" p={1}>
            <Typography sx={{ color: "white" }} p={3}     fontFamily="PeroBold!important">
              {" "}
              <Link
                href="#home"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
            </Typography>
            <Typography sx={{ color: "white" }} p={3}     fontFamily="PeroBold!important">
              {" "}
              <Link
                href="#abouts"
                sx={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </Typography>
            <Typography sx={{ color: "white" }} p={3} onClick={()=>setStepNumber(1)}     fontFamily="PeroBold!important">
              {" "}
              <Link
                href="#biographySkillEducation"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Skills
              </Link>
            </Typography>
         
            <Typography sx={{ color: "white" }} p={3}     fontFamily="PeroBold!important">
              {" "}
              <Link
                href="#portfolios"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Portfolio
              </Link>
            </Typography>
            <Typography sx={{ color: "white" }} p={3}     fontFamily="PeroBold!important">
              {" "}
              <Link
                href="#blogs"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Blogs
              </Link>
            </Typography>
            <Typography sx={{ color: "white" }} p={3}     fontFamily="PeroBold!important">
              {" "}
              <Link
                href="#contacts"
                sx={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center",marginRight:'40px' }}>
            {" "}
            <RiArchiveDrawerFill onClick={() => setIsOpen(true)} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
