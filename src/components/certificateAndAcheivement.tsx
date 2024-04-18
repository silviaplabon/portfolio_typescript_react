import { CertificateOrAcheivement } from "../common/types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { ImCross } from "react-icons/im";
import { Box, IconButton, Modal, useMediaQuery } from "@mui/material";
import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { LuView } from "react-icons/lu";

const useStyles = makeStyles({
  card_media: {
    borderRadius: "0.675rem",
  },
  cardContainer: {
    "&:hover": {
      "& $showOverlay": {
        opacity: 1,
        display: "block!important",
      },
    },
  },

  card_media_modal: {
    borderRadius: "0.675rem",
  },
  card_title: {
    height: "20px",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "1!important",
    "-webkit-box-orient": "vertical",
  },
  read_more_arrow_icon: {
    marginLeft: "2rem",
    color: "#ff014f",
    fontSize: "20px",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white",
  },
  showOverlay: {
    display: "none",
  },
});

interface CertificateAndAcheivementProps {
  data: CertificateOrAcheivement;
}
export function CertificateAndAcheivement({
  data,
}: CertificateAndAcheivementProps) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const redirectToLink = (url: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <>
      <Card
        sx={{ padding: "0.6rem", position: "relative" }}
        className={classes.cardContainer}
      >
        <CardContent>
          <Typography
            mb={2}
            className={classes.card_title}
            sx={{ fontWeight: "bold" }}
            fontFamily="PeroBold"
          >
            {data.name}
          </Typography>
          <Box
            className={classes.showOverlay}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "10px",
              opacity: 0,
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%", cursor: "pointer" }}
            >
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#0f172a",
                  borderRadius: "50%",
                }}
                onClick={() => handleOpen()}
              >
                <LuView size="30"></LuView>
              </Box>
            </Box>
          </Box>

          <CardMedia
            className={classes.card_media}
            component="img"
            height="210"
            sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
            src={data.link}
            alt="blog image"
          />
        </CardContent>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: !matches ? "80%" : "97%",
              height: matches ? "97%" : "80%",
              bgcolor: "white",
              color: "#162032",
              border: "2px solid #000",
              boxShadow: 24,
              borderRadius: 5,
            }}
          >
            <SimpleBar style={{ height: "95%", marginTop: "10px" }}>
              {" "}
              <Box sx={{ padding: !matches ? "10px 40px" : "15px " }}>
                <Box display="flex" justifyContent="end">
                  <IconButton onClick={handleClose}>
                    <ImCross size="20" color="#162032" />
                  </IconButton>
                </Box>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  fontFamily="PeroBold"
                  component="h2"
                  sx={{ fontWeight: "bold", fontSize: "23px" }}
                >
                  {data.name}
                </Typography>
                <Typography
                  sx={{ marginTop: "20px", fontStyle: "italic" }}
                  fontFamily="PeroRegular"
                >
                  {data.subtitle}
                </Typography>

                <Typography
                  sx={{ marginTop: "20px", fontStyle: "italic" }}
                  fontFamily="PeroRegular"
                  onClick={() => redirectToLink(data?.link)}
                >
                  {data.credentialId}
                </Typography>
                <Card
                  sx={{
                    backgroundColor: "#ffe7c7",
                    color: "#162032",
                    marginTop: "20px",
                    borderRadius: "10px!important",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <CardMedia
                    className={classes.card_media_modal}
                    component="img"
                    src={data.link}
                    alt="blog image"
                  />
                </Card>
              </Box>
            </SimpleBar>
          </Box>
        </Modal>
      </Card>
    </>
  );
}
