import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../Layout/Theme';

const TecAnalyHeader = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div>
            <Box display="flex" justifyContent="center">
                <Grid display="flex" height="45px" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <Typography variant="h4"
                        align="center"
                        // color={colors.redAccent[400]}
                        fontWeight="bold"
                    >
                        Portfolio Model Configuration
                    </Typography>
                </Grid>
                {/* //Mobile */}
                <Grid display="flex" height="45px" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                    <Typography variant="h6"
                        align="center"
                        // color={colors.redAccent[400]}
                        fontWeight="bold"
                    >
                        Portfolio Model Configuration
                    </Typography>
                </Grid>
            </Box>
        </div>
    )
}

export default TecAnalyHeader
