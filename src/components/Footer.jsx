import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer">
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "4px",
          margin: "1rem auto",
          boxShadow: "0px 2px 5px #919191",
          width: "75%",
          height: "64px",
          padding: "4px"
        }}
      >
        <BottomNavigationAction label="Reddit" icon={<RedditIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="YouTube" icon={<YouTubeIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
