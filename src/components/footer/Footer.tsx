import { Box, Link, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Your Company Name
      </Typography>
      <Box mt={1}>
        <Link href="/privacy-policy" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="/terms-conditions" sx={{ mx: 1 }}>
          Terms & Conditions
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
