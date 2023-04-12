import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "./Theme";
import Grid from '@mui/material/Unstable_Grid2';

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid display="block" justifyContent="space-between" p={2}>
      <Typography
        variant="h3"
        color={colors.grey[300]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title} 
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default Header;