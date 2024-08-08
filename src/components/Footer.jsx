import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import PersonalLogo from "../assets/Personal_Logo.png";

const logoStyle = {
  width: "auto",
  height: "36px",
  cursor: "pointer",
  borderRadius: "25px",
  marginLeft: "1rem"
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Robin Balatbat&nbsp;</Link>
      {"2024 - "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Container
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          gap: 4
        }}
      >
        <Box sx={{ alignSelf: "center" }}>
          <img
            src={PersonalLogo}
            style={logoStyle}
            alt="Robin Balatbat personal logo"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            justifyContent: { xs: "space-around", sm: "space-evenly" }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Home
            </Typography>
            <Link color="text.secondary" href="#">
              About Me
            </Link>
            <Link color="text.secondary" href="#">
              Highlights
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Projects
            </Typography>
            <Link color="text.secondary" href="#">
              Featured Projects
            </Link>
            <Link color="text.secondary" href="#">
              Future Projects
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Contact
            </Typography>
            <Link color="text.secondary" href="#">
              Form
            </Link>
            <Link color="text.secondary" href="#">
              Resume
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider"
        }}
      >
        <Stack
          sx={{
            textAlign: "left"
          }}
        >
          <Link
            target="_blank"
            color="text.secondary"
            href="https://github.com/mui/material-ui/tree/v5.16.6/docs/data/material/getting-started/templates/landing-page"
          >
            This website was made with the help of the MaterialUI Landing Page
            template (opens in new tab).
          </Link>
          <Copyright />
        </Stack>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary"
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/robin-balatbat"
            aria-label="Robin's GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/robin-balatbat/"
            aria-label="Robin's LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Footer;
