import { Box, Typography } from "@mui/material";

export function Footer() {

  return (
    <Box display="flex" justifyContent="center" marginTop="50px">
      <Typography>SILVIA@{new Date().getFullYear() }, All RIGHTS RESERVED</Typography>
    </Box>
  );
}
