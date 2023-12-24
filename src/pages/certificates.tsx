import { Box, Grid, Typography } from "@mui/material";
import { certificatesAndAcheivements } from "../common/common";
import { CertificateAndAcheivement } from "../components/certificateAndAcheivement";

export function CertificatesAndAcheivements() {
  return (
    <Box display="flex" flexDirection="column" sx={{}} id="certificates">
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Typography
          variant="h4"
          align="center"
          p={1}
          mt={6}
          mb={3}
          fontSize="25px"
          fontFamily="PeroBold"
          sx={{ color: "#78bcc4!important" }}
        >
          Certificates & Acheivements
        </Typography>

        <Grid container spacing={5}>
          {certificatesAndAcheivements?.map((data, i) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <CertificateAndAcheivement
                data={data}
                key={i}
              ></CertificateAndAcheivement>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
