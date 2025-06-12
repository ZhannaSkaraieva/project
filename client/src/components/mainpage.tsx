import { Box, Typography } from '@mui/material'

import React from 'react'
import Questtabs from './questtabs';
import QuestList from './questlist';

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
          lineHeight: '144%'
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
          lineHeight: '110 %' /* 70.4px */
        }}>
        Выберите тематику
      </Typography>
      <Questtabs />
      <QuestList/>
    
    </Box>
    
  )
}

export default MainPage;