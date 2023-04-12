import { Box, IconButton, useTheme, Typography, Button, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useContext } from "react";
import { ColorModeContext, tokens } from "./Theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoDevIcon from '@mui/icons-material/LogoDev';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const pages = ["Doc", "Portfolios", "Contact"]

    return (
        <Grid display="flex" justifyContent="space-between" p={2}>
            <Box display="flex" sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <IconButton display="flex" size="medium">
                    <Stack direction="row" spacing={2}>
                        <LogoDevIcon />
                        <Typography>ADION FINANCE</Typography>
                    </Stack>
                </IconButton>
            </Box>
            <Box display="flex" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <IconButton display="flex" >
                    <LogoDevIcon />
                </IconButton>
            </Box>


            {/* ICONS */}
            <Box display="flex" gap={1}>
                {/* SEARCH BAR */}
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default Topbar;