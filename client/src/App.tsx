
import React from 'react';
import { Rout } from './routes';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';


  
function App() {
    return (
        <Box
            sx={{
                width: '100vw',
                maxWidth: '1366px',
                overflowX: 'hidden',
                margin: 0,
                padding: 0,
                background: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
            }}>
            <BrowserRouter>
                <Rout />
            </BrowserRouter>
            

        </Box>
        
    )
}

export default App;
