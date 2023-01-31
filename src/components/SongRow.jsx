import React from "react";
import { Box, Avatar, Typography, Grid } from "@mui/material";

export default function SongRow() {
  return (
    <Grid
      container
      px={2}
      py={1}
      sx={{
        color: "text.secondary",
        fontSize: 14,
        cursor: "pointer",
      }}
    >
      <Grid sx={{ width: 35, fontSize: 16 }}>1</Grid>

      <Grid
        item
        sx={{ flex: 1, display: "flex", alignItems: "Center", gap: 2 }}
      >
        <Avatar variant="square" />
        <Box sx={{ ml: 1 }}>
          <Typography sx={{ fontSize: 16, color: "text.primary" }}>
            Baby
          </Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            Justin Bieber
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
        My world
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        1:23
      </Grid>
    </Grid>
  );
}
