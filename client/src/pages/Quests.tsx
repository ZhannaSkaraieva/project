/**ОПИСАНИЕ КВЕАТОВ */

import { Container } from "@mui/material";
import React from "react";
import Header from "../components/header/header";

export const Quests = () => { 
    return (
        <Container maxWidth={false}
            sx={{
                width: '1366px',
                height: '768px',
                background: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
            }}>
            <Header/>
        </Container>
     
    );
}