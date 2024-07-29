import React from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Reddit" icon={<RedditIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="YouTube" icon={<YouTubeIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
