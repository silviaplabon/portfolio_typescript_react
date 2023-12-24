import { Box, Link, List, ListItem } from "@mui/material";
import { socialLinks } from "../common/common";

export function SocialLinks() {
  return (
    <Box
      display="flex"
      justifyContent="end"
      sx={{ position: "absolute", right: "0px", top: "100px", zIndex: 3 }}
    >
      <List
        sx={{
          width: "40px",
          bgcolor: "white",
          marginRight: "5px",
          marginLeft: "5px",
          padding: "0px",
        }}
      >
        {socialLinks?.map((socialLink) => (
          <ListItem sx={{ padding: "0px" }}>
            <Link
              href={socialLink.link}
              target="_blank"
              sx={{ padding: "0px!important" }}
              display="flex"
              alignItems="flex-end"
              aria-label={socialLink.name}
            >
              {socialLink.logo}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
