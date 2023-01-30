import React from "react";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <button size="large" variant="contained">
        Hej spotify
      </button>
      Home
    </Box>
  );
}
