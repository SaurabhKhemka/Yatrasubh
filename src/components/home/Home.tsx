import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h2" gutterBottom>
        Coming Soon
      </Typography>
      <Typography variant="h6" color="textSecondary">
        We are working hard to bring you something amazing!
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary">
          Notify Me
        </Button>
      </Box>
      <Footer />
    </Container>
  );
};

export default Home;
