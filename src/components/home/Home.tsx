import image1 from "./../../images/image1.jpeg";
import image2 from "./../../images/image2.jpeg";
import image3 from "./../../images/image3.jpeg";
import image4 from "./../../images/image4.jpg";
import image5 from "./../../images/image5.jpg";
import image6 from "./../../images/image6.jpeg";
import "./home.css";

import { Box, Card, Container, Grid, Typography } from "@mui/material";

const images: any = [image3, image1, image2];
const certificates: any = [image4, image5, image6];

const Home = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {images.map((src: any, index: any) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              component="img"
              src={src}
              alt={`Image ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{ mt: 5, mb: 5 }}
            gutterBottom
            style={{ textAlign: "center" }}
          >
            <strong>
              <i>
                We're currently working on creating our new website. We'll be
                launching soon.
              </i>
            </strong>
          </Typography>

          <Card
            variant="outlined"
            className="card-container"
            sx={{ mt: 5, mb: 1 }}
            style={{ height: "50px" }}
          >
            Our Accreditations and Recognitions
          </Card>
          <Grid container spacing={2} justifyContent="center">
            {certificates.map((src: any, index: any) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  component="img"
                  src={src}
                  alt={`Image ${index + 1 + 3}`}
                  sx={{
                    width: "100%",
                    height: "200px",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
