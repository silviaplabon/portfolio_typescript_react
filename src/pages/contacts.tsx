import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { contacts } from "../common/common";
import { ContactCard } from "../components/contactCard";
import { CustomCardInput } from "../components/customInput";
import { IEmailInput } from "../store/type";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Contacts() {
  const [emailInputs, setEmailInputs] = useState<IEmailInput>({
    name: "",
    email: "",
    text: "",
    phone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInputs((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = () => {
    if (emailInputs.email && emailInputs.text) {
      emailjs
        .send(
          "silviaplabon",
          "template_bk8pchm",
          {
            from_name: emailInputs.email,
            to_name: "silviaPlabon@gmail.com",
            message: emailInputs.phone
              ? `Please contact at ${emailInputs.phone}. ${emailInputs.text}`
              : emailInputs.text,
            reply_to: "",
          },
          "user_MjJoSgwcS2C82hs0rwZky",
        )
        .then(
          (result: { status: number; text: string }) => {
            if (result.status === 200) {
              setEmailInputs({ name: "", email: "", text: "", phone: "" });
              toast.success("Thanks,Email forwarded successfully", {
                position: "top-right",
                autoClose: 3000,
              });
            }
          },
          () => {
            toast.error("Something went wrong", {
              position: "top-right",
              autoClose: 3000,
            });
          },
        );
    } else {
      toast.error("Please enter all mandatory fields", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  const matches = useMediaQuery("(max-width:900px)");
  const matchesSmall = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <>
      <ToastContainer />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "50%",
          backgrounRepeat: "no-repeat",
        }}
        id="contacts"
      >
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
            Contact
          </Typography>
          <Grid container spacing={7}>
            <Grid item xs={12} md={6}>
              <Card
                style={{
                  padding: matches ? "1rem" : "3rem",
                  backgroundColor: theme.palette.secondary.main,
                  color: "white",
                }}
              >
                <Typography variant="h4" fontFamily="PeroBold">
                  Let's Talk
                </Typography>
                <Box display="flex" flexDirection="column">
                  <CustomCardInput
                    name="name"
                    label="Name*"
                    value={emailInputs.name}
                    handleInputChange={handleInputChange}
                    maxRows={1}
                    widthPercentage="100%"
                  ></CustomCardInput>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={matchesSmall ? "column" : "row"}
                  >
                    <CustomCardInput
                      name="email"
                      label="Email*"
                      value={emailInputs.email}
                      handleInputChange={handleInputChange}
                      maxRows={1}
                      widthPercentage={matchesSmall ? "98%" : "48%"}
                    ></CustomCardInput>
                    <CustomCardInput
                      name="phone"
                      label="Phone"
                      value={emailInputs.phone}
                      handleInputChange={handleInputChange}
                      maxRows={1}
                      widthPercentage={matchesSmall ? "98%" : "48%"}
                    ></CustomCardInput>
                  </Box>
                  <CustomCardInput
                    name="text"
                    label="Text*"
                    value={emailInputs.text}
                    handleInputChange={handleInputChange}
                    maxRows={4}
                    widthPercentage="100%"
                  ></CustomCardInput>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 50,
                    width: "170px!important",
                    marginLeft: "0rem",
                    padding: "10px 20px",
                    color: "white!important",
                    backgroundColor: "#ff014f!important",
                    height: "50px",
                    border: "none",
                    "& .MuiButton-label": {
                      fontWeight: "500",
                    },
                    fontFamily: "PeroBold",
                  }}
                  onClick={() => sendEmail()}
                >
                  Send Message
                </Button>
              </Card>
            </Grid>

            <Grid
              sx={{ padding: "0px" }}
              item
              xs={12}
              md={6}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                width="100%"
              >
                {contacts?.map((contact, index) => (
                  <Grid item xs={12} md={8} key={index}>
                    <ContactCard contact={contact} />
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
