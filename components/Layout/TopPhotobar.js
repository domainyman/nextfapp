import { Box, Typography } from "@mui/material";
import React from "react";

function TopPhotobar() {
  return (
    <Box sx={{ backgroundColor: "green" }} height={150}>
      <Typography
        display="flex"
        variant="h3"
        alignItems="center"
        justifyContent="center"
        margin="auto"
      >
        Photo
      </Typography>
    </Box>
  );
}

export default TopPhotobar;
