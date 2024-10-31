import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography, Divider } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import CustomButton from "../components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger ? theme.palette.background.default : "transparent",
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton 
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{ 
              color: theme.palette.primary.main,
              display: { xs: "block", md: "none" } 
            }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Link to="#home" style={{ textDecoration: "none" }}>
            <IconButton size="large" disabled>
              <FontAwesomeIcon 
                icon={faLaptopCode} 
                style={{ 
                  color: theme.palette.primary.main,
                  height: 45, 
                  width: 45
                }} 
              />
              <Typography 
                variant="h3" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  marginLeft: "10px",
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: { md: "inline", xs: "none" }
                }}
              >
                Engineering Modern Data Platforms...
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box 
            sx={{ 
              alignItems: "center",
              display: { md: "flex", xs: "none" } 
            }}
          >
            <Link smooth to="#home">
              <CustomButton 
                href="#home"
                text="Home"
              />
            </Link>
            <Link smooth to="#experience">
              <CustomButton 
                href="#experience"
                text="Experience"
              />
            </Link>
            <Link smooth to="#projects">
              <CustomButton 
                href="#projects"
                text="Projects"
              />
            </Link>
            <Link smooth to="#technologies">
              <CustomButton 
                href="#technologies"
                text="Technologies"
              />
            </Link>
            <Link smooth to="#testimonials">
              <CustomButton
                href="#testimonials"
                text="Testimonials"
              />
            </Link>
            <Link to="/blog">
              <CustomButton 
                href="/blog"
                text="Blog"
              />
            </Link>
          </Box>
          <Divider
            orientation="vertical"
            sx={{ 
              height: 32, 
              mx: 2,
              display: { lg: "flex", md: "none", xs: "none" } 
            }} 
          />
          <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
            <IconButton 
              aria-label="Twitter" 
              href="https://x.com/ber4ce"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              href="https://www.linkedin.com/in/wilberforce-wairagu-20758b144/"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              href="https://www.instagram.com/willy_wairagu/"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;