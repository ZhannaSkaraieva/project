/**СТРАНИЦА С КОНТАКТАМИ */

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../components/header/header";

export const Contacts = () => {
    return (
        <Container maxWidth={false}
            sx={{
                width: '1366px',
                height: '768px',
                background: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
            }}>
            <Header/>
        
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
        Контакты
                </Typography>
                <Box>
                    <Typography align='left'
                        sx={{
                            color: '#FFF',
                        }}>
                    </Typography>
                </Box>
      
    </Box>
       </Container>
    );
}