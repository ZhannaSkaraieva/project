/**СТРАНИЦА СО ВСЕМИ КВЕСТАМИ */

import { Container } from '@mui/material'
import React from 'react'
import Header from '../components/header/header'

import Mainpage from '../components/mainpage'



const Allquests = () => {
  return (
    <Container maxWidth={false} disableGutters //удаленеи отступов в контейнере по бокам
            sx={{
                width: '1366px',
                height: '768px',
                background: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
            }}>
        <Header/>
        <Mainpage/>
    </Container>
  )
}

export default Allquests
