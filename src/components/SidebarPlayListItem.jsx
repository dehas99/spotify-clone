import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function SidebarPlayListItem() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        px={3}
        py={1}
        sx={{
          color: "text.secondary",
          cursor: "pointer",
          fontSize: 14,
        }}
      >
        Justin beiber
      </Box>
    </Link>
  );
}
