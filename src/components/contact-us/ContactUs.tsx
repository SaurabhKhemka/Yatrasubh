import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import "./../../App.css";
import "./contact.css";

const ContactUs: React.FC = () => {
  return (
    <>
      <Card variant="outlined" className="card-container">
        Contact Us
      </Card>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ width: "50%" }}>
          <Typography variant="subtitle2" gutterBottom>
            Thank you for your interest in Yatrasubh Limited. We are eager to
            assist you and provide the necessary information to meet your needs.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              11, Floor – 3rd, Plot 5/1721, Kailash Darshan, Jagannath
              Shankarseth Marg, Kennedy Bridge, Gamdevi, Grant Road, Mumbai MH
              400007
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>General Inquiries &amp; Support</strong>
            </p>
            <p>
              +91 700 123 8907
              <br />
              care@yatrasubh.com
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
              to stay updated on our latest promotions and events.
            </p>
          </Typography>
          <p>&nbsp;</p>
          <Typography variant="subtitle2" gutterBottom>
            <p>
              At Yatrasubh Limited, we value your feedback and inquiries. Our
              dedicated team is here to assist you and provide exceptional
              service. We look forward to hearing from you and building a
              lasting relationship.
            </p>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
