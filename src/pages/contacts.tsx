import { Box, Card, Grid, Typography, Button } from "@mui/material";
import { contacts } from "../common/common";
import { ContactCard } from "../components/contactCard";
import { CustomCardInput } from "../components/customInput";
import { IEmailInput } from "../store/type";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    if(emailInputs.email && emailInputs.text){
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
            (result: {status:number,text:string}) => {
                if(result.status===200){
                    toast.success('Email forwarded successfully', {
                      position: 'top-right',
                      autoClose: 3000
                    })
                }
            },
            (error: unknown) => {
                console.log(error)
                toast.error('Something went wrong', {
                    position: 'top-right',
                    autoClose: 3000
                  })
              console.log(error);
            },
          );
    }else{
        toast.error('Please enter all mandatory fields', {
            position: 'top-right',
            autoClose: 3000
          })
    }
  };
  return (
    <>
    <ToastContainer/>
    <Box display="flex" flexDirection="column" sx={{

// backgroundImage: `url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRmb2xpbyUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)`, 
backgroundSize: 'cover',
backgroundPosition: '50%',
backgrounRepeat:'no-repeat'
}} id="contacts">
<Box sx={{  width:'85%',margin:'auto'}}>
    <Typography variant="h4" align="center" mt={6} p={1} mb={3} sx={{fontFamily:'sans-serif',background: "rgba(0,0,0,.2)!important;",color:"white"}}>
       Contact
      </Typography>
    <Grid container spacing={7}>
      <Grid item xs={12} md={6}>
        <Card
          style={{
            padding: "3rem",
            backgroundColor: "#001d37",
            color: "white",
          }}
        >
          <Typography variant="h4">Let's Talk</Typography>
          <Box display="flex" flexDirection="column">
            <CustomCardInput
              name="name"
              label="Name*"
              value={emailInputs.name}
              handleInputChange={handleInputChange}
              maxRows={1}
              widthPercentage="100%"
            ></CustomCardInput>
            <Box display="flex" justifyContent="space-between">
              <CustomCardInput
                name="email"
                label="Email*"
                value={emailInputs.email}
                handleInputChange={handleInputChange}
                maxRows={1}
                widthPercentage="48%"
              ></CustomCardInput>
              <CustomCardInput
                name="phone"
                label="Phone"
                value={emailInputs.phone}
                handleInputChange={handleInputChange}
                maxRows={1}
                widthPercentage="48%"
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
            variant="outlined"
            sx={{
              borderRadius: 50,
              width: "170px!important",
              marginLeft: "0rem",
              padding: "10px 20px",
              color: "white!important",
              backgroundColor: "#ff3c78!important",
              height: "50px",
              border: "none",
              "& .MuiButton-label": {
                fontWeight: "500",
              },
            }}
            onClick={() => sendEmail()}
          >
            Send Message
          </Button>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} display="flex" alignItems="center" >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {contacts?.map((contact, index) => (
            <Grid item xs={4} key={index}>
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
