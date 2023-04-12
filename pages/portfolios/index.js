import HeadLayout from '@/components/Layout/HeadLayout'
import { Box, Stack, Typography, useTheme, Stepper, Step, StepLabel } from '@mui/material'
import Header from '@/components/Layout/Header'
import TecAnalysisStepper from '@/components/TecAnalysisStepper'
import { tokens } from '@/components/Layout/Theme';



export default function Portfolios() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <HeadLayout />
      <main>
        <Box display="block" p={2} sx={{ backgroundColor: colors.primary[400] }}>
          <Stack>
            <Box sx={{ backgroundColor: "green" }} height={150}>
              <Typography display="flex" variant='h3' alignItems="center" justifyContent="center" margin="auto">
                Photo
              </Typography>
            </Box>
            <Header title="Backtest Portfolio" subtitle="Technical Analysis" />
            <TecAnalysisStepper />
          </Stack>
        </Box>
      </main>
    </>
  )
}
