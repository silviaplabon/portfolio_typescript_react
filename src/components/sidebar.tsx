import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Link, Typography } from "@mui/material";
import {AiOutlineHome} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {GrProjects} from 'react-icons/gr'
import {SiSkillshare} from 'react-icons/si'
import {LiaBlogSolid} from 'react-icons/lia'
import {TbOutlet} from 'react-icons/tb'
import {BiSolidContact} from 'react-icons/bi'
import {MdOutlineCastForEducation} from 'react-icons/md'
import {TbListDetails} from 'react-icons/tb'
import { useAtom } from "jotai";
import { stepNumberAtom } from "../App";

// import CustomizedSwitch from "./switch";
interface TemporaryDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function TemporaryDrawer({ isOpen, setIsOpen }: TemporaryDrawerProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [,setStepNumber] = useAtom(stepNumberAtom)
  
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(!isOpen);
    };

  return (
    <div >
      <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer()}>
        <Box
              fontFamily="PeroBold"
          sx={{ width: "250px", }}
          role="presentation"
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <List>
            <ListItem key={"home"} disablePadding>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#home"
                  sx={{ textDecoration: "none", color: "black", display:'flex' }}
                >
                  <AiOutlineHome size="25"></AiOutlineHome>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                  Home
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
            <ListItem key={"about"} disablePadding>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#abouts"
                  sx={{ textDecoration: "none", color: "black" ,display:'flex'}}
                >
                  <TbOutlet  size="25"></TbOutlet>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                  About
                  </Typography>
                
                </Link>
              </Typography>
            </ListItem>

            <ListItem key={"portfolios"} disablePadding>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#portfolios"
                  sx={{ textDecoration: "none", color: "black", display:'flex'}}
                >
                  <GrProjects  size="20"></GrProjects>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
               Projects
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
            <ListItem key={"experiences"} disablePadding>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#experiences"
                  sx={{ textDecoration: "none", color: "black", display:'flex' }}
                >
            <GiSkills  size="25"></GiSkills>
            <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                 Experience
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
            <ListItem key={"skills"} disablePadding onClick={()=>setStepNumber(1)}>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#biographySkillEducation"
                  sx={{ textDecoration: "none", color: "black", display:'flex' }}
                >
                  <SiSkillshare  size="25"></SiSkillshare>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                 Skills
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
            <ListItem key={"skills"} disablePadding  onClick={()=>setStepNumber(3)}>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#biographySkillEducation"
                  sx={{ textDecoration: "none", color: "black", display:'flex' }}
                >
                  <TbListDetails size="25"></TbListDetails>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                Biography
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
            <ListItem key={"skills"} disablePadding  onClick={()=>setStepNumber(2)}>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#biographySkillEducation"
                  sx={{ textDecoration: "none", color: "black", display:'flex' }}
                >
                  <MdOutlineCastForEducation size="25"></MdOutlineCastForEducation>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                 Education
                  </Typography>
                </Link>
              </Typography>
            </ListItem>

            <ListItem key={"blogs"} disablePadding>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#blogs"
                  sx={{ textDecoration: "none", color: "black", display:'flex'}}
                >
                  <LiaBlogSolid  size="25"></LiaBlogSolid>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
              Blogs
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
            <ListItem key={"contacts"} disablePadding>
              <Typography sx={{ color: "black" }} p={2}>
                {" "}
                <Link
                  href="#contacts"
                  sx={{ textDecoration: "none", color: "black", display:'flex' }}
                >
                  <BiSolidContact  size="25"></BiSolidContact>
                  <Typography marginLeft="20px" fontWeight="bold" fontFamily="PeroBold">
                 Contact
                  </Typography>
                </Link>
              </Typography>
            </ListItem>
          </List>
          <Divider />
          <List>

            {/* <CustomizedSwitch></CustomizedSwitch> */}
          </List>

        </Box>
      </Drawer>
    </div>
  );
}
