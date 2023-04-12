import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
      <Box display="flex" align="center" p={2}>
        <Typography variant="body2" >
          Copyright © {new Date().getFullYear()} - ADION Company
        </Typography>
        
      </Box>
    </div>
  )
}

export default Footer
