import { Contact } from "../common/types";
import { Box, Typography } from "@mui/material";

interface ContactCardProps {
  contact: Contact;
}
export function ContactCard({ contact }: ContactCardProps) {
  return (
    <Box display="flex" mb={2}>
      <Box
        sx={{
          backgroundColor: contact.color,
          borderRadius: "5px",
          padding: "5px 18px!important",
          height: "40px",
          color: "white",
        }}
        display="flex"
        alignItems="center"
      >
        {contact.icon}
      </Box>
      <Box display="flex" flexDirection="column" p={1}>
        <Typography sx={{ color: "white" }} fontFamily="PeroBold">
          {contact.name}
        </Typography>
        <Typography sx={{ color: "white" }} fontFamily="PeroRegular">
          {contact.title}
        </Typography>
      </Box>
    </Box>
  );
}
