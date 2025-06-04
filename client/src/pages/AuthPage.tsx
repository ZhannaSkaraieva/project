/**СТРАНИЦА АВТОРИЗАЦИИ */

import { Container } from "@mui/material";
import React from "react";
import  Header  from "../components/header/header";

const AuthPage = () => { 
    return (
        <Container maxWidth={false} disableGutters //удаленеи отступов в контейнере по бокам
            sx={{
                width: '1366px',
                height: '768px',
                mt: '4px',
                background: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
            }}>
        
            <div>
                <h1>Authentication Page</h1>
                <p>Please log in or sign up to continue.</p>
            </div>
        </Container>
        
    );
}

export default AuthPage;