
import { Box, Typography } from '@mui/material'
import Header from '@/components/Layout/Header'
import HeadLayout from '@/components/Layout/HeadLayout'

export default function Home() {
  return (
    <>
      <HeadLayout />
      <main>
        <Box m="20px" display="flex" justifyContent="space-between" alignItems="center" >
          <Header title="Finance Portfolios" subtitle="Technical Analysis" />
        </Box>
        <Box p="30px" m="20px" display="flex" justifyContent="center" alignItems="center" >
          <Typography variant='h2' >Main Page</Typography>
        </Box>
      </main>
    </>
  )
}
