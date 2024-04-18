import {
  Box,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoTitle from "../assets/logoSilvia.png";
import { FaBars } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { TemporaryDrawer } from "./sidebar";
import { useAtom } from "jotai";
import { stepNumberAtom } from "../App";
import { useLocation } from "react-router-dom";

interface AppBarProps {
  showSidebar: boolean | true;
}

export function AppBar({ showSidebar }: AppBarProps) {
  const theme = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setStepNumber] = useAtom(stepNumberAtom);
  const [isHomeUrl, setIsHomeUrl] = useState(false);
  useEffect(() => {
    if (location.pathname == "") {
      setIsHomeUrl(true);
    }
  }, [location]);
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main }}>
      <TemporaryDrawer isOpen={isOpen} setIsOpen={setIsOpen}></TemporaryDrawer>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%", margin: "auto" }}
      >
        <Box display="flex" alignItems="end" justifyContent="flex-end">
          <CardMedia
            sx={{ width: "150px", height: "100px", marginLeft: "1.5rem" }}
            component="img"
            src={logoTitle}
            alt="blog image"
          />
        </Box>
        {!showSidebar && !matches ? (
          <Box
            display="flex"
            justifyContent="end"
            p={1}
            sx={{ cursor: "pointer" }}
          >
            <Link
              href={isHomeUrl ? "#home" : "/#home"}
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ color: "white" }}
                p={3}
                fontFamily="PeroBold!important"
              >
                {" "}
                Home
              </Typography>
            </Link>
            <Link
              href={isHomeUrl ? "#abouts" : "/#abouts"}
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ color: "white" }}
                p={3}
                fontFamily="PeroBold!important"
              >
                {" "}
                About
              </Typography>
            </Link>
            <Link
              href={
                isHomeUrl
                  ? "#biographySkillEducation"
                  : "/#biographySkillEducation"
              }
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ color: "white" }}
                p={3}
                onClick={() => setStepNumber(1)}
                fontFamily="PeroBold!important"
              >
                {" "}
                Skills
              </Typography>
            </Link>

            <Link
              href={isHomeUrl ? "#portfolios" : "/#portfolios"}
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ color: "white" }}
                p={3}
                fontFamily="PeroBold!important"
              >
                {" "}
                Portfolio
              </Typography>
            </Link>
            <Link
              href={isHomeUrl ? "#blogs" : "/#blogs"}
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ color: "white" }}
                p={3}
                fontFamily="PeroBold!important"
              >
                {" "}
                Blogs
              </Typography>
            </Link>
            <Link
              href={isHomeUrl ? "#contacts" : "/#contacts"}
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{ color: "white" }}
                p={3}
                fontFamily="PeroBold!important"
              >
                {" "}
                Contact
              </Typography>
            </Link>
          </Box>
        ) : (
          <Box
            p={1}
            onClick={() => setIsOpen(true)}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "40px",
              borderRadius: "50%",
              border: "1px solid white",
              marginTop: "25px",
              height: "30px",
              width: "30px",
              ":hover": {
                backgroundColor: "#ff014f",
              },
            }}
          >
            {" "}
            <FaBars disableRipple></FaBars>
          </Box>
        )}
      </Box>
    </Box>
  );
}
