import React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Features = ({ headline, copy, items }) => {
  const theme = useTheme();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 4, sm: 8 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h3" variant="h3" color="text.primary">
              {headline}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              {copy}
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : ""
                  }
                }}
              />
            ))}
          </Grid>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              mt: 4,
              flexDirection: "column",
              gap: 2,
              alignItems: "center"
            }}
          >
            <img
              height="auto"
              width="100%"
              src={
                theme.palette.mode === "light"
                  ? items[selectedItemIndex].imageLight
                  : items[selectedItemIndex].imageDark
              }
              alt={items[selectedItemIndex].imageAlt}
              style={{ borderRadius: "12px" }}
            />
            <Box sx={{ padding: 2 }} component={Card} variant="outlined">
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index
                        ? "primary.light"
                        : "grey.200";
                    }
                    return selectedItemIndex === index
                      ? "primary.dark"
                      : "grey.800";
                  }
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700";
                      }
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <img
            height={500}
            width="auto"
            src={
              theme.palette.mode === "light"
                ? items[selectedItemIndex].imageLight
                : items[selectedItemIndex].imageDark
            }
            alt={items[selectedItemIndex].imageAlt}
            style={{ borderRadius: "12px", margin: "0 auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
