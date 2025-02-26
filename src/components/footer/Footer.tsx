import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: 0 }}
      className="site-footer"
    >
      <Toolbar>
        <Typography
          variant="subtitle2"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              padding: 2,
              justifyContent: "center",
            }}
          >
            <Link href="/privacy-policy" underline="hover">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" underline="hover">
              Terms and Conditions
            </Link>
            <Link href="/refund-policy" underline="hover">
              Refund Policy
            </Link>
          </Box>
          © {new Date().getFullYear()} Coming Soon. All Rights Reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
