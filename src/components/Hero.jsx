import { Box, Container, Stack, Typography } from "@mui/material";

export default function Hero({ title, paragraphContent }) {
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 }
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="span"
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 4rem)",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "primary.light"
            }}
          >
            {title}
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ alignSelf: "left", width: { sm: "100%", md: "80%" } }}
          >
            {paragraphContent}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
