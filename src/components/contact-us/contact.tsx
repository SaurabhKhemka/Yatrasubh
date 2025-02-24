import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import "./contact.css";
const ContactUs: React.FC = () => {
  return (
    <>
      <Card variant="outlined" className="card-container">
        Contact Us
      </Card>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="subtitle2" gutterBottom>
            Thank you for your interest in Varyaa Creations Limited. We are
            eager to assist you and provide the necessary information to meet
            your needs.
          </Typography>
          <p>&nbsp;</p>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              11, Floor – 3rd, Plot 5/1721, Kailash Darshan, Jagannath
              Shankarseth Marg, Kennedy Bridge, Gamdevi, Grant Road, Mumbai MH
              400007
            </p>
            <p>General Inquiries &amp; Customer Support</p>
            <p>
              +91 8879968559
              <br />
              info@varyaacreations.com
            </p>
          </Typography>
          <p>&nbsp;</p>

          <Typography variant="subtitle2" gutterBottom>
            <p>
              <strong>Business Hours:</strong> Monday to Friday: 11:00 AM to
              6:00 PM (GMT+5:30)
            </p>
            <p>
              <strong>Social Media:</strong> Follow us on Facebook and Instagram
              to stay updated on our latest collections, promotions, and events.
            </p>
            <p>
              <strong>Visit our online store:</strong> We welcome you to
              experience our online store{" "}
              <a href="http://www.baubleberry.com">www.baubleberry.com</a>
            </p>
            <p>
              <strong>Send us a Message:</strong> You can also reach out to us
              by filling out the contact form. We will get back to you as soon
              as possible.
            </p>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
