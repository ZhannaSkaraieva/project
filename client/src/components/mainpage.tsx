import { Box, Typography } from '@mui/material'
import React from 'react'

const MainPage = () => {
  return (
    <Box>
      <Typography align='left'
        sx={{
          color: '#F2890F',
          fontFamily: 'Raleway',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '144%'
          }}>
        квесты в Санкт-Петербурге
      </Typography>
      <Typography align='left'
        sx={{
          color: '#FFF',
          fontFamily: 'Raleway',
          fontSize: '64px',
          fontStyle: 'normal',
          fontweight: 800,
          lineHeight: '110 %' /* 70.4px */
        }}>
        Выберите тематику
      </Typography>
    </Box>
    
  )
}

export default MainPage;