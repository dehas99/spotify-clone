import React from "react";
import { Box, Button } from "@mui/material";
import { accessUrl } from "../config";

export default function login() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "background.paper",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button href={accessUrl} size="large" variant="contained">
        login to spotify
      </Button>
    </Box>
  );
}
