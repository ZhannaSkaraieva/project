import { Box, Typography } from '@mui/material'

import React from 'react'

import QuestList from './questlist';
import BasicTabs from './basictabs';


const MainPage = () => {
  return (
    <Box>
      <Typography align='left'
        sx={{
          color: '#F2890F',
          fontFamily: 'Raleway,sans-serif',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '144%',
          ml: '137px',
          mt: '48px',
          }}>
        квесты в Санкт-Петербурге
      </Typography>
      <Typography align='left'
        sx={{
          color: '#FFF',
          fontFamily: 'Raleway,sans-serif',
          fontSize: '64px',
          fontStyle: 'normal',
          fontWeight: 800,
          lineHeight: '110 %', /* 70.4px */
          ml: '137px',
          mt: '5px',
        }}>
        Выберите тематику
      </Typography>
      <BasicTabs/>
      <QuestList/>
    </Box>
    
  )
}

export default MainPage;