import { Box, Container, Stack, Typography } from "@mui/material";

export default function Hero({ title, paragraphContent, image }) {
  const { src, alt, height, width } = image;
  return (
    <Box id="hero">
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          gap: "1rem"
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              textAlign: { xs: "center", sm: "left" },
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
            color="text.secondary"
            sx={{
              alignSelf: { xs: "center", sm: "start" },
              width: { sm: "100%", md: "80%" },
              textAlign: { xs: "center", sm: "left" }
            }}
          >
            {paragraphContent}
          </Typography>
        </Stack>
        {image && (
          <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            style={{ borderRadius: "14px" }}
          />
        )}
      </Container>
    </Box>
  );
}
